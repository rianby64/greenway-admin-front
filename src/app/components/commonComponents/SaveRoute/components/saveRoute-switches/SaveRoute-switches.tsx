import React from 'react';
// import { Switch } from 'react-materialize';
import * as Styled from "./styledSwitches.js";
import { SaveSwitches } from '../../../../../../types/Types';
import SwitchComp from "../../../switchComp/SwitchComp";
import { PopUpText } from "../../../../../../constants/Text1";
import NewPopUp from "../../../popUp/NewPopUp";
export const SaveRouteSwitches: React.FunctionComponent<SaveSwitches> = ({ saveForm, setSaveForm }) => {
  const switchHandler = (id: 'children' | "wheelChair" | 'visuallyImpaired' | 'approved' | 'animals') => {
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

    <Styled.styledContentWrapper>
      <Styled.styledUnderTitleLabel style={{ marginBottom: '0', display: 'flex', gap: '10px' }}>Отметьте,
        для кого подходит маршрут
        <NewPopUp
          content={PopUpText.popUp4}
          width={'230px'}
          height={'135px'}
          top={'5px'}
          bottom={'0px'}
          right={'0px'}
          left={'20px'}
        /></Styled.styledUnderTitleLabel>
      <Styled.styledDiv style={{ flexWrap: 'wrap', marginBottom: '50px', alignItems: 'end' }}>

        <SwitchComp id={'animals'} label={'Питомцы'} checked={saveForm.animals} onChange={switchHandler}
          onLabel={'Да'} offLabel={'Нет'} />
        <SwitchComp id={'children'} label={'Дети'} checked={saveForm.children} onChange={switchHandler}
          onLabel={'Да'} offLabel={'Нет'} />
        <SwitchComp id={'wheelChair'} label={'Люди с нарушениями зрения'} checked={saveForm.wheelChair}
          onChange={switchHandler} onLabel={'Да'} offLabel={'Нет'} />
        <SwitchComp id={'visuallyImpaired'} label={'Люди, передвигающиеся на инвалидной коляске'}
          checked={saveForm.visuallyImpaired} onChange={switchHandler}
          onLabel={'Да'} offLabel={'Нет'} />
        <SwitchComp id={'approved'} label={'Маршрут проверен'} checked={saveForm.approved} onChange={switchHandler}
          onLabel={'Да'} offLabel={'Нет'} />


      </Styled.styledDiv>
    </Styled.styledContentWrapper>


  )
}