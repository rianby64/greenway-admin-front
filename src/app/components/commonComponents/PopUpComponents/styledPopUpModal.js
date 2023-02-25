import styled from "styled-components";

export const Shadow = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  background: #00000070;
  top: 0;
  bottom: 50%;
`;

export const ModalContent = styled.div`
  position: absolute;
  background: white;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  width: 370px;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  bottom: 30%;
  left: 40%;
  z-index: 5000;
`;

export const CloseButton = styled.span`
  color: #f9f9f9;
  font-family: Roboto;
  font-size: 15px;
  font-weight: 100;
  cursor: pointer;
`;

export const TopDiv = styled.div`
  width: 100%;
  background: #0e7505;
  box-shadow: 2px 2px 20px rgba(97, 180, 45, 0.2);
  border-radius: 2px 2px 0px 0px;
  padding: 10px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
`;

export const Text = styled.p`
  text-align: center;
  margin-bottom: 20px;
  word-break: break-all;
  font-size: 12px;
  margin-bottom: 16px;
`;

export const DivText = styled.div`
  padding: 0px 30px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  width: 100%;
  margin-bottom: 34px;
`;

export const ButtonFirst = styled.button`
  background: #0e7505;
  border-radius: 2px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 22px;
  color: #f9f9f9;
  text-transform: uppercase;
  padding: 5px 23px;
  border: none;
  cursor: pointer;
  :hover {
    opacity: 0.5;
  }
`;

export const ButtonSecond = styled.button`
  background: #f9f9f9;
  border-radius: 2px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 22px;
  color: #0e7505;
  text-transform: uppercase;
  padding: 5px 23px;
  border: none;
  border: 1px solid #91c18d;
  cursor: pointer;
  :hover {
    opacity: 0.5;
  }
`;

export const TextButton = styled.p`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 27px;
  color: #0e7505;
`;
