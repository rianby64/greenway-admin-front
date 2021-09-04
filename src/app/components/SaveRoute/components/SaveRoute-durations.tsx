import React from 'react';
import { SaveDurations } from '../../../../types/Types';

export const SaveRouteDurations: React.FunctionComponent<SaveDurations> = ({ array, setSaveForm, saveForm }) => {

  const durationsHandler = (el, ev) => {
    el.duration = ev.target.value;
    setSaveForm({
      ...saveForm,
      durations: array
    })
  }

  return (
    <div className='durations' style={{borderBottom: '1px solid black', marginBottom: '10px'}}>
      {array.filter((el) => el.checked).map((el) => {
        if (el.checked) {
          return (
            <input type='number' key={el.id} placeholder={`Продолжительнить при типе '${el.title}'`} id={el.title} onChange={(ev) => durationsHandler(el, ev)} value={el.duration} />
          )
        } else return null
      })}
    </div>
  )
}