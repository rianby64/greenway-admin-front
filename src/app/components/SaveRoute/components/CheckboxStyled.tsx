import React from 'react';
import * as Styled from './styled.js';
const CheckboxStyled:React.FunctionComponent<any> = (props) => {
    const changeHandler=()=>{
        props.onChange()
    }
    return (
        <div style={{alignItems:'center'}}>
                <Styled.styledCheckboxInput onClick={changeHandler} checked={props.isChecked} type="checkbox" style={{margin:'0'}} />
                <Styled.styledCheckboxLabel >{props.label}</Styled.styledCheckboxLabel>

        </div>
    );
};

export default CheckboxStyled;