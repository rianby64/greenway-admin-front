import React, { useCallback, useEffect, useState } from 'react';
import { SaveForm, SaveRouteType } from '../../../redux/reduxType';
import { Select, Switch } from 'react-materialize'
import { useTypedSelector } from './../../../redux/useTypedSelector.hook';
import { getRouteCategories, getRouteTypes, postRoute, putDotsIntoRoute } from '../../../axios/requests';
import { putLinesIntoRoute, getRouteDifficulty } from './../../../axios/requests';

export const SaveRoute: React.FunctionComponent<SaveRouteType> = ({ isShawn, setIsShawn }: SaveRouteType) => {
  const [routeTypes, setRouteTypes] = useState<Array<any>>([]);
  const [routeDif, setRouteDif] = useState<Array<any>>([]);
  const [routeCat, setRouteCat] = useState<Array<any>>([]);
  const { distance, polilines, points } = useTypedSelector(store => store.route);
  const [saveForm, setSaveForm] = useState<SaveForm>({
    title: '',
    description: '',
    difficulty: '',
    minutes: 0,
    animals: false,
    children: false,
    disabilities: false,
    approved: false,
    durations: [],
    categories: [],
    type: []
  });
  const selectHandler = (e) => {
    console.log(saveForm);

    switch (e.target.id) {
      case 'type':
        const typeArr: Array<{
          title: string,
          rus: string
        }> = [];
        const durationArr: Array<{
          name: string,
          number: number
        }> = [];
        for (let item of e.target.selectedOptions) {
          typeArr.push({
            title: item.value,
            rus: item.innerText
          })
          let number: number = 0;
          saveForm.durations.forEach((el: any) => {
            if (el.name === item. value) number = el.number
          })
          durationArr.push({
            name: item.value,
            number: number
          })
        }
        setSaveForm({
          ...saveForm,
          durations: durationArr,
          type: typeArr
        });
        break;
      case 'dif':
        setSaveForm({
          ...saveForm,
          difficulty: e.target.value
        })
        break;

      case 'category':
        const catArr: Array<string> = [];
        for (let item of e.target.selectedOptions) {
          catArr.push(item.value)

        }
        setSaveForm({
          ...saveForm,
          categories: catArr
        })
        break;
      default:
        alert('Form error');
    }
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

    postRoute(saveForm.approved, saveForm.animals, saveForm.children, saveForm.disabilities, saveForm.minutes, saveForm.title, saveForm.description, saveForm.type, saveForm.categories, saveForm.difficulty, saveForm.durations, distance)
      .then((response) => {
        putLinesIntoRoute(polilines, response)
        putDotsIntoRoute(points, response)
      })
  }

  const fetchRoutetype = useCallback(async () => {
    const fetchedTypes = await getRouteTypes();
    const fetchedDifficulties = await getRouteDifficulty();
    const fetchedCat = await getRouteCategories();
    setRouteCat(fetchedCat);
    setRouteTypes(fetchedTypes);
    setRouteDif(fetchedDifficulties);
    console.log(saveForm);

  }, [])

  const durationsHandler = (e) => {
    const newDurations = saveForm.durations;
    newDurations.map((el: any ) => {
      if (el.name === e.target.id) {
        el.number = e.target.value
      }
    })
    setSaveForm({
      ...saveForm,
      durations: newDurations
    })
    console.log(saveForm);
    
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
          <Select id='category' noLayout={true} multiple={true} onChange={selectHandler}>
            {routeCat ? routeCat.map((el, ind) => {
              return <option key={ind} value={el.id}>{el.title}</option>
            }) : <option value='NoCategory'>Нет Категории</option>}
          </Select>
          <div className='durations'>
            {saveForm.type.map((el,ind) => {
              return (
                <input type='number' key={ind} placeholder={el.rus} id={el.title} onChange={durationsHandler} />
              )
            })}
          </div>
          <button type='button' className='btn pink' onClick={submitRoute}>Отправить на сервер</button>
        </form>
      </div>
    </div>
  )
}