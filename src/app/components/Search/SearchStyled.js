
import styled from "styled-components";

export const StyledForm = styled.form`
  height: 46px;
  position: relative;
  width: 300px;
  margin: 0 auto;
  background: white;
`;

export const StyledDiv = styled.div`
  z-index: 999;
  background: white;
 
`;

export const StyledMyInput = styled.input`
  
  align-items: center;
  padding: 12px 12px 12px 50px;
  width: 270px;
  font-family: 'Roboto'; 
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  border: 1px solid #0E7505;
  border-radius: 2px;
  box-sizing: border-box;
  outline-color:#91C18D
`;

export const StyledButton = styled.button`
  position: absolute;
  top: 0;
  right: 0px;
  width: 42px;
  height: 42px;
  border: none;
  background: #7BA7AB;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
  :before{
    content: "\\f002";
    font-family: FontAwesome;
    font-size: 16px;
    color: #F9F0DA;
  }
`;

