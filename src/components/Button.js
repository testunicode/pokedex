import React from 'react';

const Button = ({ buttonText, buttonClass, buttonImg, buttonId, onClick }) => {
    return (
        <button className={buttonClass} id={buttonId} onClick={onClick}>
            {buttonImg &&
                <img src={buttonImg} alt="" />
            }
            {buttonText}
        </button>
    );
};

export default Button;