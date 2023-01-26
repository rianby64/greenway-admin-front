import React, {useState} from 'react';
// import { Switch } from 'react-materialize';
import * as Styled from "./styled";
import { SaveSwitches } from '../../../../types/Types';
import SwitchComp from "./SwitchComp";
import PopUp from "./PopUp";
import {PopUpText} from "../../../../constants/Text1";
export const SaveRouteSwitches: React.FunctionComponent<SaveSwitches> = ({ saveForm, setSaveForm }) => {
  const [modalActive, setModalActive] = useState();
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

      <div>
        <Styled.styledUnderTitleLabel style={{marginBottom: '20px', marginLeft: '130px', display: 'flex', gap: '10px'}}>Отметьте,
          для кого подходит маршрут
          <PopUp content={PopUpText.popUp4} active={modalActive} setActive={setModalActive}
          /></Styled.styledUnderTitleLabel>
        <Styled.styledDiv style={{flexWrap: 'wrap', marginBottom: '50px', alignItems:'end'}}>

          <SwitchComp id={'animals'} label={'Питомцы'} checked={saveForm.animals} onChange={switchHandler}
                      onLabel={'Да'} offLabel={'Нет'}/>
          <SwitchComp id={'children'} label={'Дети'} checked={saveForm.children} onChange={switchHandler}
                      onLabel={'Да'} offLabel={'Нет'}/>
          <SwitchComp id={'wheelChair'} label={'Люди с нарушениями зрения'} checked={saveForm.wheelChair}
                      onChange={switchHandler} onLabel={'Да'} offLabel={'Нет'}/>
          <SwitchComp id={'visuallyImpaired'} label={'Люди, передвигающиеся на инвалидной коляске'}
                      checked={saveForm.visuallyImpaired} onChange={switchHandler}
                      onLabel={'Да'} offLabel={'Нет'}/>
          <SwitchComp id={'approved'} label={'Маршрут проверен'} checked={saveForm.approved} onChange={switchHandler}
                      onLabel={'Да'} offLabel={'Нет'}/>


        </Styled.styledDiv>
      </div>


  )
}