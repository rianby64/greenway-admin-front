import React from 'react'
import { DescrInput } from '../../../../types/Types';
import * as Styled from './styled';
export const DescriptionInputs: React.FunctionComponent<DescrInput> = ({form, setForm}) => {
  const textArea = {
    width: '90%',
    padding: '10px 24px',
    minHeight: '100px',
      boxSizing:'border-box'
  }

  const changeHandler = (e: any) => {
    let { name, value } = e.target;
    setForm({ ...form, [name]: value })
  }

  return (
    <>
        <Styled.styledDivWrapper>
            <Styled.styledTitleLabel>Название места</Styled.styledTitleLabel>
            <Styled.styledTextArea
                style={textArea}
                onChange={changeHandler}
                name='name'
                placeholder='Введите название места'
                value={form.name} />
            <Styled.styledTitleLabel style={{marginTop:'30px'}}>Описание</Styled.styledTitleLabel>
            <Styled.styledTextArea
                style={textArea}
                onChange={changeHandler}
                name='description'
                placeholder='Введите описание места '
                value={form.description}
            />
        </Styled.styledDivWrapper>

    </>
  )
}