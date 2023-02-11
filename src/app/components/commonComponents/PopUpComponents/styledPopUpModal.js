import styled from 'styled-components';

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
  bottom: 70px;
  left: 380px;
`;

export const CloseButton = styled.span`
  color: #F9F9F9;
  font-family: Roboto;
  font-size: 15px;
  font-weight: 100;
  cursor: pointer;
`;

export const TopDiv = styled.div`
  width: 100%;
  background: #0E7505;
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
  background: #0E7505;
  border-radius: 2px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 22px;
  color: #F9F9F9;
  text-transform: uppercase;
  padding: 5px 23px;
  border: none;
  cursor: pointer;
`;

export const ButtonSecond = styled.button`
  background: #F9F9F9;
  border-radius: 2px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 22px;
  color: #0E7505;
  text-transform: uppercase;
  padding: 5px 23px;
  border: none;
  border: 1px solid #91C18D;
  cursor: pointer;
`;

export const TextButton = styled.p`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 27px;
  color: #0E7505;
`;
