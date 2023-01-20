import React from 'react';
import * as Styled from "./styled";





const SwitchComp = (props) => {

    const func = (e)=>{
        console.log(e);
        props.onChange(e);
    }
    return (
        <div>
            <Styled.styledDivSwitch>
                <Styled.styledSpanSwitch>{props.offLabel}</Styled.styledSpanSwitch>
                <Styled.styledSwitchInput id={props.id} checked={props.checked} onChange={props.onChange} type="checkbox"/>
                <Styled.styledSwitchLabel onclick={(e)=> func(e)} htmlFor="switch">Toggle</Styled.styledSwitchLabel>
                <Styled.styledSpanSwitch>{props.onLabel}</Styled.styledSpanSwitch>
            </Styled.styledDivSwitch>
        </div>
    );
};

export default SwitchComp;