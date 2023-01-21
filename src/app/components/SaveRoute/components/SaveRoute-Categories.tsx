import React from "react"
import { Checkbox } from 'react-materialize'
import { Checkboxes } from "../../../../types/Types"
import * as Styled from "./styled";
export const CategoriesCheckboxes: React.FunctionComponent<Checkboxes> = ({ array }) => {

  const checkBoxHandler = (elem: any) => {
    elem.checked = !elem.checked;
  }

  return (
    <>
        <Styled.styledDiv style={{flexDirection:'column', marginBottom:'60px'}}>
            <Styled.styledUnderTitleLabel className='save-label'>Выберите категорию (категории)*</Styled.styledUnderTitleLabel>
            <div className='district__checkBoxes'>
                {array ? array.map((el) => {
                    return (
                        <Checkbox className={'checkboxes'} checked={el.checked} filledIn id={`district_${el.id}`} label={el.title} onChange={() => checkBoxHandler(el)} value={el.id} />
                    )
                }) : <Checkbox filledIn id={`district_Nodata`} label={`Нет данных`} disabled={true} value={''} />}
            </div>
        </Styled.styledDiv>


    </>
  )
}