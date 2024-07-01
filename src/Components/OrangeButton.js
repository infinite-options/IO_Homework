import React from 'react';
import './OrangeButton.css';
function OrangeButton({text}){
    return(
        <div className='OrangeButton'>
            <button>{text}</button>
        </div>
    )
}

export default OrangeButton;