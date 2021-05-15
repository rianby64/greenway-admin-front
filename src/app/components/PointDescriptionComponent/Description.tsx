import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { PointRouteObj } from '../../../redux/reduxType';
import { addPoint } from '../../../redux/useRoutesReducer';
import { hideSettings, setCurrentFeature } from '../../../redux/useSettingsreducer';
import { useTypedSelector } from '../../../redux/useTypedSelector.hook';

interface PointForm {
  name: string;
  descr: string,
  cattegories: Array<String>;
}

interface  CurrFeat {
  lat: number;
  lng: number
}

type DescrProps = {
  currentFeature : CurrFeat
}

export const DescriptionComponent: React.FunctionComponent<DescrProps> = ({currentFeature}: DescrProps) => {
  const { points } = useTypedSelector(store => store.route);
  const dispatch = useDispatch();
  const isSettingsShawn = useTypedSelector(store => store.settings.isSettingsShawn);
  const [isShawn, setIsShawn] = useState(isSettingsShawn);
  const [form, setForm] = useState<PointForm>({
    name: '',
    descr: '',
    cattegories: []
  });

  const changeHandler = (e) => {
    let { name, value, type, selectedOptions } = e.target;
    if (type === 'select-multiple') {
      value = [...selectedOptions].map(o => o.value)
      console.log(value)
    }
    setForm({ ...form, [name]: value })
    console.log(form)
  }

  const submitHandler = () => {
    const pointToAdd: PointRouteObj = {
      lat: currentFeature.lat,
      lng: currentFeature.lng,
      name: form.name,
      descr: form.descr,
      cattegories: form.cattegories
    }
    dispatch(hideSettings());
    dispatch(setCurrentFeature({}));
    dispatch(addPoint(points.concat(pointToAdd)))
    setForm({
      name: '',
      descr: '',
      cattegories: []
    })
  }

  useEffect(() => {
    setIsShawn(isSettingsShawn);
  }, [isSettingsShawn])

  return (
    <div style={isShawn ? { zIndex: 2000, width: '40%', height: '100vh', background: 'gray' } : { display: 'none' }}>
      <form className='form' style={{
        display: 'flex',
        flexFlow: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
      }}
      >
        <label>Название места</label>
        <input
          onChange={changeHandler}
          type='text'
          name='name'
          placeholder='Введите название места'
          value={form.name} />
        <label>Описание</label>
        <input
          onChange={changeHandler}
          type='text'
          name='descr'
          placeholder='Введите описание места '
          value={form.descr}
        />
        <div className='cattegories'>
          <label>Подходящие категории</label>
          <div className='checkboxes'>
            {/*Check boxes will be rendered with map functions*/}
            <select multiple={true} onChange={changeHandler} name='cattegories'>
              <option value='cat1'>Cat1</option>
              <option value='cat2'>Cat2</option>
              <option value='cat3'>Cat3</option>
              <option value='cat4'>Cat4</option>
            </select>
          </div>
        </div>
        <button type='button' value='сохранить' onClick={submitHandler}>Сохранить</button>
      </form>
    </div >
  )
}