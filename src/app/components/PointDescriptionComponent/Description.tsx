import React, { useEffect, useState } from 'react';
import { useTypedSelector } from '../../../redux/useTypedSelector.hook';

interface PointForm {
  name: String;
  descr: String,
  cattegories: Array<String>;
}

export const DescriptionComponent: React.FC = () => {
  const isSettingsShawn = useTypedSelector(store => store.settings.isSettingsShawn);
  const [isShawn, setIsShawn] = useState(isSettingsShawn);
  const [form, setForm] = useState<PointForm>({
    name: '',
    descr: '',
    cattegories: []
  });

  const checkBoxHandler = (e) => {
    const catArray = form.cattegories
    if (!catArray.includes(e.target.value)) {
      catArray.push(e.target.value);
    } else {
      const elemIndex = catArray.findIndex((el, ind) => {
        if (el === e.target.value) return ind
        else return false
      });
      catArray.splice(elemIndex, 1);
    }
    setForm({ ...form, cattegories: catArray })
  }

  const changeHandler = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const submitHandler = () => {
    console.log(form);
  }

  useEffect(() => {
    setIsShawn(isSettingsShawn);
  }, [isSettingsShawn])

  return (
    <div style={isShawn ? { zIndex: 2000, width: '40%', height: '100vh', background: 'gray' } : { display: 'none' }}>
      <form style={{
        display: 'flex',
        flexFlow: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
      }}>
        <label>Название места</label>
        <input
          onChange={changeHandler}
          type='text'
          name='name'
          placeholder='Введите название места' />
        <label>Описание</label>
        <input
          onChange={changeHandler}
          type='text'
          name='descr'
          placeholder='Введите описание места ' />
        <div className='cattegories'>
          <label>Подходящие категории</label>
          <div className='checkboxes'>
            <div className='checkbox-pair'>
              <input onChange={checkBoxHandler} type='checkbox' name='cattegory' value='a1' />
              <label className='checkbox-name'>Cattegory 1</label>
            </div>
            <div className='checkbox-pair'>
              <input onChange={checkBoxHandler} type='checkbox' name='cattegory' value='a2' />
              <label className='checkbox-name'>Cattegory 1</label>
            </div>
            <div className='checkbox-pair'>
              <input onChange={checkBoxHandler} type='checkbox' name='cattegory' value='a3' />
              <label className='checkbox-name'>Cattegory 1</label>
            </div>
          </div>
        </div>
        <button type='button' value='сохранить' onClick={submitHandler}>Сохранить</button>
      </form>
    </div >
  )
}