import styled from 'styled-components';

export const styledCheckboxLabel = styled.div`
  position: relative;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 1;
  color: #000000;
  mix-height:20px;
`;

export const styledCheckboxInput = styled.input`
  position: relative;
  cursor: pointer;
  width:20px;
  height:20px;
  :before{
    content: "";
    display: block;
    position: absolute;
    width: 20px;
    height: 20px;
    top: 0;
    left: 0;
    background-color:#F9F9F9;
    border: 1px solid #91C18D;
    border-radius: 2px;
    box-sizing: border-box;
  }
  
  :checked:before{
    content: "";
    display: block;
    position: absolute;
    width: 20px;
    height: 20px;
    top: 0;
    left: 0;
    background-color:#0E7505;
  }
  :checked:after{
    content: "";
    display: block;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 2px 2px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
    position: absolute;
    top: 2px;
    left: 7px;
  }
`;