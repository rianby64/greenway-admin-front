import React, { useCallback, useEffect, useState } from 'react';
import { SaveForm, SaveRouteType } from '../../../../types/Types';
import { useTypedSelector } from '../../../../redux/useTypedSelector.hook';
import { getRouteCategories, getRouteTypes, postRoute, postDotsIntoRoute, getDistricts, deleteFromUsersRoutes } from '../../../../axios/requests';
import { postLinesIntoRoute, getRouteDifficulty } from '../../../../axios/requests';
import { SaveRouteSwitches } from './components/saveRoute-switches/SaveRoute-switches';
import { SaveRouteDurations } from './components/saveRoute-durations/SaveRoute-durations';
import { SaveRouteInputs } from './components/saveRoute-Inputs/SaveRoute-Inputs';
import { AreasCheckboxes } from './components/saveRoute-Area/SaveRoute-Area';
import { CategoriesCheckboxes } from './components/saveRoute-Categories/SaveRoute-Categories';
import { TypesCheckboxes } from './components/saveRoute-Types/SaveRoute-Types';
import { SaveRouteCreator } from './components/saveRoute-Creator/SaveRoute-Creator';
import * as Styled from './styled.js';
import { PopUpText } from "../../../../constants/Text1";
import NewPopUp from "../popUp/NewPopUp";
import girl from "../../../images/Girl.png";
import left from "../../../images/Group 98 (1).png";
import right from "../../../images/Group 97.png";
import PopUpModal from "../PopUpComponents/PopUpModal";
import byguide from "../../../images/ByGuide.png";
import { useDispatch } from 'react-redux';
import { setCategories, setDistricts, setRouteDifficulties, setRouteTypes } from '../../../../redux/useSettingsReducer';
import { initialSaveForm } from '../../../../constants/sharedConstants';
import { useHistory } from 'react-router-dom';
import { removeEditingRoute } from '../../../../redux/useEditRouteReducer';
import { fetchAllRoutes } from '../../utils/utils';

export const SaveRoute: React.FunctionComponent<SaveRouteType> = ({ isEditing, isShawn, setIsShawn }: SaveRouteType) => {
  const history = useHistory()
  const { routeCategories, routeTypes, routeDifficulties, districts } = useTypedSelector((store) => store.settings);
  const dispatch = useDispatch();
  const [routeTypesState, setRouteTypesState] = useState<Array<any>>([]);
  const [routeDistrictsState, setRouteDistrictsState] = useState<Array<any>>([]);
  const { distance, polilines, points } = useTypedSelector(store => store.route);
  const editingRoute = useTypedSelector(store => store.editing);
  const { id, isUsers } = useTypedSelector(store => store.editing);
  const [isVisible, setisVisible] = useState(false);
  const [saveForm, setSaveForm] = useState<SaveForm>(initialSaveForm);

  const openModal = () => {
    setisVisible(true);
  }
  const closeModal = () => {
    setisVisible(false)
  }

  const submitRoute = async () => {
    const districts: any[] = [];
    routeDistrictsState.forEach((el) => {
      console.log(el);
      el.district.filter((el) => el.checked).forEach((el) => districts.push(el.id));
    });
    saveForm.districts = districts;
    if (routeCategories) {
      saveForm.categories = routeCategories.filter((el) => el.checked).map((el) => el.id);
    }
    saveForm.type = routeTypesState.filter((el) => el.checked).map((el) => el.id);
    const durationArr: Array<{
      name: string,
      number: number
    }> = [];
    routeTypesState.filter(el => el.checked).map(el => {
      durationArr.push({
        name: el.id,
        number: el.duration != '' ? el.duration : 0
      });
    })
    if (checkRequiredFields()) {
      if (!isEditing) {
        await postRoute(saveForm.approved, saveForm.animals, saveForm.children, saveForm.wheelChair, saveForm.visuallyImpaired, saveForm.minutes, saveForm.title, saveForm.description, saveForm.type, saveForm.categories, saveForm.districts, saveForm.difficulty, durationArr, distance, saveForm.images, saveForm.creator)
          .then((response) => {
            postLinesIntoRoute(polilines, response);
            postDotsIntoRoute(points, response);
          }).then(() => { setIsShawn(false); dispatch(removeEditingRoute); }).catch(() => console.log("Что-то пошло не так во время сохранения"));
        fetchAllRoutes(dispatch)
      } else if (isEditing && isUsers) {
        postRoute(saveForm.approved, saveForm.animals, saveForm.children, saveForm.wheelChair, saveForm.visuallyImpaired, saveForm.minutes, saveForm.title, saveForm.description, saveForm.type, saveForm.categories, saveForm.districts, saveForm.difficulty, durationArr, distance, saveForm.images, saveForm.creator, false, true, id)
          .then((response) => {
            postLinesIntoRoute(polilines, response);
            postDotsIntoRoute(points, response);
          }).then(() => {
            deleteFromUsersRoutes(id)
          }).then(async () => { history.push("/"); setIsShawn(false); dispatch(removeEditingRoute); }).catch(() => console.log("Что-то пошло не так во время сохранения"));
      } else {
        postRoute(saveForm.approved, saveForm.animals, saveForm.children, saveForm.wheelChair, saveForm.visuallyImpaired, saveForm.minutes, saveForm.title, saveForm.description, saveForm.type, saveForm.categories, saveForm.districts, saveForm.difficulty, durationArr, distance, saveForm.images, saveForm.creator, true, false, id)
          .then(() => {
            postLinesIntoRoute(polilines, id);
            postDotsIntoRoute(points, id);
          }).then(() => { history.push("/"); dispatch(removeEditingRoute); }).catch(() => console.log("Что-то пошло не так во время сохранения"));
      }
    } else {
      alert('form is not filled');
    }
  }

  const mapDistricts = (arr) => {
    const mappedDistricts = arr.map((el) => {
      return {
        title: el.title,
        id: el.id,
        checked: !!editingRoute.districts.find((elem) => {
          return elem.area.areaId === el.id
        }),
        district: el.district.map((elem) => {
          return {
            id: elem.id,
            areaId: elem.areaId,
            title: elem.title,
            checked: !!editingRoute.districts.find((elemEditing) => {
              return elemEditing.id === elem.id
            })
          }
        })
      }
    })
    dispatch(setDistricts(mappedDistricts));
    setRouteDistrictsState(mappedDistricts || [])
  }

  const mapRouteCat = (arr) => {
    dispatch(setCategories(arr.map((el) => {
      return {
        title: el.title,
        id: el.id,
        checked: !!editingRoute.categories.find((elem) => {
          return elem.id === el.id
        })
      }
    })));
  }

  const imagesInputChange = (e, ind) => {
    const editedImages = saveForm.images;
    editedImages[ind] = e.target.value;
    setSaveForm({
      ...saveForm,
      images: editedImages
    })
  }

  const addImageElem = () => {
    const newImages = saveForm.images;
    newImages.push('');
    setSaveForm({
      ...saveForm,
      images: newImages
    })
  }

  const mapRouteTypes = (arr) => {
    const mappedTypes = arr ? arr.map((el) => {
      return {
        title: el.title,
        id: el.id,
        duration: editingRoute.durations[el.id] ?? '',
        checked: !!editingRoute.types.find((elem) => {
          return elem.id === el.id
        })
      }
    }) : []
    dispatch(setRouteTypes(mappedTypes));
    setRouteTypesState(mappedTypes);
  }

  const fetchRouteType = async () => {
    if (routeTypes === null) {
      const fetchedTypes = await getRouteTypes();
      mapRouteTypes(fetchedTypes || []);
    }
    if (routeDifficulties === null) {
      const fetchedDifficulties = await getRouteDifficulty();
      dispatch(setRouteDifficulties(fetchedDifficulties));
    }
    if (routeCategories === null) {
      const fetchedCat = await getRouteCategories();
      mapRouteCat(fetchedCat || []);
    }
    if (districts === null) {
      const fetchedDistricts = await getDistricts();
      mapDistricts(fetchedDistricts || []);
    }
  }

  const checkRequiredFields = useCallback(() => {
    console.log(saveForm, 'while checking');

    if (saveForm.categories.length === 0 || saveForm.type.length === 0 || saveForm.difficulty === '' || saveForm.districts.length === 0) return false
    else return true
  }, [saveForm])

  useEffect(() => {
    fetchRouteType();
    mapDistricts(districts || []);
    mapRouteCat(routeCategories || []);
    mapRouteTypes(routeTypes);
    if (editingRoute.id !== '') {
      setSaveForm({
        title: editingRoute.title,
        description: editingRoute.description,
        difficulty: editingRoute.difficulty,
        minutes: editingRoute.minutes,
        animals: editingRoute.animals,
        children: editingRoute.children,
        wheelChair: editingRoute.wheelchair,
        visuallyImpaired: editingRoute.visuallyImpaired,
        approved: editingRoute.approve,
        durations: editingRoute.durations,
        categories: editingRoute.categories,
        districts: editingRoute.districts,
        type: editingRoute.types,
        images: editingRoute.images.length ? editingRoute.images : [''],
        creator: editingRoute.creator
      })
    } else {
      setSaveForm(initialSaveForm);
    }
  }, [editingRoute, isShawn])

  return (
    <div
      className='save-shadow'
      style={isShawn ?
        {
          position: "absolute",
          zIndex: 2000,
          width: '100%',
          background: 'rgb(14 14 14 / 65%',
        } : {
          display: 'none'
        }
      }
      onClick={() => setIsShawn(!isShawn)}
    >
      <div onClick={(e) => e.stopPropagation()} className='save-workspace'>
        <form className='save-route-form'>
          <SaveRouteCreator saveForm={saveForm} setSaveForm={setSaveForm} />
          <SaveRouteInputs saveForm={saveForm}
            setSaveForm={setSaveForm}
            routeCat={routeCategories}
            routeDif={routeDifficulties}
            routeTypes={routeTypes} />
          <SaveRouteSwitches saveForm={saveForm} setSaveForm={setSaveForm} />
          <AreasCheckboxes array={routeDistrictsState || []} label={"Выберите область"} />
          <CategoriesCheckboxes array={routeCategories || []} />
          <TypesCheckboxes saveForm={saveForm} setSaveForm={setSaveForm} array={routeTypesState || []} seter={setRouteTypesState} />
          <SaveRouteDurations array={routeTypes || []} saveForm={saveForm} setSaveForm={setSaveForm} />
          <div style={{ maxWidth: '880px', width: '100%', margin: '0 auto' }} className='images'>
            <Styled.styledUnderTitleLabel style={{ display: 'flex', gap: '10px' }}>Фотографии маршрута
              <NewPopUp
                content={PopUpText.popUp7}
                width={'400px'}
                height={'420px'}
                top={'-120px'}
                bottom={'0px'}
                right={'0px'}
                left={'20px'}
              />
            </Styled.styledUnderTitleLabel>
            {saveForm.images.map((el, index) => {
              console.log(el, index);
              return (

                <div className='inputs'>
                  <Styled.styledInput style={{ marginBottom: '10px', marginRight: '20px' }} className='image-input'
                    type='text' placeholder='Вставьте ссылку на фотографию' value={el}
                    onChange={(e) => imagesInputChange(e, index)} />
                  <Styled.styledButton style={{ marginBottom: '10px' }} type='button' className='add-image'
                    onClick={addImageElem}>ДОБАВИТЬ ЕЩЁ ФОТО</Styled.styledButton>
                </div>

              )
            })}
          </div>
          <div style={{ display: "flex", justifyContent: 'center', marginTop: '100px' }}>
            <Styled.styledButton type='button' className='btn pink' onClick={openModal}>ОТПРАВИТЬ НА
              СЕРВЕР</Styled.styledButton>
          </div>
          <div style={{ position: 'relative', marginTop: '80px' }}>
            <img alt="left" style={{ width: '250px', height: '120px', position: 'absolute', bottom: '0' }} src={left} />
            <img alt="right" style={{ width: '250px', height: '120px', position: 'absolute', right: '0', bottom: '0' }}
              src={right} />
            <img alt="girl" style={{ width: '160px', height: '310px', position: 'absolute', bottom: '0', right: '0' }}
              src={girl} />
          </div>

        </form>
      </div>
      {isVisible && (<PopUpModal
              text={'Убедитесь, что вся информация введена верно. После отправки на сервер внесение изменений невозможно. Маршрут будет направлен на модерацию. После прохождения модерации на ваш email (если он указан) будет направлено информационное письмо о принятии или отклонении маршрута.'}
              buttonSuccessText={'ОТПРАВИТЬ'}
              buttonRejectText={'НЕ ОТПРАВЛЯТЬ'}
              img={byguide}
              onSuccess={submitRoute}
              onReject={closeModal}
            />)}
    </div>
  )
}