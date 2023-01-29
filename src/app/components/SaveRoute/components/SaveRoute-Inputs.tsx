import React from 'react';
import { SaveInputs } from '../../../../types/Types';
import { useTypedSelector } from '../../../../redux/useTypedSelector.hook';
import * as Styled from './styled.js';
import {SaveRouteSelectors} from "./SaveRoute-selectors";
import {PopUpText} from "../../../../constants/Text1";
import NewPopUp from "./NewPopUp";

export const SaveRouteInputs: React.FunctionComponent<SaveInputs> = ({ saveForm, setSaveForm,  routeCat, routeDif, routeTypes}) => {

  const { distance } = useTypedSelector(store => store.route);

  const changeHandler = (e: any) => {
    let { name, value } = e.target;
    setSaveForm({ ...saveForm, [name]: value });
  }

  return (
    <>
        <div>
            <Styled.styledTitleLabel  style={{display:'flex', gap:'70px'}} className='save-label'>
                Введите данные маршрута
                <Styled.styledSpan><span style={{color:'#0E7505'}}>*</span> - обязательное поле</Styled.styledSpan>
            </Styled.styledTitleLabel>

        </div>
        <Styled.styledDivInformation style={{marginBottom:'70px'}}>
            <div style={{width:'100%' ,maxWidth:'350px'}} className='input-block' >
                    <Styled.styledPInput style={{marginTop:'0'}}>Название маршрута <span style={{color:'#0E7505'}}>*</span></Styled.styledPInput>
                    <Styled.styledInput
                        placeholder='Экологическая тропа «Окно в природу»'
                        name='title'
                        value={saveForm.title}
                        onChange={changeHandler}
                        className='save-input'
                    >
                    </Styled.styledInput>
                </div>

                <div style={{display:'flex', gap:'15px', flexDirection:'column'}}>
                    <Styled.styledUnderTitleLabel style={{display:'flex', gap:'10px'}}>
                        Длина маршрута:
                        <NewPopUp content={PopUpText.popUp2}/>
                    </Styled.styledUnderTitleLabel>
                    <div style={{background: '#D3DFB9', padding:'13px 24px'}}><Styled.styledUnderTitleLabel>{distance} км </Styled.styledUnderTitleLabel></div>
                </div>
            <SaveRouteSelectors saveForm={saveForm} setSaveForm={setSaveForm} routeTypes={routeTypes} routeDif={routeDif} routeCat={routeCat}/>
        </Styled.styledDivInformation>

        <Styled.styledDiv style={{flexDirection:'column', marginBottom:'60px'}}>
            <div className='input-block'>
                <Styled.styledUnderTitleLabel style={{display:'flex', justifyContent:'space-between', width:'100%'}} className='save-label'>
                    Введите описание маршрута <span style={{color:'#0E7505'}}>*</span>
                    <NewPopUp content={PopUpText.popUp3}/>
                </Styled.styledUnderTitleLabel>
            </div>
            <Styled.styledTextArea
                placeholder='Опишите маршрут'
                name='description'
                value={saveForm.description}
                onChange={changeHandler}
                className='save-input'
            >
                {saveForm.description}
            </Styled.styledTextArea>
        </Styled.styledDiv>


    </>
  )
}