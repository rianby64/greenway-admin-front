import React from 'react';
import * as Styled from "./styled";




const SwitchComp = (props) => {
    return (
        <div>
            <Styled.styledDivSwitch>
                <Styled.styledSpanSwitch>{props.offLabel}</Styled.styledSpanSwitch>
                <Styled.styledSwitchInput  id = {props.id} checked={props.saveForm.animals} onChange={props.switchHandler} type="checkbox"/>
                <Styled.styledSwitchLabel htmlFor="switch">Toggle</Styled.styledSwitchLabel>
                <Styled.styledSpanSwitch>{props.onLabel}</Styled.styledSpanSwitch>
            </Styled.styledDivSwitch>
        </div>
    );
};

export default SwitchComp;