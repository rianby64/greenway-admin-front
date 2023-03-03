import React, {useState} from 'react';
import * as Styled from './styledPopUp.js';
const NewPopUp = ({content, top, bottom, right, left, width, height}) => {
    const [showModal, setShowModal] = useState(false);

    function click(){
        if (showModal === true){
            setShowModal(false);
        }
        else{
            setShowModal(true);
        }
    }

    return (
        <Styled.PopUpContainer>

            <Styled.PopUpQuestion type='text' readonly value='?' onBlur={() => {
                setShowModal(false)
            }} onClick={click}></Styled.PopUpQuestion>
            {showModal && (
                <Styled.StyledModalContent style={{top:top, bottom:bottom, right:right, left:left, width:width, height:height}} dangerouslySetInnerHTML={{__html: content}}></Styled.StyledModalContent>
            )}
        </Styled.PopUpContainer>
    );
};

export default NewPopUp;
