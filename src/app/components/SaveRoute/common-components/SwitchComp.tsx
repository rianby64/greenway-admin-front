import React from 'react';
import * as Styled from "../components/styled";





const SwitchComp = (props) => {

    const switchHandler = ()=>{
        props.onChange(props.id);
    }
    return (
        <div>
            <Styled.styledDivSwitch>
                <Styled.styledSpanTopSwitch>{props.label}</Styled.styledSpanTopSwitch>
                <Styled.styledSwitchInput id={props.id} checked={props.checked} type="checkbox"/>
                <Styled.styledSwitchLabel onClick={()=> switchHandler()} htmlFor="switch">Toggle</Styled.styledSwitchLabel>
                <Styled.styledDivUnderSwitch>
                    <Styled.styledSpanSwitch>{props.offLabel}</Styled.styledSpanSwitch>
                    <Styled.styledSpanSwitch>{props.onLabel}</Styled.styledSpanSwitch>
                </Styled.styledDivUnderSwitch>

            </Styled.styledDivSwitch>
        </div>
    );
};

export default SwitchComp;