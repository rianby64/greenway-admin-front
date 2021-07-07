import React from "react"
import { Checkbox } from 'react-materialize'
import { Districts } from "../../../../types/Types"

export const DistrictsCheckboxes: React.FunctionComponent<Districts> = ({ districts, saveForm, setSaveForm }) => {

  const checkBoxHandler = (elem: any) => {
    console.log(saveForm, typeof (setSaveForm));

    elem.checked = !elem.checked;
  }

  return (
    <>
      <label className='save-label'>Районы</label>
      <div className='district__checkBoxes'>
        {districts ? districts.map((el) => {
          return (
            <Checkbox className={'checkboxes'} checked={el.checked} filledIn id={`district_${el.id}`} label={el.title} onChange={() => checkBoxHandler(el)} value={el.id} />
          )
        }) : <Checkbox filledIn id={`district_Nodata`} label={`Нет данных`} disabled={true} value={''} />}
      </div>
    </>
  )
}