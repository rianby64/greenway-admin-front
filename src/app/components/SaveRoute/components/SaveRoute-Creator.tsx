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
        <label className='save-label'>Введите ваши контактные данные</label>
        <Styled.styledDiv>

        <div className='input-block' >
            <Styled.styledInput
                style={{ marginTop: '15px' }}
                type='text'
                placeholder='Email'
                name='email'
                value={saveForm.creator.email}
                onChange={changeHandler}
                className='save-input'
            />
        </div>
        <div className='input-block' >
            {/* <label className='save-label'>Введите время прохода маршрута в минутах</label> */}
            <Styled.styledInput
                type='text'
                placeholder='Ссылка на ваше лого (если есть)'
                name='logo'
                value={saveForm.creator.logo}
                onChange={changeHandler}
                className='save-input'
            />
        </div>
        <div className='input-block' >
            {/* <label className='save-label'>Введите время прохода маршрута в минутах</label> */}
            <Styled.styledInput
                type='text'
                placeholder='Ваше имя'
                name='name'
                value={saveForm.creator.name}
                onChange={changeHandler}
                className='save-input'
            />
        </div>
        <div className='input-block' >
            {/* <label className='save-label'>Введите время прохода маршрута в минутах</label> */}
            <Styled.styledInput
                type='text'
                placeholder='Ваш телефон'
                name='phone'
                value={saveForm.creator.phone}
                onChange={changeHandler}
                className='save-input'
            />
        </div>
        <div className='input-block' >
            {/* <label className='save-label'>Введите время прохода маршрута в минутах</label> */}
            <Styled.styledInput
                type='text'
                placeholder='Ссылка на ваш сайт (вашей организации)'
                name='url'
                value={saveForm.creator.url}
                onChange={changeHandler}
                className='save-input'
            />
        </div>
    </Styled.styledDiv>

    </>
  )
}