import React, { useEffect, useState } from "react"
import { Checkboxes } from "../../../../../../types/Types"
import * as Styled from './styledArea.js';
import CheckboxStyled from "../../../checkbox/CheckboxStyled";
export const AreasCheckboxes: React.FunctionComponent<Checkboxes> = ({ array, label }) => {

  const [districts, setDistricts] = useState<any[]>([]);

  const checkBoxHandler = (elem: any, array: any[]) => {
    elem.checked = !elem.checked;
    array.forEach((el) => {
      if (el.id !== elem.id) {
        el.checked = false;
      }
    })
    if (array.filter(el => el.checked).length) {
      setDistricts([]);
      // TO DO fix visual artifacts
      setTimeout(() => { setDistricts(elem.district) }, 0);
    } else {
      setDistricts([]);
    }
  }

  const districtHandler = (el) => {
    console.log(districts);
    setDistricts(districts.map((dis => {
      if (dis.id === el.id) {
        dis.checked = !el.checked;
      }
      return dis;
    })))
    // el.checked = !el.checked
  }

  useEffect(() => {
    if (array) {
      console.log(array);
      if (array.filter(el => el.checked).length) {
        setDistricts(array.map(el => {
          const checkedElem = array.find(el => el.checked);
          if (checkedElem.id !== el.id) {
            el.checked = false;
          }
          return el
        }).filter(el => el.checked)[0].district);
      } else {
        setDistricts([])
      }
    }
  }, [array])

  useEffect(() => {
    // console.log(districts, "districts");

  }, [districts])


  return (
    <>
      <Styled.styledDiv style={{ flexDirection: 'column' }}>
        <Styled.styledUnderTitleLabel className='save-label'>{label} <span style={{ color: '#0E7505' }}>*</span></Styled.styledUnderTitleLabel>

        <div style={{ display: 'flex', gap: '30px', marginBottom: '30px' }}>
          {array ? array.map((el, ind, array) => {
            return (
              <CheckboxStyled key={ind} isChecked={el.checked} label={el.title} onChange={() => checkBoxHandler(el, array)} />
            )
          }) : <CheckboxStyled filledIn id={`district_Nodata`} label={`Нет данных`} disabled={true} value={''} />}
        </div>
        {districts.length ?
          <div style={{ marginBottom: '30px' }}>
            <Styled.styledUnderTitleLabel className='save-label'>{label}</Styled.styledUnderTitleLabel>
            <div style={{ display: 'flex', gap: '30px', flexWrap: 'wrap' }}>
              {districts ? districts.map((el, ind) => {                
                return (
                  <CheckboxStyled key={ind} isChecked={el.checked} label={el.title} onChange={() => districtHandler(el)} />
                )
              }) : <CheckboxStyled filledIn id={`district_Nodata`} label={`Нет данных`} disabled={true} value={''} />}
            </div>
          </div> : null}
      </Styled.styledDiv>
    </>
  )
}