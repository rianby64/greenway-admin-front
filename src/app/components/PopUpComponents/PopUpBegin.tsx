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
`;

const Text = styled.p`
  text-align: center;
  margin-bottom: 20px;

`;




//вёрстка
const PopUpBegin = ({text, textunder, height, img}) => (
        <ModalContent style={{height:height}}>
            <TopDiv>
                <div></div>
                <CloseButton />
            </TopDiv>

            <img src={img}/>
            <Text>{text}</Text>
          <span>{textunder}</span>
        </ModalContent>
);

export default PopUpBegin;
