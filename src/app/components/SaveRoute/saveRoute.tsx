import React, { useEffect, useState } from 'react';
import { SaveForm, SaveRouteType } from '../../../redux/reduxType';
import { Select, Switch } from 'react-materialize'
import { useTypedSelector } from './../../../redux/useTypedSelector.hook';
import { getRouteTypes, postRoute, putDotsIntoRoute } from '../../../axios/requests';
import { putLinesIntoRoute, getRouteDifficulty } from './../../../axios/requests';

export const SaveRoute: React.FunctionComponent<SaveRouteType> = ({ isShawn, setIsShawn }: SaveRouteType) => {
  const [routeTypes, setRouteTypes] = useState<Array<any>>([]);
  const [routeDif, setRouteDif] = useState<Array<any>>([]);
  const { distance, polilines, points } = useTypedSelector(store => store.route)
  const [saveForm, setSaveForm] = useState<SaveForm>({
    title: '',
    description: '',
    difficulty: '',
    minutes: 0,
    animals: false,
    children: false,
    disabilities: false,
    approved: false,
    duration: {},
    cattegories: [],
    type: []
  })
  const selectHandler = (e) => {
    if (e.target.id === 'type') {
      const catArr: Array<string> = [];
      for (let item of e.target.selectedOptions) {
        catArr.push(item.value)
      }
      setSaveForm({
        ...saveForm,
        type: catArr
      })
    } else if (e.target.id === 'dif') {
      setSaveForm({
        ...saveForm,
        difficulty: e.target.value
      })
    }
    console.log(saveForm);
    
  }

  const childrenHandler = () => {
    setSaveForm({
      ...saveForm,
      children: !saveForm.children
    })
  }

  const disabilitiesHandler = () => {
    setSaveForm({
      ...saveForm,
      disabilities: !saveForm.disabilities
    })
  }

  const approvedHandler = () => {
    setSaveForm({
      ...saveForm,
      approved: !saveForm.approved
    })
  }

  const animalHandler = () => {
    setSaveForm({
      ...saveForm,
      animals: !saveForm.animals
    })
  }

  const changeHandler = (e: any) => {
    let { name, value } = e.target;
    setSaveForm({ ...saveForm, [name]: value });
  }

  const submitRoute = () => {
    console.log(saveForm);

    postRoute(saveForm.approved, saveForm.animals, saveForm.children, saveForm.disabilities, saveForm.minutes, saveForm.title, saveForm.description, saveForm.type, saveForm.difficulty, distance)
      .then((response) => {
        putLinesIntoRoute(polilines, response)
        putDotsIntoRoute(points, response)
      })
  }

  const fetchRoutetype = async () => {
    const fetchedTypes = await getRouteTypes();
    const fetchedDifficulties = await getRouteDifficulty();
    setRouteTypes(fetchedTypes)
    setRouteDif(fetchedDifficulties)
  }

  useEffect(() => {
    fetchRoutetype();
  }, [])

  return (
    <div
      className='save-shadow'
      style={isShawn ?
        {
          zIndex: 2000,
          width: '100%',
          background: 'rgb(14 14 14 / 65%',
        } : {
          display: 'none'
        }
      }
      onClick={() => setIsShawn(!isShawn)}
    >
      <div onClick={(e) => e.stopPropagation()} className='save-workspace'>
        <form className='save-route-form'>
          <div style={{ display: 'flex' }}>
            <div className='input-block' >
              <label className='save-label'>Введите назввание маршрута</label>
              <input
                placeholder='Название маршрута'
                name='title'
                value={saveForm.title}
                onChange={changeHandler}
                className='save-input'
              >
              </input>
            </div>
            <div className='input-block'>
              <label className='save-label'>Введите описание маршрута</label>
              <textarea
                placeholder='Описание маршрута'
                name='description'
                value={saveForm.description}
                onChange={changeHandler}
                className='save-input'
              >
              </textarea>
            </div>
          </div>
          <div style={{ display: 'flex' }}>
            <div className='input-block' >
              <label className='save-label'>Введите время прохода маршрута</label>
              <input
                type='number'
                placeholder='Время'
                name='minutes'
                value={saveForm.minutes}
                onChange={changeHandler}
                className='save-input'
              >
              </input>
            </div>
            <p className='distance'>Длинна маршрута: {distance} м.</p>
          </div>
          <Switch id='animals' onChange={animalHandler} onLabel='С животными' offLabel='Без животных' />
          <Switch id='children' onChange={childrenHandler} onLabel='С детьми' offLabel='Без детей' />
          <Switch id='disabilities' onChange={disabilitiesHandler} onLabel='Подходит инвалидам' offLabel='Не подходит инвалидам' />
          <Switch id='approved' onChange={approvedHandler} onLabel='Проверен' offLabel='Не проверен' />
          <Select id='type' noLayout={true} multiple={true} onChange={selectHandler}>
            {routeTypes ? routeTypes.map((el, ind) => {
              return <option key={ind} value={el.id}>{el.title}</option>
            }) : <option value='NoCategory'>Нет категорий</option>}
          </Select>
          <Select id='dif' noLayout={true} multiple={false} onChange={selectHandler}>
            {routeDif ? routeDif.map((el, ind) => {
              return <option key={ind} value={el.id}>{el.title}</option>
            }) : <option value='NoCategory'>Нет Сложностей</option>}
          </Select>
          <button type='button' className='btn pink' onClick={submitRoute}>Отправить на сервер</button>
        </form>
      </div>
    </div>
  )
}