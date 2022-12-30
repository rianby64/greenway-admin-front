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
  background: #9c9a9a;
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
