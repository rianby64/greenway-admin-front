import React from 'react';
// import { Switch } from 'react-materialize';
import * as Styled from "./styled";
import { SaveSwitches } from '../../../../types/Types';
import SwitchComp from "./SwitchComp";
export const SaveRouteSwitches: React.FunctionComponent<SaveSwitches> = ({ saveForm, setSaveForm }) => {
  const switchHandler = (id: 'children' | "wheelChair" | 'visuallyImpaired' | 'approved' | 'animals' ) => {
    switch (id) {
      case 'children':
        setSaveForm({
          ...saveForm,
          children: !saveForm.children

        });
        break;
      case 'wheelChair':
        setSaveForm({
          ...saveForm,
          wheelChair: !saveForm.wheelChair
        });
        break;
      case 'visuallyImpaired':
        setSaveForm({
          ...saveForm,
          visuallyImpaired: !saveForm.visuallyImpaired
        });
        break;
      case 'approved':
        setSaveForm({
          ...saveForm,
          approved: !saveForm.approved
        })
        break;
      case 'animals':
        setSaveForm({
          ...saveForm,
          animals: !saveForm.animals
        })
        break;
      default:
        break;
    }
    console.log(saveForm);
  }

  return (
      <Styled.styledDiv style={{flexWrap:'wrap', marginBottom:'50px'}}>

          <div className='switches_pair' style={{ display: 'flex', flexFlow: 'column', justifyContent: 'center', alignItems: 'center', gap:'20px'}}>
            <SwitchComp id={'animals'} checked={saveForm.animals} onChange={switchHandler} onLabel={'С животными'} offLabel={'Без животных'}/>
            <SwitchComp id={'children'} checked={saveForm.children} onChange={switchHandler} onLabel={'С детьми'} offLabel={'Без детей'}/>
          </div>
          <div className='switches_pair' style={{ display: 'flex', flexFlow: 'column', justifyContent: 'center', alignItems: 'center', gap:'20px' }}>
            <SwitchComp id={'wheelChair'} checked={saveForm.wheelChair} onChange={switchHandler} onLabel={'Подходит людям на коляске'} offLabel={'Не подходит людям на коляске'}/>
            <SwitchComp id={'visuallyImpaired'} checked={saveForm.visuallyImpaired} onChange={switchHandler} onLabel={'Доступно с нарушенем зрения'} offLabel={'Не доступно с нарушенем зрения'}/>
          </div>
          <div className='switches_pair' style={{ display: 'flex', flexFlow: 'column', justifyContent: 'center', alignItems: 'center', gap:'20px', marginTop:'20px' }}>
            <SwitchComp id={'approved'} checked={saveForm.approved} onChange={switchHandler} onLabel={'Проверен'} offLabel={'Не проверен'}/>
          </div>

      </Styled.styledDiv>

  )
}