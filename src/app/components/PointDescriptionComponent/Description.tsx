import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { DescriptionProps, PointForm, PointRouteObj } from '../../../redux/reduxType';
import { addPoint } from '../../../redux/useRoutesReducer';
import { hideSettings, setCurrentFeature } from '../../../redux/useSettingsreducer';
import { useTypedSelector } from '../../../redux/useTypedSelector.hook';
import { Select } from 'react-materialize';
import { getCategories } from '../../../axios/requests';

export const DescriptionComponent: React.FunctionComponent<DescriptionProps> = ({ currentFeature }: DescriptionProps) => {
  const { points } = useTypedSelector(store => store.route);
  const dispatch = useDispatch();
  const isSettingsShawn = useTypedSelector(store => store.settings.isSettingsShawn);
  const [isShawn, setIsShawn] = useState(isSettingsShawn);
  const [form, setForm] = useState<PointForm>({
    name: '',
    description: '',
    categories: ''
  });
  const [dotTypes, setDotTypes] = useState<Array<any>>([]);

  const selectHandler = (e: any) => {
    // const catArr: Array<string> = [];
    // for (let item of e.target.selectedOptions) {
    //   catArr.push(item.value)
    // }
    setForm({ ...form, categories: e.target.value })
  }

  const changeHandler = (e: any) => {
    let { name, value } = e.target;
    setForm({ ...form, [name]: value })
  }

  const submitHandler = () => {
    const pointToAdd: PointRouteObj = {
      position: {
        lat: currentFeature.lat,
        lng: currentFeature.lng
      },
      title: form.name,
      description: form.description,
      type: form.categories
    }
    dispatch(hideSettings());
    dispatch(setCurrentFeature({}));
    dispatch(addPoint(points.concat(pointToAdd)))
    setForm({
      name: '',
      description: '',
      // categories: [],
      categories: ''
    })
  }

  const fetchDottype = async () => {
    const fetched = await getCategories();
    setDotTypes(fetched)
  }

  useEffect(() => {
    setIsShawn(isSettingsShawn);
    fetchDottype();
  }, [isSettingsShawn])

  const formHandlerStyles = {
    display: 'flex',
    alignItems: 'center',
    flexFlow: 'column',
    zIndex: 2001,
    width: '40%',
    minWidth: '190px',
    height: '100vh',
    background: '#9c9a9a'
  }

  const formStyles = {
    paddingTop: '25px',
    width: '100%',
    display: 'flex',
    flexFlow: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: '550px',
  }

  const textArea = {
    width: '90%',
    paddingTop: '25px',
    height: '100px'
  }

  return (
    <div
      onClick={() => dispatch(hideSettings())}
      style={isShawn ? {
        width: '100%',
        zIndex: 2000,
        background: 'rgb(14 14 14 / 65%'
      } : { display: 'none' }}
      className='shadow'>
      <div onClick={(e) => e.stopPropagation()} style={isShawn ? formHandlerStyles : { display: 'none' }}>
        <form className='form' style={formStyles}>
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
          <div className='cattegories'>
            <label style={{ fontSize: '25px', fontWeight: 'bold', color: 'black' }}>Подходящие категории</label>
            <div className='checkboxes' style={{ height: '100px', display: 'flex', alignItems: 'center' }}>
              <Select id='categories' value='category' noLayout={true} style={{ width: '100%' }} multiple={false} onChange={selectHandler}>
                {dotTypes ? dotTypes.map((el, ind) => {
                  return <option key={ind} value={el.id}>{el.title}</option>
                }) : <option value='NoCategory'>Нет категорий</option>}
              </Select>
            </div>
          </div>
          <button className='btn red' type='button' value='сохранить' onClick={submitHandler}>Сохранить</button>
        </form>
      </div >
    </div>
  )
}