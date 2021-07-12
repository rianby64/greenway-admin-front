import React from "react"
import { Checkbox } from 'react-materialize'
import { Checkboxes } from "../../../../types/Types"

export const DistrictsCheckboxes: React.FunctionComponent<Checkboxes> = ({ array }) => {

  const checkBoxHandler = (elem: any) => {
    elem.checked = !elem.checked;
  }

  return (
    <>
      <label className='save-label'>Районы</label>
      <div className='district__checkBoxes'>
        {array ? array.map((el) => {
          return (
            <Checkbox className={'checkboxes'} checked={el.checked} filledIn id={`district_${el.id}`} label={el.title} onChange={() => checkBoxHandler(el)} value={el.id} />
          )
        }) : <Checkbox filledIn id={`district_Nodata`} label={`Нет данных`} disabled={true} value={''} />}
      </div>
    </>
  )
}