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
      <Styled.styledTitleLabel className='save-label'>Введите данные маршрута</Styled.styledTitleLabel>
      <Styled.styledDivForInputs>
        <div>
          <div>
            <div className='input-block' >

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
            <div>
              <Styled.styledUnderTitleLabel className='distance'>Длинна маршрута: {distance} км.</Styled.styledUnderTitleLabel>
            </div>
            <div className='input-block'>
              <Styled.styledUnderTitleLabel className='save-label'>Введите описание маршрута</Styled.styledUnderTitleLabel>

            </div>
          </div>

        </div>
      </Styled.styledDivForInputs>
      <Styled.styledTextArea
          placeholder='Опишите маршрут'
          name='description'
          value={saveForm.description}
          onChange={changeHandler}
          className='save-input'
      >
        {saveForm.description}
      </Styled.styledTextArea>

    </>
  )
}