import React from "react"
import { Checkbox } from 'react-materialize'
import { TypesCheckboxesInterface } from "../../../../types/Types";

export const TypesCheckboxes: React.FunctionComponent<TypesCheckboxesInterface> = ({ array, seter, saveForm, setSaveForm }) => {

  const checkBoxHandler = (elem: any) => {
    elem.checked = !elem.checked;
    seter(array);
    setSaveForm({
      ...saveForm,
      type: array.filter(el => el.checked),
    })
  }

  return (
    <>
      <label className='save-label'>Способы перемещения</label>
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