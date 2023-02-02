import React, {useEffect} from 'react';
import * as Styled from '../components/styled.js';
const CheckboxStyled:React.FunctionComponent<any> = (props) => {
    const changeHandler=()=>{
        console.log("otrabotal");
        props.onChange()
    }
    useEffect(()=>{
        console.log("123");
        console.log(props.isChecked, props.label)
    }, [])
    return (
        <label style={{alignItems:'center', display:'flex', justifyContent:'center', gap:'12px'}}>
                <Styled.styledCheckboxInput onClick={changeHandler} checked={props.isChecked} type="checkbox" style={{margin:'0'}} />
                <Styled.styledCheckboxLabel>{props.label}</Styled.styledCheckboxLabel>
        </label>
    );
};

export default CheckboxStyled;