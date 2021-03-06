import React, { useCallback, useEffect, useState } from 'react';
import { SaveForm, SaveRouteType } from '../../../types/Types';
import { useTypedSelector } from './../../../redux/useTypedSelector.hook';
import { getRouteCategories, getRouteTypes, postRoute, postDotsIntoRoute, getDistricts, deleteFromUsersRoutes } from '../../../axios/requests';
import { postLinesIntoRoute, getRouteDifficulty } from './../../../axios/requests';
import { SaveRouteSelectors } from './components/SaveRoute-selectors';
import { SaveRouteSwitches } from './components/SaveRoute-switches';
import { SaveRouteDurations } from './components/SaveRoute-durations';
import { SaveRouteInputs } from './components/SaveRoute-Inputs';
import { AreasCheckboxes } from './components/SaveRoute-Area';
import { CategoriesCheckboxes } from './components/SaveRoute-Categories';
import { TypesCheckboxes } from './components/SaveRoute-Types';
import { SaveRouteCreator } from './components/SaveRoute-Creator';

export const SaveRoute: React.FunctionComponent<SaveRouteType> = ({ isEditing, isShawn, setIsShawn }: SaveRouteType) => {
  const [routeTypes, setRouteTypes] = useState<Array<any>>([]);
  const [routeDif, setRouteDif] = useState<Array<any>>([]);
  const [routeCat, setRouteCat] = useState<Array<any>>([]);
  const [routeDistricts, setRouteDistricts] = useState<Array<any>>([]);
  const { distance, polilines, points } = useTypedSelector(store => store.route);
  const editingRoute = useTypedSelector(store => store.editing);
  const { id, isUsers } = useTypedSelector(store => store.editing);
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
          }).then(() => setTimeout(() => {window.location.replace('/')}, 2000)).catch(() => console.log("??????-???? ?????????? ???? ?????? ???? ?????????? ????????????????????"));

      }else if (isEditing && isUsers ){
        postRoute(saveForm.approved, saveForm.animals, saveForm.children, saveForm.wheelChair, saveForm.visuallyImpaired, saveForm.minutes, saveForm.title, saveForm.description, saveForm.type, saveForm.categories, saveForm.districts, saveForm.difficulty, durationArr, distance, saveForm.images, saveForm.creator, false, true, id)
        .then((response) => {
          postLinesIntoRoute(polilines, response);
          postDotsIntoRoute(points, response);
        }).then(() => {deleteFromUsersRoutes(id)}).then(() => setTimeout(() => {window.location.replace('/')}, 2000)).catch(() => console.log("??????-???? ?????????? ???? ?????? ???? ?????????? ????????????????????"));
      } 
      else {
        postRoute(saveForm.approved, saveForm.animals, saveForm.children, saveForm.wheelChair, saveForm.visuallyImpaired, saveForm.minutes, saveForm.title, saveForm.description, saveForm.type, saveForm.categories, saveForm.districts, saveForm.difficulty, durationArr, distance, saveForm.images, saveForm.creator, true, false, id)
          .then(() => {
            postLinesIntoRoute(polilines, id);
            postDotsIntoRoute(points, id);
          }).then(() => setTimeout(() => {window.location.replace('/')}, 2000)).catch(() => console.log("??????-???? ?????????? ???? ?????? ???? ?????????? ????????????????????"));
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
          <SaveRouteInputs saveForm={saveForm} setSaveForm={setSaveForm} />
          <SaveRouteSwitches saveForm={saveForm} setSaveForm={setSaveForm} />
          <AreasCheckboxes array={routeDistricts} label={"???????????????? ??????????????"} />
          <CategoriesCheckboxes array={routeCat} />
          <SaveRouteSelectors
            saveForm={saveForm}
            setSaveForm={setSaveForm}
            routeCat={routeCat}
            routeDif={routeDif}
            routeTypes={routeTypes}
          />
          <TypesCheckboxes saveForm={saveForm} setSaveForm={setSaveForm} array={routeTypes} seter={setRouteTypes} />
          <SaveRouteDurations array={routeTypes} saveForm={saveForm} setSaveForm={setSaveForm} />
          <div className='images'>
            {saveForm.images.map((el, index) => {
              console.log(el, index);
              return (
                <div className="images-input">
                  <div className='inputs'>
                    <input className='image-input' type='text' placeholder='???????????????? ???????????? ???? ????????????????????' value={el} onChange={(e) => imagesInputChange(e, index)} />
                    <p className='add-image' onClick={addImageElem}>???????????????? ?????? ????????</p>
                  </div>
                </div>
              )
            })}
          </div>
          <button type='button' className='btn pink' onClick={submitRoute}>?????????????????? ???? ????????????</button>
        </form>
      </div>
    </div>
  )
}