import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { DescriptionProps, PointForm, PointRouteObj } from '../../../types/Types';
import { addPoint } from '../../../redux/useRoutesReducer';
import { hideSettings, setCurrentFeature } from '../../../redux/useSettingsreducer';
import { useTypedSelector } from '../../../redux/useTypedSelector.hook';
import { getCategories } from '../../../axios/requests';
import { DescriptionInputs } from './components/DescriptionInputs';
import { DescriptionsSelect } from './components/DescriptionSelect';

export const DescriptionComponent: React.FunctionComponent<DescriptionProps> = ({ currentFeature}: DescriptionProps) => {
  const { points } = useTypedSelector(store => store.route);
  const dispatch = useDispatch();
  const isSettingsShawn = useTypedSelector(store => store.settings.isSettingsShawn);
  const [isShawn, setIsShawn] = useState(isSettingsShawn);
  const [form, setForm] = useState<PointForm>({
    id: '',
    name: '',
    description: '',
    categories: ''
  });
  const [dotTypes, setDotTypes] = useState<Array<any>>([]);

  const editedPointArray = (newPoint: PointRouteObj) => {
    const filteredArrayOfPoints = points.filter((el) => {
      if (el.position.lat === newPoint.position.lat && el.position.lng === newPoint.position.lng) return false
      else return true
    });
    filteredArrayOfPoints.push(newPoint);
    return filteredArrayOfPoints;
  }

  const submitHandler = () => {
    if (form.categories != '') {
      const pointToAdd: PointRouteObj = {
        id: form.id,
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
      dispatch(addPoint(editedPointArray(pointToAdd)))
      setForm({
        id: '',
        name: '',
        description: '',
        categories: ''
      })
    } else {
      alert('Выберите категорию точки')
    }
  }

  const fetchDottype = async () => {
    const fetched = await getCategories();
    setDotTypes(fetched)
  }

  useEffect(() => {
    setIsShawn(isSettingsShawn);
    fetchDottype();
    let isPointFind: boolean = false;
    points.map((el) => {
      if (currentFeature.lat === el.position.lat) {
        isPointFind = true;
        setForm({
          id: el.id,
          name: el.title.toString(),
          description: el.description.toString(),
          categories: el.type,
        })
      }
    })
    if (!isPointFind) {
      setForm({
        id: '',
        name: '',
        description: '',
        categories: '',
      })
    }        
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
          <DescriptionInputs form={form} setForm={setForm} />
          <DescriptionsSelect form={form} setForm={setForm} dotTypes={dotTypes} />
          <button className='btn red' type='button' value='сохранить' onClick={submitHandler}>Сохранить</button>
        </form>
      </div >
    </div>
  )
}