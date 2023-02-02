
import styled from 'styled-components';
import React, {useState} from 'react';
import {SaveSelectors} from "../../../../types/Types";


const Container = styled.div`
  z-index: 1000;
  position: relative;
  :hover{
    Span{
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
  width:270px;
  height:48px;
  :hover{
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
  text-decoration:none;
  color: rgba(0, 0, 0, 0.5);
  :hover{
    background: #D3DFB9;
    color: #000000;
    cursor: pointer;
  }
`;

const DropDawnSelect: React.FunctionComponent<SaveSelectors> = ({saveForm, setSaveForm, routeDif}) => {
    const [show, setShow] = useState(false);
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
        <Container onMouseLeave={() => setShow(false)}>
            <Button
                onMouseEnter={() => setShow(true)}
            >
                Выберите сложность
                <Span><i className="material-icons">expand_more</i></Span>
            </Button>
            <DropdownList id='dif' multiple={false} onChange={selectHandler} show={show}>
                <DropdownItem selected={true} disabled={true}>Выберите сложность</DropdownItem>
                {routeDif ? routeDif.map((el, ind) => {
                    return <DropdownItem selected={el.id === saveForm.difficulty ? true : false}
                                   key={ind}
                                   value={el.id}>{el.title}</DropdownItem>
                }) : <DropdownItem value='NoCategory'>Нет Сложностей</DropdownItem>}

            </DropdownList>
        </Container>
    );
};

export default DropDawnSelect;