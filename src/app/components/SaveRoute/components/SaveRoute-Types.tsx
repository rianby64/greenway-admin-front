import React from "react"
import { Checkbox } from 'react-materialize'
import { TypesCheckboxesInterface } from "../../../../types/Types";
import * as Styled from "./styled";
import {PopUpText} from "../../../../constants/Text1";
import CheckboxStyled from "./CheckboxStyled";
import NewPopUp from "./NewPopUp";
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
        <Styled.styledDiv style={{flexDirection:'column', marginBottom:'60px'}}>
            <Styled.styledUnderTitleLabel style={{display:"flex", gap:'10px'}} className='save-label'>Выберите способ(ы) перемещения <span style={{color:'#0E7505'}}>*</span>
                <NewPopUp
                    content={PopUpText.popUp6}
                    width={'230px'}
                    height={'240px'}
                    top={'5px'}
                    bottom={'0px'}
                    right={'0px'}
                    left={'20px'}
                />
            </Styled.styledUnderTitleLabel>
            <div style={{display:'flex', gap:'15px', textAlign:'center'}} className='district__checkBoxes'>
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