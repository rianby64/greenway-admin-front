import React from 'react';
import * as Styled from './styled.js';
const PopUp = ({active, setActive, content}) => {
    return (
        <div>
            <Styled.styledPopUpDiv className='popUpDiv' onClick={(e) => {

                e.preventDefault();
                // @ts-ignore
                setActive(true);
            }}>?</Styled.styledPopUpDiv>
            <Styled.styledModal className={active?"modal active" : "modal"} onMouseLeave={()=>setActive(false)} onClick={()=>setActive(false)}>
                <Styled.styledModalContent dangerouslySetInnerHTML={{ __html: content }} className='modal__content' onClick={e=> e.stopPropagation()}>

                </Styled.styledModalContent>
            </Styled.styledModal>
        </div>


    );
};

export default PopUp;