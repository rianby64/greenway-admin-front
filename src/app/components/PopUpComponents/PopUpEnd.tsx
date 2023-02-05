import React from 'react';
import styled from 'styled-components';


const ModalContent = styled.div`
  position: relative;
  background: white;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  width: 370px;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CloseButton = styled.span`
  color: #F9F9F9;
  font-family: Roboto;
  font-size: 15px;
  font-weight: 100;
`;

const TopDiv = styled.div`
  width: 100%;
  background: #0E7505;
  box-shadow: 2px 2px 20px rgba(97, 180, 45, 0.2);
  border-radius: 2px 2px 0px 0px;
  padding: 10px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
`;

const Text = styled.p`
  text-align: center;
  margin-bottom: 20px;
 
`;



const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  width: 100%;
  margin-top: 20px;
`;



const ButtonFirst = styled.button`
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

const ButtonSecond = styled.button`
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


//вёрстка
const PopUpEnd = ({text, buttonText1, buttonText2, height}) => (

    <ModalContent style={{height:height}}>
        <TopDiv>
            <div></div>
            <CloseButton>x</CloseButton>
        </TopDiv>

        <img/>
        <Text>{text}</Text>
        <ButtonWrapper>
            <ButtonFirst type="button">{buttonText1}</ButtonFirst>
            <ButtonSecond type="button">{buttonText2}</ButtonSecond>
        </ButtonWrapper>
    </ModalContent>

);

export default PopUpEnd;
