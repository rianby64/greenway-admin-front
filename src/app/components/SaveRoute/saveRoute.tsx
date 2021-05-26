import React, { useCallback, useEffect, useState } from 'react';
import { SaveForm, SaveRouteType } from '../../../types/Types';
import { useTypedSelector } from './../../../redux/useTypedSelector.hook';
import { getRouteCategories, getRouteTypes, postRoute, putDotsIntoRoute } from '../../../axios/requests';
import { putLinesIntoRoute, getRouteDifficulty } from './../../../axios/requests';
import { SaveRouteSelectors } from './components/SaveRoute-selectors';
import { SaveRouteSwitches } from './components/SaveRoute-switches';
import { SaveRouteDurations } from './components/SaveRoute-durations';
import { SaveRouteInputs } from './components/SaveRoute-Inputs';

export const SaveRoute: React.FunctionComponent<SaveRouteType> = ({ isShawn, setIsShawn }: SaveRouteType) => {
  const [routeTypes, setRouteTypes] = useState<Array<any>>([]);
  const [routeDif, setRouteDif] = useState<Array<any>>([]);
  const [routeCat, setRouteCat] = useState<Array<any>>([]);
  const { distance, polilines, points } = useTypedSelector(store => store.route);
  const [saveForm, setSaveForm] = useState<SaveForm>({
    title: '',
    description: '',
    difficulty: '',
    minutes: 0,
    animals: false,
    children: false,
    disabilities: false,
    approved: false,
    durations: [],
    categories: [],
    type: []
  });

  const submitRoute = () => {
    postRoute(saveForm.approved, saveForm.animals, saveForm.children, saveForm.disabilities, saveForm.minutes, saveForm.title, saveForm.description, saveForm.type, saveForm.categories, saveForm.difficulty, saveForm.durations, distance)
      .then((response) => {
        putLinesIntoRoute(polilines, response)
        putDotsIntoRoute(points, response)
      })
  }

  const fetchRoutetype = useCallback(async () => {
    const fetchedTypes = await getRouteTypes();
    const fetchedDifficulties = await getRouteDifficulty();
    const fetchedCat = await getRouteCategories();
    setRouteCat(fetchedCat);
    setRouteTypes(fetchedTypes);
    setRouteDif(fetchedDifficulties);
  }, [])

  useEffect(() => {
    fetchRoutetype();
  }, [])

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