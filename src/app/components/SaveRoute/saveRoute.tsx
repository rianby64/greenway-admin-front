import React, { useCallback, useEffect, useState } from 'react';
import { SaveForm, SaveRouteType } from '../../../types/Types';
import { useTypedSelector } from './../../../redux/useTypedSelector.hook';
import { getRouteCategories, getRouteTypes, postRoute, postDotsIntoRoute, getDistricts } from '../../../axios/requests';
import { postLinesIntoRoute, getRouteDifficulty } from './../../../axios/requests';
import { SaveRouteSelectors } from './components/SaveRoute-selectors';
import { SaveRouteSwitches } from './components/SaveRoute-switches';
import { SaveRouteDurations } from './components/SaveRoute-durations';
import { SaveRouteInputs } from './components/SaveRoute-Inputs';
import { DistrictsCheckboxes } from './components/SaveRoute-Districts';
import { CategoriesCheckboxes } from './components/SaveRoute-Categories';
import { TypesCheckboxes } from './components/SaveRoute-Types';

export const SaveRoute: React.FunctionComponent<SaveRouteType> = ({ isEditing, isShawn, setIsShawn }: SaveRouteType) => {
  const [routeTypes, setRouteTypes] = useState<Array<any>>([]);
  const [routeDif, setRouteDif] = useState<Array<any>>([]);
  const [routeCat, setRouteCat] = useState<Array<any>>([]);
  const [routeDistricts, setRouteDistricts] = useState<Array<any>>([]);
  const { distance, polilines, points } = useTypedSelector(store => store.route);
  const editingRoute = useTypedSelector(store => store.editing)
  const { id } = useTypedSelector(store => store.editing)
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
    type: []
  });

  const submitRoute = () => {
    saveForm.districts = routeDistricts.filter((el) => el.checked).map((el) => el.id);
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
      })
    })
    console.log(saveForm, durationArr);
    if (checkRequiredFields()) {
      if (!isEditing) {
        postRoute(saveForm.approved, saveForm.animals, saveForm.children, saveForm.wheelChair, saveForm.visuallyImpaired, saveForm.minutes, saveForm.title, saveForm.description, saveForm.type, saveForm.categories, saveForm.districts, saveForm.difficulty, durationArr, distance)
          .then((response) => {
            postLinesIntoRoute(polilines, response)
            postDotsIntoRoute(points, response)
          })
          .then(() => window.location.replace('/'))
      } else {
        postRoute(saveForm.approved, saveForm.animals, saveForm.children, saveForm.wheelChair, saveForm.visuallyImpaired, saveForm.minutes, saveForm.title, saveForm.description, saveForm.type, saveForm.categories, saveForm.districts, saveForm.difficulty, durationArr, distance, true, id)
          .then(() => {
            postLinesIntoRoute(polilines, id);
            postDotsIntoRoute(points, id)
          }).then(() => window.location.replace('/'))
      }
    } else alert('form is not filled')
  }

  const mapDistricts = (arr) => {
    setRouteDistricts(arr.map((el) => {
      return {
        title: el.title,
        id: el.id,
        checked: !!editingRoute.districts.find((elem) => {
          return elem.id === el.id
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

  const fetchRoutetype = useCallback(async () => {
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
    console.log(saveForm);
    if (saveForm.categories.length === 0 || saveForm.type.length === 0 || saveForm.difficulty === '' || saveForm.districts.length === 0) return false
    else return true
  }, [saveForm])
  useEffect(() => {
    console.log(saveForm);
    fetchRoutetype();
    mapDistricts(routeDistricts);
    mapRouteCat(routeCat);
    mapRouteTypes(routeTypes);
    if (editingRoute.id != '') {
      setSaveForm({
        title: editingRoute.title,
        description: editingRoute.description,
        difficulty: editingRoute.difficulty,
        minutes: editingRoute.minutes,
        animals: editingRoute.animals,
        children: editingRoute.children,
        wheelChair: editingRoute.wheelChair,
        visuallyImpaired: editingRoute.visuallyImpaired,
        approved: editingRoute.approve,
        durations: editingRoute.durations,
        categories: editingRoute.categories,
        districts: editingRoute.districts,
        type: editingRoute.types
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
          <SaveRouteInputs saveForm={saveForm} setSaveForm={setSaveForm} />
          <SaveRouteSwitches saveForm={saveForm} setSaveForm={setSaveForm} />
          <DistrictsCheckboxes array={routeDistricts} />
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
          <button type='button' className='btn pink' onClick={submitRoute}>Отправить на сервер</button>
        </form>
      </div>
    </div>
  )
}