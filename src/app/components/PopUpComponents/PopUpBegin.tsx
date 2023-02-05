import React from 'react';
import styled from 'styled-components';

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContent = styled.div`
  background: white;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  width: 80%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const CloseButton = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 20px;
  height: 20px;
  cursor: pointer;
  &:before,
  &:after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 2px;
    height: 20px;
    background-color: black;
    transform: translate(-50%, -50%) rotate(45deg);
  }
  &:before {
    transform: translate(-50%, -50%) rotate(-45deg);
  }
`;

const Image = styled.img`
  margin-bottom: 20px;
`;

const Text = styled.p`
  text-align: center;
  margin-bottom: 20px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 20px;
`;

const ButtonFirst = styled.button`
  background: #0E7505;
  border-radius: 2px;
`;


//вёрстка
const PopUpBegin = ({ onClose, src, alt, text }) => (
    <ModalWrapper>
        <ModalContent>
            <CloseButton onClick={onClose} />
            <Image src={src} alt={alt} />
            <Text>{text}</Text>
            <ButtonWrapper>
                <ButtonFirst>Cancel</ButtonFirst>
                <button>Ok</button>
            </ButtonWrapper>
        </ModalContent>
    </ModalWrapper>
);

export default PopUpBegin;
