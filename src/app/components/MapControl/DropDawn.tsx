import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { getAllRoutes } from '../../../axios/requests';

export const DropDown: React.FunctionComponent = () => {

  const [fetchedRoutes, setFetchedRoutes] = useState<Array<any>>([])

  const fetchAllRoutes = async () => {
    const fetchedData = await getAllRoutes();
    console.log(fetchedData);
    setFetchedRoutes(fetchedData)
    console.log(fetchedRoutes);

  }

  useEffect(() => {
    fetchAllRoutes()
  }, [])
  return (
    <div className='route-listblock'>
      <ul className='route-list'>
        {fetchedRoutes.length !=0 ? fetchedRoutes.map((el, ind) => {
          return <li key={ind} className='route-list-li'>
            <NavLink to={`/route/${el.id}`} className='route-list-li-a'>
              {el.title}
            </NavLink>
          </li>
        }) : <li>Нет данных</li>}
      </ul>
    </div>
  )
}