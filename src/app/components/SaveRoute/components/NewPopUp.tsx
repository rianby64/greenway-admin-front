import React, {useState} from 'react';
import styled from 'styled-components';

const PopUpContainer = styled.div`
  position: relative;
`;

const PopUpQuestion = styled.input`
  color: white;
  background-color: #0E7505;
  outline: none;
  display: flex;
  text-align: center;
  width: 17px;
  height: 17px;
  padding: 0;
  border-radius: 100%;
  border: none;
  cursor: pointer;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  caret-color: transparent;
  :active{
    background-color: red;
  }
`;

const StyledModalContent = styled.div`
  position: absolute;
  max-width: 210px;
  padding: 0 12px 0 12px;
  background: rgba(231, 240, 212, 0.8);
  backdrop-filter: blur(10px);
  border-radius: 2px;
  z-index: 9999999;
`;

const NewPopUp = ({content}) => {
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
        <PopUpContainer>

            <PopUpQuestion type='text' readonly value='?' onBlur={() => {
                setShowModal(false)
            }} onClick={click}></PopUpQuestion>
            {showModal && (
                <StyledModalContent style={{top}} dangerouslySetInnerHTML={{__html: content}}></StyledModalContent>
            )}
        </PopUpContainer>
    );
};

export default NewPopUp;
