import React from 'react';
import * as Styled from './styled.js';
const CheckboxStyled:React.FunctionComponent<any> = (props) => {
    const changeHandler=()=>{
        props.onChange()
    }
    return (
        <div>
                <Styled.styledCheckboxInput checked={props.isChecked} type="checkbox" style={{margin:'0'}} />
                <Styled.styledCheckboxLabel onClick={changeHandler}>{props.label}</Styled.styledCheckboxLabel>
        </div>
    );
};

export default CheckboxStyled;