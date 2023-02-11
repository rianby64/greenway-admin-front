import React from 'react';
import {SaveSelectors} from '../../../../../../types/Types';
import * as Styled from './styledSelectors.js';


export const SaveRouteSelectors: React.FunctionComponent<SaveSelectors> = ({saveForm, setSaveForm, routeDif}) => {

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
        <>
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <Styled.styledUnderTitleLabel className='save-label'>Выберите сложность <span
                    style={{color: '#0E7505'}}>*</span></Styled.styledUnderTitleLabel>
                <Styled.CustomSelect id='dif' multiple={false} onChange={selectHandler}>
                    <option selected={true} disabled={true}>Выберите сложность</option>
                    {routeDif ? routeDif.map((el, ind) => {
                        return <option selected={el.id === saveForm.difficulty ? true : false}
                                       key={ind}
                                       value={el.id}>{el.title}</option>
                    }) : <option value='NoCategory'>Нет Сложностей</option>}
                </Styled.CustomSelect>
            </div>

        </>
    )
}