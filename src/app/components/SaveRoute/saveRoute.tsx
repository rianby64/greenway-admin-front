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

export const SaveRoute: React.FunctionComponent<SaveRouteType> = ({ isEditing, isShawn, setIsShawn }: SaveRouteType) => {
  const [routeTypes, setRouteTypes] = useState<Array<any>>([]);
  const [routeDif, setRouteDif] = useState<Array<any>>([]);
  const [routeCat, setRouteCat] = useState<Array<any>>([]);
  const [routeDistricts, setRouteDistricts] = useState<Array<any>>([]);
  const { distance, polilines, points } = useTypedSelector(store => store.route);
  const editingRoute = useTypedSelector(store => store.editing)
  const { id, dots } = useTypedSelector(store => store.editing)
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
    saveForm.districts = routeDistricts.filter((el) => el.checked ).map((el) => el.id)
    if (checkRequiredFields()) {
      if (!isEditing) {
        postRoute(saveForm.approved, saveForm.animals, saveForm.children, saveForm.wheelChair, saveForm.visuallyImpaired, saveForm.minutes, saveForm.title, saveForm.description, saveForm.type, saveForm.categories, saveForm.districts, saveForm.difficulty, saveForm.durations, distance)
          .then((response) => {
            postLinesIntoRoute(polilines, response)
            postDotsIntoRoute(points, response)
          })
          .then(() => window.location.replace('/'))
      } else {
        console.log('sent to edit');
        postRoute(saveForm.approved, saveForm.animals, saveForm.children, saveForm.wheelChair, saveForm.visuallyImpaired, saveForm.minutes, saveForm.title, saveForm.description, saveForm.type, saveForm.categories, saveForm.districts, saveForm.difficulty, saveForm.durations, distance, true, id)
          .then(() => {
            postLinesIntoRoute(polilines, id);
            dots.map((el) => {
              console.log(el, id);
              //deleteDot(id, el.id)
            })
            postDotsIntoRoute(points, id)
          }).then(() => window.location.replace('/'))
      }
    } else alert('form is not filled')
  }

  const mapDistricts = (arr) => {
    setRouteDistricts(arr.map((el) => {
      console.log(el);
      console.log(editingRoute.districts);
      return {
        title: el.title,
        id: el.id,
        checked: !!editingRoute.districts.find((elem) => {
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
    setRouteCat(fetchedCat);
    setRouteTypes(fetchedTypes);
    setRouteDif(fetchedDifficulties);
  }, [editingRoute.id])

  const checkRequiredFields = useCallback(() => {
    console.log(saveForm);
    if (saveForm.categories.length === 0 || saveForm.type.length === 0 || saveForm.durations.length === 0 || saveForm.difficulty === '' || saveForm.districts.length === 0) return false
    else return true

  }, [saveForm])
  useEffect(() => {
    fetchRoutetype();
    mapDistricts(routeDistricts);
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
        durations: [],
        categories: [],
        districts: editingRoute.districts,
        type: []
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
          <DistrictsCheckboxes districts={routeDistricts} saveForm={saveForm} setSaveForm={setSaveForm} />
          <SaveRouteSelectors
            saveForm={saveForm}
            setSaveForm={setSaveForm}
            routeCat={routeCat}
            routeDif={routeDif}
            routeTypes={routeTypes}
          />
          <SaveRouteDurations saveForm={saveForm} setSaveForm={setSaveForm} />
          <button type='button' className='btn pink' onClick={submitRoute}>Отправить на сервер</button>
        </form>
      </div>
    </div>
  )
}