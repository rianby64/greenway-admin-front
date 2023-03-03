import React from 'react';
import * as Styled from './styledCheckbox.js';
const CheckboxStyled: React.FunctionComponent<any> = (props) => {
    const changeHandler = () => {
        props.onChange()
    }
    return (
        <label style={{ alignItems: 'center', display: 'flex', justifyContent: 'center', gap: '12px' }}>
            <Styled.styledCheckboxInput onChange={changeHandler} checked={props.isChecked} type="checkbox" style={{ margin: '0' }} />
            <Styled.styledCheckboxLabel>{props.label}</Styled.styledCheckboxLabel>
        </label>
    );
};

export default CheckboxStyled;