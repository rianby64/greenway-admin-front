import React from 'react'
import { DescrInput } from '../../../../types/Types';

export const DescriptionInputs: React.FunctionComponent<DescrInput> = ({form, setForm}) => {
  const textArea = {
    width: '90%',
    paddingTop: '25px',
    height: '100px'
  }

  const changeHandler = (e: any) => {
    let { name, value } = e.target;
    setForm({ ...form, [name]: value })
  }

  return (
    <>
      <label style={{ fontSize: '25px', fontWeight: 'bold', color: 'black' }}>Название места</label>
      <textarea
        style={textArea}
        onChange={changeHandler}
        name='name'
        placeholder='Введите название места'
        value={form.name} />
      <label style={{ fontSize: '25px', fontWeight: 'bold', color: 'black' }}>Описание</label>
      <textarea
        style={textArea}
        onChange={changeHandler}
        name='description'
        placeholder='Введите описание места '
        value={form.description}
      />
    </>
  )
}