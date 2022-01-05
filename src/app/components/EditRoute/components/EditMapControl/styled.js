import styled from "styled-components";

export const Button = styled.div`
  z-index: 2000;
  position: absolute;
  padding: 5px;
  border-radius: 5px;
  border: 1px solid black;
  background: white;
  :hover {
    background: tomato;
    color: white;
    cursor: pointer;
    border: 1px solid white;
  }
`;
