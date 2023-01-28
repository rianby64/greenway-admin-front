import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
`;

const ImageButton = styled.button`
  background: url(${props => props.imageUrl});
  background-size: cover;
  width: 50px;
  height: 50px;
  border: none;
`;

const ChangeTypeMap= () => {
    const [imageUrl, setImageUrl] = useState('https://example.com/image1.jpg');

    const handleClick = () => {
        if (imageUrl === 'https://example.com/image1.jpg') {
            setImageUrl('https://example.com/image2.jpg');
        } else {
            setImageUrl('https://example.com/image1.jpg');
        }
    };

    return (
        <Container>
           <ImageButton imageUrl={imageUrl} onClick={handleClick}>Изменить тип карты</ImageButton>
        </Container>
    );
};

export default ChangeTypeMap;