import styled from 'styled-components';

export const styledDiv = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 880px;
  display: flex;
  justify-content: space-between;
  
`
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

export const styledSpan = styled.span`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #000000;
`;

export const styledDivInformation = styled.div`
display: flex;
  max-width:880px;
  margin: 0 auto;
  align-items: center;
  justify-content: space-between;
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
