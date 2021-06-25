import React from 'react';
import { Select } from 'react-materialize';
import { SaveSelectors } from '../../../../types/Types';

export const SaveRouteSelectors: React.FunctionComponent<SaveSelectors> = ({ saveForm, setSaveForm, routeCat, routeDif, routeTypes }) => {

  const selectHandler = (e) => {
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
            if (el.name === item.value) number = el.number
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

  return (
    <>
      <label className='save-label'>Способы перемещения</label>
      <Select id='type' noLayout={true} multiple={true} onChange={selectHandler}>
        {routeTypes ? routeTypes.map((el, ind) => {
          return <option key={ind} value={el.id}>{el.title}</option>
        }) : <option value='NoCategory'>Нет категорий</option>}
      </Select>
      <Select id='dif' noLayout={true} multiple={false} onChange={selectHandler}>
        <option selected={true} disabled={true}>Выберите сложность</option>
        {routeDif ? routeDif.map((el, ind) => {
          return <option selected={el.id === saveForm.difficulty ? true : false} key={ind} value={el.id}>{el.title}</option>
        }) : <option value='NoCategory'>Нет Сложностей</option>}
      </Select>
      <label className='save-label'>Категории маршрута</label>
      <Select id='category' noLayout={true} multiple={true} onChange={selectHandler}>
        {routeCat ? routeCat.map((el, ind) => {
          return <option key={ind} value={el.id}>{el.title}</option>
        }) : <option value='NoCategory'>Нет категории</option>}
      </Select>
    </>
  )
}