import React from 'react';

const MyInput = ({type, className, placeholder, touched, valid, shouldValidate, errorMessage,  onChange}) => {
    return (
        <>
            <input
                type={type}
                className={className}
                placeholder={placeholder}
                onChange={onChange}
            />
            {!valid && shouldValidate && touched
                ? <span className="error">{errorMessage || 'Введите значение'}</span>
                : null
            }
        </>
    );
};

export default MyInput;