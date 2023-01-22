import React, {useState} from "react"
import { Checkbox } from 'react-materialize'
import { Checkboxes } from "../../../../types/Types"
import * as Styled from "./styled";
import {PopUpText} from "../../../../constants/Text1";
import PopUp from "./PopUp";
import CheckboxStyled from "./CheckboxStyled";
export const CategoriesCheckboxes: React.FunctionComponent<Checkboxes> = ({ array }) => {
    const [modalActive, setModalActive] = useState();
  const checkBoxHandler = (elem: any) => {
    elem.checked = !elem.checked;
  }

  return (
    <>
        <Styled.styledDiv style={{flexDirection:'column', marginBottom:'60px'}}>
            <Styled.styledUnderTitleLabel style={{display:'flex', gap:'10px'}} className='save-label'>Выберите категорию (категории) <span style={{color:'#0E7505'}}>*</span>
                <PopUp content={PopUpText.popUp5} active={modalActive} setActive={setModalActive}/>
            </Styled.styledUnderTitleLabel>
            <div className='district__checkBoxes'>
                {array ? array.map((el) => {
                    return (
                        <CheckboxStyled isChecked={el.checked} label={el.title} onChange={() => checkBoxHandler(el)}/>
                        //<Checkbox className={'checkboxes'} checked={el.checked} filledIn id={`district_${el.id}`} label={el.title} onChange={() => checkBoxHandler(el)} value={el.id} />
                    )
                }) : <Checkbox filledIn id={`district_Nodata`} label={`Нет данных`} disabled={true} value={''} />}
            </div>
        </Styled.styledDiv>


    </>
  )
}