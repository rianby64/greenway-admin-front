import React from 'react';
import { SaveDurations } from '../../../../types/Types';

export const SaveRouteDurations: React.FunctionComponent<SaveDurations> = ({ saveForm, setSaveForm }) => {

  const durationsHandler = (e) => {
    const newDurations = saveForm.durations;
    newDurations.map((el: any) => {
      if (el.name === e.target.id) {
        el.number = e.target.value
      }
    })
    setSaveForm({
      ...saveForm,
      durations: newDurations
    })
  }

  return (
    <div className='durations'>
      {saveForm.type.map((el, ind) => {
        return (
          <input type='number' key={ind} placeholder={el.rus} id={el.title} onChange={durationsHandler} />
        )
      })}
    </div>
  )
}