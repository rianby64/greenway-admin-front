import React from 'react';
const PopUp = ({active, setActive, content}) => {
    return (
        <div>
            <div className='popUpDiv' onClick={(e) => {

                e.preventDefault();
                // @ts-ignore
                setActive(true);
            }}>?</div>
            <div className={active?"modal active" : "modal"} onClick={()=>setActive(false)}>
                <div className='modal__content' onClick={e=> e.stopPropagation()}>
                    {content}
                </div>
            </div>
        </div>


    );
};

export default PopUp;