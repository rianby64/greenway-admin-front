import React from 'react';
import { SaveInputs } from '../../../../types/Types';
import { useTypedSelector } from '../../../../redux/useTypedSelector.hook';

export const SaveRouteInputs: React.FunctionComponent<SaveInputs> = ({ saveForm, setSaveForm }) => {

  const { distance } = useTypedSelector(store => store.route);


  const changeHandler = (e: any) => {
    let { name, value } = e.target;
    setSaveForm({ ...saveForm, [name]: value });
  }

  return (
    <>
      <div style={{ display: 'flex', width: '95%' }}>
        <div className='input-block' >
          <label className='save-label'>Введите назввание маршрута</label>
          <input
            placeholder='Название маршрута'
            name='title'
            value={saveForm.title}
            onChange={changeHandler}
            className='save-input'
          >
          </input>
        </div>
        <div className='input-block'>
          <label className='save-label'>Введите описание маршрута</label>
          <textarea
            placeholder='Описание маршрута'
            name='description'
            value={saveForm.description}
            onChange={changeHandler}
            className='save-input'
          >
            {saveForm.description}
          </textarea>
        </div>
      </div>
      <div style={{ display: 'flex', width: '100%' }}>
        <p className='distance'>Длинна маршрута: {distance} км.</p>
      </div>
    </>
  )
}