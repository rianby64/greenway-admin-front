import styled from 'styled-components';

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

export const styledDiv = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 880px;
  display: flex;
  justify-content: space-between;
  
`

export const styledDivForInputs = styled.div`
  display:flex;
  flex-direction: column;
  max-width: 380px;
  width: 100%;
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

export const styledDivInputs = styled.div`
  display: block;
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