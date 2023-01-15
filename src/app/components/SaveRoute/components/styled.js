import styled from 'styled-components'

export const CustomSelect = styled.select`
border-radius: 5px;
width: 95%;
display: initial;
  height: 40px;
margin-top: 20px;
border: 1px solid #777474;
  background: rgba(226, 227, 218, 0.5);
option {
    font-size: 16px;
    :hover {
        cursor: pointer;
    }
}
`

export const styledDiv = styled.div`
  margin: 0 auto;
  width: 880px;
display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`
export const styledTextArea = styled.textarea`
  width: 905px;
  height: 134px;
  background: rgba(226, 227, 218, 0.5);

`;
export const styledInput = styled.input`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: rgba(0, 0, 0, 0.3);
  align-items: center;
  padding: 10px 24px;
  background: rgba(226, 227, 218, 0.5);
  border: 1px solid #E2E3DA;
  border-radius: 2px;
  :focus{
    background: #D3DFB9;
    color: #000000;
  }
`

export const styledDivInputs = styled.div`
width: 380px;
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
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 20px;
  color: #0E7505;
  margin-top: 30px;
`;

export const styledPInput = styled.p`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: #000000;
`;

export const styledDivDurations = styled.div`
  /*borderBottom: '1px solid black', marginBottom: '10px', display:"flex", gap:'10px', flexDirection:"column", justifyContent:"center",*/
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 50%;
  gap: 10px;
`;