import React from 'react';
import { SaveInputs } from '../../../../types/Types';
import { useTypedSelector } from '../../../../redux/useTypedSelector.hook';
import * as Styled from './styled.js';
export const SaveRouteInputs: React.FunctionComponent<SaveInputs> = ({ saveForm, setSaveForm }) => {

  const { distance } = useTypedSelector(store => store.route);


  const changeHandler = (e: any) => {
    let { name, value } = e.target;
    setSaveForm({ ...saveForm, [name]: value });
  }

  return (
    <>
      <div>
        <div className='input-block' >
          <Styled.styledTitleLabel className='save-label'>Введите назввание маршрута</Styled.styledTitleLabel>
          <Styled.styledPInput>Название маршрута</Styled.styledPInput>
          <Styled.styledInput
            placeholder='Экологическая тропа «Окно в природу»'
            name='title'
            value={saveForm.title}
            onChange={changeHandler}
            className='save-input'
          >
          </Styled.styledInput>
        </div>
        <div className='input-block'>
          <Styled.styledTitleLabel className='save-label'>Введите описание маршрута</Styled.styledTitleLabel>
          <Styled.styledTextArea
            placeholder='Опишите маршрут'
            name='description'
            value={saveForm.description}
            onChange={changeHandler}
            className='save-input'
          >
            {saveForm.description}
          </Styled.styledTextArea>
        </div>
      </div>
      <div>
        <p className='distance'>Длинна маршрута: {distance} км.</p>
      </div>
    </>
  )
}