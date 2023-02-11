import styled from 'styled-components';

export const styledDiv = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 880px;
  display: flex;
  justify-content: space-between;
  
`

export const styledSpan = styled.span`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #000000;
`;

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