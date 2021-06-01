import React from 'react'
import { Select } from 'react-materialize'
import { DescrSelect } from '../../../../types/Types'

export const DescriptionsSelect: React.FunctionComponent<DescrSelect> = ({ form, setForm, dotTypes }) => {

  const selectHandler = (e: any) => {
    // const catArr: Array<string> = [];
    // for (let item of e.target.selectedOptions) {
    //   catArr.push(item.value)
    // }
    if (e.target.value != '') {
      setForm({ ...form, categories: e.target.value })
    }    
  }



  return (
    <div className='cattegories'>
      <label style={{ fontSize: '25px', fontWeight: 'bold', color: 'black' }}>Подходящие категории</label>
        <Select id='categories' value='category' noLayout={true} style={{ width: '100%' }} multiple={false} onChange={selectHandler}>
          <option selected={true} disabled={true}>Выберите категорию </option>
          {dotTypes ? dotTypes.map((el, ind) => {
            return <option selected={false} key={ind} value={el.id}>{el.title}</option>
          }
          ) : <option value='NoCategory'>Нет категорий</option>}
        </Select>
      </div>
  )
}