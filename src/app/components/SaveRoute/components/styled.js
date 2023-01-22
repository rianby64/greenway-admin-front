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
}
`

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
  :focus{
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
  color: rgba(0, 0, 0, 0.3);
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
`;

export const styledSpanSwitch = styled.span`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #000000;
`;

export const styledTitleLabel = styled.label`
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

export const styledUnderTitleLabel = styled.label`
  display: block;
  max-width: 880px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: #000000;
  text-align: left;
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

export const styledCheckboxInput = styled.input`
  display: none;
  cursor: pointer;

`;

export const styledCheckboxLabel = styled.label`
  padding-left: 25px;
  position: relative;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #000000;
  :before{
    
    left: 0;
    bottom: 1px;
    content: "";
    display: inline-block;
    position: absolute;
    width: 16px;
    height: 16px;
    background: #F9F9F9;
    border: 1px solid #91C18D;
    border-radius: 2px;
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




