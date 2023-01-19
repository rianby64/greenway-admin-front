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
  background: #F9F9F9;
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
  overflow-y: auto;
`;

export const Wrapper = styled.div`
  width: 100%;
  z-index: 5000;
  background: #F9F9F9;
`;
