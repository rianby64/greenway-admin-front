import React, { useState } from 'react';
import styled from 'styled-components';
import relef from "../../images/relef.png";
import sputink from "../../images/Sputnik.png";
const Container = styled.div`
  position: absolute;
  left: 15px;
  bottom: 60px;
  z-index: 999;
  display: flex;
  flex-direction: column;
`;

const ImageButton = styled.button`
  background: #0E7505;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;
  color: #F9F9F9;
  background-size: cover;
  width: 120px;
  height: 50px;
  border: none;
  cursor: pointer;
`;

const ChangeTypeMap= ({switchLayer}) => {
    const [imageUrl, setImageUrl] = useState(sputink);
    const [text, setText] = useState('РЕЛЬЕФ')

    const handleClick = () => {
        switchLayer();
        if (imageUrl === relef) {
            setImageUrl(sputink);
            setText('CПУТНИК');
        } else {
            setImageUrl(relef);
            setText('РЕЛЬЕФ');
        }
    };

    return (
        <Container>
            <img style={{width:'120px', height:'120px'}} src={imageUrl}/>
           <ImageButton onClick={handleClick}>{text}</ImageButton>
        </Container>
    );
};

export default ChangeTypeMap;