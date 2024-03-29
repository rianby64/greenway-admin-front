import styled from 'styled-components'

export const CustomSelect = styled.select`
border-radius: 5px;
width: 100%;
display: initial;
  padding: 13px 24px;
  height: auto;
border: 1px solid #777474;
  background: #0E7505;
  box-shadow: 2px 2px 20px rgba(97, 180, 45, 0.2);
  color: #F9F9F9;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
option {
  color: rgba(0, 0, 0, 0.5);
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  background:#F9F9F9;
  box-shadow: 2px 2px 20px rgba(97, 180, 45, 0.2);
  border-radius: 2px;

  :hover {
      background: #D3DFB9;
      color: #000000;
        cursor: pointer;
    }
  :checked{
    background: #D3DFB9;
  }
  ::-moz-focus-inner {
    border: 0;
  }
}
`
export const styledOption = styled.option`
:hover{
  background-color: red;
}
`;

export const styledDiv = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 880px;
  display: flex;
  justify-content: space-between;
  
`
export const styledTextArea = styled.textarea`
  padding: 10px 24px;
  box-sizing: border-box;
  min-width: 905px;
  min-height: 134px;
  background: rgba(226, 227, 218, 0.5);
  outline:none;
  :focus{
    outline:#91C18D;
    background: #D3DFB9;
    color: #000000;
  }

`;
export const styledInput = styled.input`
  width: 100%;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #000000;
  align-items: center;
  padding: 10px 24px;
  background: rgba(226, 227, 218, 0.5);
  border: 1px solid #E2E3DA;
  border-radius: 2px;
  box-sizing: border-box;
  outline-color:#91C18D;
  outline-width:1px;
  :focus{
    background: #D3DFB9;
    color: #000000;
  }
`

export const styledInputDuration = styled.input`
  width: 40%;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #000000;
  align-items: center;
  padding: 10px 0px 10px 10px;
  background: rgba(226, 227, 218, 0.5);
  border: 1px solid #E2E3DA;
  border-radius: 2px;
  box-sizing: border-box;
  margin: 0 5px 0 0px;
  :focus{
    background: #D3DFB9;
    color: #000000;
  }
`
export const styledDivInputs = styled.div`

`;


export const styledSwitchLabel = styled.label`
  cursor: pointer;
  text-indent: -9999px;
  width: 50px;
  height: 30px;
  background: #E2E3DA;
  display: block;
  border-radius: 100px;
  position: relative;
  :after {
    content: '';
    position: absolute;
    top: 5px;
    left: 5px;
    width: 18px;
    height: 18px;
    background: #fff;
    border-radius: 16px;
    transition: 0.3s;
  }
  :active:after {
    background: #F9F9F9;
    width: 30px;
  }
`;

export const styledSwitchInput = styled.input`
  position: absolute;
  height: 0;
  width: 0;
  visibility: hidden;
  :checked + ${styledSwitchLabel}{
    background: #D3DFB9;
  }
  :checked + ${styledSwitchLabel}:after{
    background: #0E7505;
    left: calc(100% - 5px);
    transform: translateX(-100%);
  }
`;

export const styledDivSwitch = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  flex-direction: column;
`;

export const styledSpanSwitch = styled.span`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 20px;
  color: #000000;
`;

export const styledSpanTopSwitch = styled.span`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #000000;
  max-width: 200px;
  text-align: center;
`;

export const styledDivUnderSwitch = styled.div`
display: flex;
  gap: 20px;
`;

export const styledTitleLabel = styled.span`
  display: block;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 20px;
  color: #0E7505;
  max-width: 880px;
  margin: 56px auto 25px ;
  text-align: left;
  
`;

export const styledUnderTitleLabel = styled.span`
  display: block;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: #000000;
  text-align: left;
  margin-bottom: 16px;
`;

export const styledPInput = styled.p`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: #000000;
  text-align: left;
`;

export const styledDivDurations = styled.div`
  /*borderBottom: '1px solid black', marginBottom: '10px', display:"flex", gap:'10px', flexDirection:"column", justifyContent:"center",*/
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  margin-bottom: 15px;
  width: 50%;
  gap: 10px;
`;

export const styledButton = styled.button`
width: 260px;
  cursor: pointer;
  height: 50px;
  background: #0E7505;
  border-radius: 2px;
  border: none;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;
  color: #F9F9F9;
`;

export const styledDivForInputs = styled.div`
  display:flex;
  flex-direction: column;
  max-width: 380px;
  width: 100%;
`;

export const styledDivText = styled.div`
  margin-top: 30px;
  border: 1px solid #91C18D;
  padding: 10px 15px;
`;

export const styledDivTextP = styled.div`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
`;

export const styledDivInformation = styled.div`
display: flex;
  max-width:880px;
  margin: 0 auto;
  align-items: center;
  justify-content: space-between;
`;



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
export const styledSpan = styled.span`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #000000;
`;

export const styledModalContent = styled.div`
  max-width: 210px;
  padding: 0 12px 0 12px;
  background: rgba(231, 240, 212, 0.8);
  backdrop-filter: blur(10px);
  border-radius: 2px;
`;

export const styledPopUpDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #0E7505;
  width: 17px;
  height: 17px;
  border-radius: 100px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  color: #FFFFFF;
  :hover{
    cursor: pointer;
    border: 1px solid #91C18D;
  }
  :active{
    background: #C10016;
  }
`;


export const styledModal = styled.div`
  position: absolute;
  background: transparent;
  height: 100vh;
  width: 100vw;
  top: 10px;
  right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: scale(0);
  transition: 0.5s;
  &.active{
    transform: scale(1);
  }
`;
