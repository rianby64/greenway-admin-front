import * as Styled from './styledDropDawnSelect.js'
import React, {useState} from 'react';
import {SaveSelectors} from "../../../../types/Types";

const DropDawnSelect: React.FunctionComponent<SaveSelectors> = ({saveForm, setSaveForm, routeDif}) => {

    const [show, setShow] = useState(false);

    const changeText = () => {
        switch (saveForm.difficulty){
            case 'proffessional': return "Для проффесионалов";
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
        <Styled.Container onMouseLeave={() => setShow(false)}>
            <Styled.Button
                onMouseEnter={() => setShow(true)}
            >
                {changeText()}
                <Styled.Span><i className="material-icons">expand_more</i></Styled.Span>
            </Styled.Button>
            <Styled.DropdownList id='dif' multiple={false} show={show}>
                <Styled.DropdownItem selected={true} disabled={true}>Выберите сложность</Styled.DropdownItem>
                {routeDif ? routeDif.map((el, ind) => {
                    return <Styled.DropdownItem className={saveForm.difficulty===el.id?'active':''} selected={el.id === saveForm.difficulty ? true : false}
                                         key={ind}
                                         id={el.id}
                                         onClick={selectHandler}
                    >{el.title}
                    </Styled.DropdownItem>
                }) : <Styled.DropdownItem value='NoCategory'>Нет Сложностей</Styled.DropdownItem>}

            </Styled.DropdownList>
        </Styled.Container>
    );
};

export default DropDawnSelect;