import styled from 'styled-components';
import React, {useState} from 'react';
import {SaveSelectors} from "../../../../types/Types";
//import {SaveSelectors} from "../../../../types/Types";


const Container = styled.div`
  z-index: 1000;
  position: relative;

  :hover {
    Span {
      display: none;
    }
`;

const Button = styled.button`
  background: #0E7505;
  padding: 10px;
  border: 1px solid #ccc;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: #F9F9F9;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 270px;
  height: 48px;

  :hover {
    cursor: pointer;
  }
`;

const Span = styled.span`
  color: #F9F9F9;
`;

const DropdownList = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: #fff;
  border: 1px solid #ccc;
  box-shadow: 2px 2px 20px rgba(97, 180, 45, 0.2);
  border-radius: 2px;
  padding: 0;
  margin: 0;
  list-style: none;
  display: ${props => (props.show ? 'flex' : 'none')};
  transition: all .2s;
  max-height: 270px;
  overflow: auto;
  flex-direction: column;
`;

const DropdownItem = styled.li`
  padding: 10px;
  text-decoration: none;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: rgba(0, 0, 0, 0.5);
  &.active{
    background-color: #D3DFB9;
  }
  :hover {
    background: #D3DFB9;
    color: #000000;
    cursor: pointer;
  }
`;

const DropDawnSelect: React.FunctionComponent<SaveSelectors> = ({saveForm, setSaveForm, routeDif}) => {

    const [show, setShow] = useState(false);

    const changeText = () => {
        switch (saveForm.difficulty){
            case ' proffessional': return "Для проффесионалов";
            case 'easy': return "Лёгкий";
            case 'hard': return "Сложный";
            case 'medium': return "Средний";
            default : return "Выберите сложность"
        }
    }

     const selectHandler = (e) => {
         console.log(e.target.id)
         setSaveForm({
                            ...saveForm,
                            difficulty: e.target.id
                     })
         console.log(saveForm)
    }
    return (
        <Container onMouseLeave={() => setShow(false)}>
            <Button
                onMouseEnter={() => setShow(true)}
            >
                {changeText()}
                <Span><i className="material-icons">expand_more</i></Span>
            </Button>
            <DropdownList id='dif' multiple={false} show={show}>
                <DropdownItem selected={true} disabled={true}>Выберите сложность</DropdownItem>
                {routeDif ? routeDif.map((el, ind) => {
                    return <DropdownItem className={saveForm.difficulty===el.id?'active':''} selected={el.id === saveForm.difficulty ? true : false}
                                         key={ind}
                                         id={el.id}
                                         onClick={selectHandler}
                    >{el.title}
                    </DropdownItem>
                }) : <DropdownItem value='NoCategory'>Нет Сложностей</DropdownItem>}

            </DropdownList>
        </Container>
    );
};

export default DropDawnSelect;