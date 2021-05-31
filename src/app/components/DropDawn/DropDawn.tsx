import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { getAllRoutes } from '../../../axios/requests';
import { setEditingRouteToStore } from '../../../redux/useEditRouteReducer';
import { useDispatch } from 'react-redux';

export const DropDown: React.FunctionComponent = () => {
  const [fetchedRoutes, setFetchedRoutes] = useState<Array<any>>([])
  const dispatch = useDispatch()

  const fetchAllRoutes = async () => {
    const fetchedData = await getAllRoutes();
    console.log(fetchedData);
    setFetchedRoutes(fetchedData);
    console.log(fetchedRoutes);
  }

  const setEditingRoute = (array) => {
    console.log(array);
    dispatch(setEditingRouteToStore(array));
  }

  useEffect(() => {
    fetchAllRoutes()
  }, [])
  return (
    <div className='route-listblock'>
      <ul className='route-list'>
        {fetchedRoutes ? fetchedRoutes.map((el, ind) => {
          return <li key={ind} className='route-list-li'>
            <NavLink onClick={() => setEditingRoute(el)} to={`/route/${el.id}`} className='route-list-li-a'>
              {el.title}
            </NavLink>
          </li>
        }) : <li>Нет данных</li>}
      </ul>
    </div>
  )
}