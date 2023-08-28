import React from 'react';
import { SaveDurations } from '../../../../../../types/Types';
import * as Styled from "./styledDurations.js";
export const SaveRouteDurations: React.FunctionComponent<SaveDurations> = ({ array, setSaveForm, saveForm }) => {

  const durationsHandler = (el, ev) => {
    el.duration = ev.target.value;
    setSaveForm({
      ...saveForm,
      durations: array
    })
  }

  return (
      <Styled.styledDiv style={{display:'flex', flexDirection:'column', marginBottom:'30px'}}>
      {array.filter((el) => el.checked).map((el) => {
        if (el.checked) {
          return (
                <div style={{marginBottom:'15px', display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
                  <Styled.styledSpan>Введите ориентировочное время прохождения маршрута на способе: {el.title}</Styled.styledSpan>
                  <div>
                    <Styled.styledInputDuration type='number'
                                                key={el.id}
                                                placeholder={'100'}
                                                id={el.title} onChange={(ev) => durationsHandler(el, ev)}
                                                value={el.duration} />
                    <Styled.styledSpan>минут</Styled.styledSpan>
                  </div>
                </div>


          )
        } else return null
      })}
      </Styled.styledDiv>
  )
}