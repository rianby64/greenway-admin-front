import React, { useState } from 'react';
import relef from "../../../images/relef.png";
import sputink from "../../../images/Sputnik.png";
import * as Styled from './styled';


const ChangeTypeMap= ({switchLayer}) => {
    const [imageUrl, setImageUrl] = useState(sputink);
    const [text, setText] = useState('СПУТНИК')

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
        <Styled.Container onClick={handleClick}>
            <img style={{width:'120px', height:'100px'}} src={imageUrl}/>
           <Styled.ImageButton >{text}</Styled.ImageButton>
        </Styled.Container>
    );
};

export default ChangeTypeMap;