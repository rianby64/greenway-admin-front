import React, {useState} from 'react';
import { SaveSelector } from '../../../../types/Types';
import * as Styled from './styled.js';
import PopUp from "./PopUp";
import {PopUpText} from "../../../../constants/Text1";
export const SaveRouteCreator: React.FunctionComponent<SaveSelector> = ({ saveForm, setSaveForm }) => {
const [modalActive, setModalActive] = useState();

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
            <Styled.styledDivForInputs>
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
                <Styled.styledDivText>
                    <Styled.styledDivTextP>Согласно <span style={{color:"#0E7505"}}>ПУБЛИЧНОМУ ДОГОВОРУ</span> о предоставлении доступа к информационным и технологическим ресурсам Интернет-сервиса BY Guide, эти данные будут опубликованы в приложении BY Guide и доступны для просмотра любому пользователю приложения.</Styled.styledDivTextP>
                </Styled.styledDivText>
            </Styled.styledDivForInputs>


            <Styled.styledDivForInputs>
                <Styled.styledDivInputs>
                    <Styled.styledPInput style={{display:'flex', justifyContent:'space-between'}}>Ссылка на логотип Вашей компании (если есть)
                        <PopUp content={PopUpText.popUp1} active={modalActive} setActive={setModalActive}/>

                    </Styled.styledPInput>

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
            </Styled.styledDivForInputs>

    </Styled.styledDiv>

    </>
  )
}