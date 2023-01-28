import React, {useState} from 'react';
import styled from 'styled-components';

const PopUpContainer = styled.div`
  position: relative;
`;

const PopUpCircle = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background-color: green;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const PopUpQuestion = styled.input`
  color: white;
`;

const PopUpModal = styled.div`
  position: absolute;
  top: 60px;
  right: 0;
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  z-index: 1;
`;

const NewPopUp = () => {
    const [showModal, setShowModal] = useState(false);


    return (
        <PopUpContainer>
            <PopUpCircle>
                <PopUpQuestion onBlur={()=>{setShowModal(false)}} onFocus={()=>{setShowModal(true)}} placeholder="?"></PopUpQuestion>
            </PopUpCircle>
            {showModal && (
                <PopUpModal className="popup-modal">
                    <div>Текст всплывающего окна</div>
                </PopUpModal>
            )}
        </PopUpContainer>
    );
};

export default NewPopUp;
