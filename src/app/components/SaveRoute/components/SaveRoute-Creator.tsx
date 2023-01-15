import React from 'react';
import { SaveInputs } from '../../../../types/Types';
import * as Styled from './styled.js';
export const SaveRouteCreator: React.FunctionComponent<SaveInputs> = ({ saveForm, setSaveForm }) => {

  const changeHandler = (e: any) => {
    let { name, value } = e.target;
    setSaveForm({
      ...saveForm, creator: {
        ...saveForm.creator,
        [name]: value
      }
    });
    console.log(saveForm.creator);
  }

  return (
    <>
        <Styled.styledTitleLabel>Введите ваши контактные данные</Styled.styledTitleLabel>
        <Styled.styledDiv>

        <Styled.styledDivInputs>
            <Styled.styledPInput>Email</Styled.styledPInput>
            <Styled.styledInput
                placeholder='bober@gmail.com'
                type='text'
                name='email'
                value={saveForm.creator.email}
                onChange={changeHandler}
                className='save-input'
            />
        </Styled.styledDivInputs>
        <Styled.styledDivInputs>
            <Styled.styledPInput>Ссылка на ваше лого (если есть)</Styled.styledPInput>
            {/* <label className='save-label'>Введите время прохода маршрута в минутах</label> */}
            <Styled.styledInput
                placeholder='Скопируйте ссылку на Ваш логотип'
                type='text'
                name='logo'
                value={saveForm.creator.logo}
                onChange={changeHandler}
                className='save-input'
            />
        </Styled.styledDivInputs>
        <Styled.styledDivInputs>
            <Styled.styledPInput>Ваше имя</Styled.styledPInput>
            {/* <label className='save-label'>Введите время прохода маршрута в минутах</label> */}
            <Styled.styledInput
                placeholder='Иван'
                type='text'
                name='name'
                value={saveForm.creator.name}
                onChange={changeHandler}
                className='save-input'
            />
        </Styled.styledDivInputs>
        <Styled.styledDivInputs>
            <Styled.styledPInput>Ваш телефон</Styled.styledPInput>
            {/* <label className='save-label'>Введите время прохода маршрута в минутах</label> */}
            <Styled.styledInput
                placeholder='+375 (29/33) 000 00 00'
                type='text'
                name='phone'
                value={saveForm.creator.phone}
                onChange={changeHandler}
                className='save-input'
            />
        </Styled.styledDivInputs>
        <Styled.styledDivInputs>
            <Styled.styledPInput>Ссылка на ваш сайт (вашей организации)</Styled.styledPInput>
            {/* <label className='save-label'>Введите время прохода маршрута в минутах</label> */}
            <Styled.styledInput
                placeholder='Скопируйте ссылку на Ваш сайт'
                type='text'
                name='url'
                value={saveForm.creator.url}
                onChange={changeHandler}
                className='save-input'
            />
        </Styled.styledDivInputs>
    </Styled.styledDiv>

    </>
  )
}