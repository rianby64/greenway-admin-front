import React, {useEffect, useState} from "react"
import {Checkboxes} from "../../../../types/Types"
import * as Styled from "./styled";
import {PopUpText} from "../../../../constants/Text1";
import CheckboxStyled from "./CheckboxStyled";
import NewPopUp from "./NewPopUp";

export const CategoriesCheckboxes: React.FunctionComponent<Checkboxes> = ({array}) => {
    const [categoriesArray, setcategoriesArray] = useState<any[]>([]);
    const checkBoxHandler = (elem: any) => {
        setcategoriesArray(categoriesArray.map((el) => {
            if (el.id === elem.id) {
                el.checked = !el.checked;
            }
            return el;
        }))
    }
    useEffect(() => {
        setcategoriesArray(array);
    }, [array])


    return (
        <>
            <Styled.styledDiv style={{flexDirection: 'column', marginBottom: '60px'}}>
                <Styled.styledUnderTitleLabel style={{display: 'flex', gap: '10px'}} className='save-label'>Выберите
                    категорию (категории) <span style={{color: '#0E7505'}}>*</span>

                    <NewPopUp
                        content={PopUpText.popUp5}
                        height={'80px'}
                        width={'210px'}
                        top={'5px'}
                        bottom={'0px'}
                        right={'0px'}
                        left={'20px'}
                    />
                </Styled.styledUnderTitleLabel>
                <div style={{display: 'flex', gap: '30px'}} className='district__checkBoxes'>
                    {categoriesArray ? categoriesArray.map((el) => {
                        return (
                            <CheckboxStyled isChecked={el.checked} label={el.title}
                                            onChange={() => checkBoxHandler(el)}/>
                            //<Checkbox className={'checkboxes'} checked={el.checked} filledIn id={`district_${el.id}`} label={el.title} onChange={() => checkBoxHandler(el)} value={el.id} />
                        )
                    }) : <CheckboxStyled filledIn id={`district_Nodata`} label={`Нет данных`} disabled={true}
                                         value={''}/>}
                </div>
            </Styled.styledDiv>


        </>
    )
}