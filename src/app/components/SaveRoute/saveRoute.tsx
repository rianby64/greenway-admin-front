import React, { useCallback, useEffect, useState } from 'react';
import { SaveForm, SaveRouteType } from '../../../types/Types';
import { useTypedSelector } from './../../../redux/useTypedSelector.hook';
import { getRouteCategories, getRouteTypes, postRoute, postDotsIntoRoute, getDistricts, deleteFromUsersRoutes } from '../../../axios/requests';
import { postLinesIntoRoute, getRouteDifficulty } from './../../../axios/requests';
import { SaveRouteSwitches } from './components/SaveRoute-switches';
import { SaveRouteDurations } from './components/SaveRoute-durations';
import { SaveRouteInputs } from './components/SaveRoute-Inputs';
import { AreasCheckboxes } from './components/SaveRoute-Area';
import { CategoriesCheckboxes } from './components/SaveRoute-Categories';
import { TypesCheckboxes } from './components/SaveRoute-Types';
import { SaveRouteCreator } from './components/SaveRoute-Creator';
import * as Styled from './components/styled.js';
import {PopUpText} from "../../../constants/Text1";
import NewPopUp from "./common-components/NewPopUp";
import girl from "../../images/Girl.png";
import left from "../../images/Group 98 (1).png";
import right from "../../images/Group 97.png";
import PopUpEnd from "../PopUpComponents/PopUpEnd";
import byguide from "../../images/ByGuide.png";
// import PopUpBegin from "../PopUpComponents/PopUpBegin";
// import PopUp from "./components/PopUp";

export const SaveRoute: React.FunctionComponent<SaveRouteType> = ({ isEditing, isShawn, setIsShawn }: SaveRouteType) => {
  const [routeTypes, setRouteTypes] = useState<Array<any>>([]);
  const [routeDif, setRouteDif] = useState<Array<any>>([]);
  const [routeCat, setRouteCat] = useState<Array<any>>([]);
  const [routeDistricts, setRouteDistricts] = useState<Array<any>>([]);
  const { distance, polilines, points } = useTypedSelector(store => store.route);
  const editingRoute = useTypedSelector(store => store.editing);
  const { id, isUsers } = useTypedSelector(store => store.editing);
  const [isVisible, setisVisible] = useState(false);
  const [saveForm, setSaveForm] = useState<SaveForm>({
    title: '',
    description: '',
    difficulty: '',
    minutes: 0,
    animals: false,
    children: false,
    wheelChair: false,
    visuallyImpaired: false,
    approved: false,
    durations: [],
    categories: [],
    districts: [],
    type: [],
    images: [''],
    creator: {
      email: '',
      logo: '',
      name: '',
      phone: '',
      url: '',
    }
  });

  const openModal = () =>{
    setisVisible(true)

  }
  const closeModal = ()=>{
    setisVisible(false)
  }

  const submitRoute = () => {
    const districts: any[] = [];
    routeDistricts.forEach((el) => {
      console.log(el);
      el.district.filter((el) => el.checked).forEach((el) => districts.push(el.id));
    });
    saveForm.districts = districts;
    saveForm.categories = routeCat.filter((el) => el.checked).map((el) => el.id);
    saveForm.type = routeTypes.filter((el) => el.checked).map((el) => el.id);
    const durationArr: Array<{
      name: string,
      number: number
    }> = [];
    routeTypes.filter(el => el.checked).map(el => {
      durationArr.push({
        name: el.id,
        number: el.duration != '' ? el.duration : 0
      });
    })
    if (checkRequiredFields()) {
      if (!isEditing) {
        postRoute(saveForm.approved, saveForm.animals, saveForm.children, saveForm.wheelChair, saveForm.visuallyImpaired, saveForm.minutes, saveForm.title, saveForm.description, saveForm.type, saveForm.categories, saveForm.districts, saveForm.difficulty, durationArr, distance, saveForm.images, saveForm.creator)
          .then((response) => {
            postLinesIntoRoute(polilines, response);
            postDotsIntoRoute(points, response);
          }).then(() => setTimeout(() => {window.location.replace('/')}, 2000)).catch(() => console.log("Что-то пошло не так во время сохранения"));

      }else if (isEditing && isUsers ){
        postRoute(saveForm.approved, saveForm.animals, saveForm.children, saveForm.wheelChair, saveForm.visuallyImpaired, saveForm.minutes, saveForm.title, saveForm.description, saveForm.type, saveForm.categories, saveForm.districts, saveForm.difficulty, durationArr, distance, saveForm.images, saveForm.creator, false, true, id)
        .then((response) => {
          postLinesIntoRoute(polilines, response);
          postDotsIntoRoute(points, response);
        }).then(() => {deleteFromUsersRoutes(id)}).then(() => setTimeout(() => {window.location.replace('/')}, 2000)).catch(() => console.log("Что-то пошло не так во время сохранения"));
      } 
      else {
        postRoute(saveForm.approved, saveForm.animals, saveForm.children, saveForm.wheelChair, saveForm.visuallyImpaired, saveForm.minutes, saveForm.title, saveForm.description, saveForm.type, saveForm.categories, saveForm.districts, saveForm.difficulty, durationArr, distance, saveForm.images, saveForm.creator, true, false, id)
          .then(() => {
            postLinesIntoRoute(polilines, id);
            postDotsIntoRoute(points, id);
          }).then(() => setTimeout(() => {window.location.replace('/')}, 2000)).catch(() => console.log("Что-то пошло не так во время сохранения"));
      }
    } else alert('form is not filled');
  }

  const mapDistricts = (arr) => {
    setRouteDistricts(arr.map((el) => {
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
    }));
  }

  const mapRouteCat = (arr) => {
    setRouteCat(arr.map((el) => {
      return {
        title: el.title,
        id: el.id,
        checked: !!editingRoute.categories.find((elem) => {
          return elem.id === el.id
        })
      }
    }))
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
    setRouteTypes(arr.map((el) => {
      return {
        title: el.title,
        id: el.id,
        duration: editingRoute.durations[el.id] ?? '',
        checked: !!editingRoute.types.find((elem) => {
          return elem.id === el.id
        })
      }
    }));
  }

  const fetchRouteType = useCallback(async () => {
    const fetchedTypes = await getRouteTypes();
    const fetchedDifficulties = await getRouteDifficulty();
    const fetchedCat = await getRouteCategories();
    const fetchedDistricts = await getDistricts();
    mapDistricts(fetchedDistricts);
    mapRouteCat(fetchedCat);
    mapRouteTypes(fetchedTypes);
    setRouteDif(fetchedDifficulties);
  }, [editingRoute.id])

  const checkRequiredFields = useCallback(() => {
    if (saveForm.categories.length === 0 || saveForm.type.length === 0 || saveForm.difficulty === '' || saveForm.districts.length === 0) return false
    else return true
  }, [saveForm])

  useEffect(() => {
    fetchRouteType();
    mapDistricts(routeDistricts);
    mapRouteCat(routeCat);
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
    }
  }, [editingRoute])

  return (
    <div
      className='save-shadow'
      style={isShawn ?
        {
          position:"absolute",
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
          <SaveRouteCreator saveForm={saveForm} setSaveForm={setSaveForm}/>
          <SaveRouteInputs saveForm={saveForm}
                           setSaveForm={setSaveForm}
                           routeCat={routeCat}
                           routeDif={routeDif}
                           routeTypes={routeTypes} />
          <SaveRouteSwitches saveForm={saveForm} setSaveForm={setSaveForm} />
          <AreasCheckboxes array={routeDistricts} label={"Выберите область"} />
          <CategoriesCheckboxes array={routeCat} />
          <TypesCheckboxes saveForm={saveForm} setSaveForm={setSaveForm} array={routeTypes} seter={setRouteTypes} />
          <SaveRouteDurations array={routeTypes} saveForm={saveForm} setSaveForm={setSaveForm} />
          <div style={{maxWidth:'880px', width:'100%', margin:'0 auto'}} className='images'>
            <Styled.styledUnderTitleLabel style={{display:'flex', gap:'10px'}}>Фотографии маршрута
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
                    <Styled.styledInput style={{marginBottom:'10px', marginRight:'20px'}}className='image-input' type='text' placeholder='Вставьте ссылку на фотографию' value={el} onChange={(e) => imagesInputChange(e, index)} />
                    <Styled.styledButton style={{marginBottom:'10px'}} type='button' className='add-image' onClick={addImageElem}>ДОБАВИТЬ ЕЩЁ ФОТО</Styled.styledButton>
                  </div>

              )
            })}
          </div>
          <div style={{display:"flex", justifyContent:'center', marginTop:'100px'}}>
            <Styled.styledButton type='button' className='btn pink' onClick={openModal}>ОТПРАВИТЬ НА СЕРВЕР</Styled.styledButton>
          </div>
          <div style={{position: 'relative', marginTop:'80px'}}>
            {isVisible && (<PopUpEnd
                text={'123'}
                buttonSuccessText={'Privet'}
                buttonRejectText={'Privet'}
                height={'335px'}
                img={byguide}
                onSuccess={submitRoute}
                onReject={closeModal}
            />)}

            <img alt="left" style={{ width: '250px', height: '120px', position: 'absolute', bottom: '0' }} src={left} />
            <img alt="right" style={{ width: '250px', height: '120px', position: 'absolute', right: '0', bottom: '0' }} src={right} />
            <img alt="girl" style={{ width: '160px', height: '310px', position: 'absolute', bottom: '0', right: '0' }} src={girl} />
          </div>

        </form>
      </div>
    </div>
  )
}