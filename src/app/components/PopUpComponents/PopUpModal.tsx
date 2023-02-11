import React from 'react';
import * as Styled from './styledPopUpModal.js'

//вёрстка
const PopUpModal = ({text, buttonSuccessText, buttonRejectText, height, img, onSuccess, onReject}) => {
    console.log(onSuccess)
    return (
        <Styled.ModalContent style={{height: height}}>
            <Styled.TopDiv>
                <div></div>
                <Styled.CloseButton onClick={onReject}>x</Styled.CloseButton>
            </Styled.TopDiv>

            <img src={img}/>
            <Styled.DivText>
                <Styled.Text>{text}</Styled.Text>
            </Styled.DivText>

            <Styled.ButtonWrapper>
                {!!onSuccess ? <Styled.ButtonFirst onClick={onSuccess} type="button">{buttonSuccessText}</Styled.ButtonFirst> :
                    <Styled.TextButton>СПАСИБО</Styled.TextButton>}
                {!!onReject && <Styled.ButtonSecond onClick={onReject} type="button">{buttonRejectText}</Styled.ButtonSecond>}
            </Styled.ButtonWrapper>
        </Styled.ModalContent>
    )
}


export default PopUpModal;
