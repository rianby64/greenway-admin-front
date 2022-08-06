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

export const Input = styled.input`
  background: white;
  z-index: 50000;
  position: absolute;
  top: 13%;
  left: 6px;
  border-radius: 5px;
  width: 125px;
  height: 25px;
  border: 1px solid black;
  cursor:pointer;
  :hover {
    cursor: pointer;
    opacity: 0.7;
    border: 1px solid white;
  }
`;
