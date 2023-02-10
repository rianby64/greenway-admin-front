import React from 'react';
import styled from 'styled-components';


const ModalContent = styled.div`
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

const CloseButton = styled.span`
  color: #F9F9F9;
  font-family: Roboto;
  font-size: 15px;
  font-weight: 100;
  cursor: pointer;
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
  margin-bottom: 40px;
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
const PopUpEnd = ({text, buttonSuccessText, buttonRejectText, height, img, onSuccess, onReject}) => {
    console.log(onSuccess)
    return(
        <ModalContent style={{height:height}}>
            <TopDiv>
                <div></div>
                <CloseButton onClick={onReject}>x</CloseButton>
            </TopDiv>

            <img src={img}/>
            <div>
                <Text>{text}</Text>
            </div>

            <ButtonWrapper>
                {!!onSuccess && <ButtonFirst onClick={onSuccess} type="button">{buttonSuccessText}</ButtonFirst>}
                <ButtonSecond onClick={onReject} type="button">{buttonRejectText}</ButtonSecond>
            </ButtonWrapper>
        </ModalContent>
    )
}






export default PopUpEnd;
