import React from 'react';
import * as Styled from './styled.js';
const CheckboxStyled = () => {
    return (
        <div>
                <Styled.styledCheckboxInput type="checkbox" style={{margin:'0'}} />
                <Styled.styledCheckboxLabel>Check one</Styled.styledCheckboxLabel>
        </div>
    );
};

export default CheckboxStyled;