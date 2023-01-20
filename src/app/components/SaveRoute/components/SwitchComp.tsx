import React from 'react';
import * as Styled from "./styled";





const SwitchComp = (props) => {

    const switchHandler = ()=>{
        props.onChange(props.id);
    }
    return (
        <div>
            <Styled.styledDivSwitch>
                <Styled.styledSpanSwitch>{props.offLabel}</Styled.styledSpanSwitch>
                <Styled.styledSwitchInput id={props.id} checked={props.checked} type="checkbox"/>
                <Styled.styledSwitchLabel onClick={()=> switchHandler()} htmlFor="switch">Toggle</Styled.styledSwitchLabel>
                <Styled.styledSpanSwitch>{props.onLabel}</Styled.styledSpanSwitch>
            </Styled.styledDivSwitch>
        </div>
    );
};

export default SwitchComp;