import styled from "styled-components";

export const StyledForm = styled.form`
  
  padding-top: 25px;
  width: 100%;
  display: flex;
  flex-flow: column;
  justify-content: space-around;
  align-items: center;
  height: 100%;
`;

export const StyledHandlers = styled.div`
  display: flex;
  align-items: center;
  flex-flow: column;
  z-index: 2001;
  width: 40%;
  min-width: 190px;
  height: 100vh;
  background: #f8f8f8;
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

export const StyledImageHandler = styled.div`
  margin-bottom: 20px;
  width: 95%;
`;

export const Wrapper = styled.div`
  width: 100%;
  z-index: 5000;
  background: #F9F9F9;
  position:absolute;
  left: 0;
`;

export const styledP = styled.p`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #000000;
  text-align: center;
`;

export const styledDiv = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-bottom: 20px;
`;
export const styledDivWrapper = styled.div`
  margin: 0 0 0 50px;
  width: 100%;
  max-width: 880px;
  display: flex;
  justify-content: space-between;
  
`
