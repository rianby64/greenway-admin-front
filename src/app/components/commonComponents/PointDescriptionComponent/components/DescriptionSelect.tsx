import React, { useEffect } from 'react'
import { DescrSelect } from '../../../../../types/Types'
import * as Styled from './styled';


export const DescriptionsSelect: React.FunctionComponent<DescrSelect> = ({ form, setForm, dotTypes }) => {

  const selectHandler = (e: any) => {
    if (e.target.value !== '') {
      setForm({ ...form, categories: e.target.value })
    }
  }

  useEffect(() => {
  })

  return (
    <Styled.styledDivWrapper>
      <Styled.SelectContainer className='cattegories'>
        <Styled.styledTitleLabel>Подходящие категории</Styled.styledTitleLabel>
        <Styled.CustomSelect id='categories' style={{ width: '100%' }} multiple={false} onChange={selectHandler}>
          <Styled.styledOption selected={form.categories ? true : false} disabled={false} value={''}>Выберите категорию </Styled.styledOption>
          {dotTypes ? dotTypes.map((el, ind) => {

            return <Styled.styledOption selected={form.categories ? form.categories === el.id : false} key={ind} value={el.id}>{el.title}</Styled.styledOption>
          }
          ) : <Styled.styledOption value='NoCategory'>Нет категорий</Styled.styledOption>}
        </Styled.CustomSelect>
      </Styled.SelectContainer>
    </Styled.styledDivWrapper>

  )
}