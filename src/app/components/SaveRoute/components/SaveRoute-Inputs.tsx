import React from 'react';
import { SaveInputs } from '../../../../types/Types';
import { useTypedSelector } from '../../../../redux/useTypedSelector.hook';
import * as Styled from './styled.js';
import {SaveRouteSelectors} from "./SaveRoute-selectors";
export const SaveRouteInputs: React.FunctionComponent<SaveInputs> = ({ saveForm, setSaveForm,  routeCat, routeDif, routeTypes}) => {

  const { distance } = useTypedSelector(store => store.route);


  const changeHandler = (e: any) => {
    let { name, value } = e.target;
    setSaveForm({ ...saveForm, [name]: value });
  }

  return (
    <>
        <Styled.styledTitleLabel className='save-label'>Введите данные маршрута</Styled.styledTitleLabel>
        <Styled.styledDivInformation style={{marginBottom:'70px'}}>
            <div style={{width:'100%' ,maxWidth:'350px'}} className='input-block' >
                    <Styled.styledPInput style={{marginTop:'0'}}>Название маршрута</Styled.styledPInput>
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
                    <Styled.styledUnderTitleLabel>Длина маршрута: </Styled.styledUnderTitleLabel>
                    <div style={{background: '#D3DFB9', padding:'13px 24px'}}>{distance} км</div>
                </div>
            <SaveRouteSelectors saveForm={saveForm} setSaveForm={setSaveForm} routeTypes={routeTypes} routeDif={routeDif} routeCat={routeCat}/>
        </Styled.styledDivInformation>

        <Styled.styledDiv style={{flexDirection:'column', marginBottom:'60px'}}>
            <div className='input-block'>
                <Styled.styledUnderTitleLabel className='save-label'>Введите описание маршрута</Styled.styledUnderTitleLabel>
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