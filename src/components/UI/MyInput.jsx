import React from 'react';

const MyInput = ({type, className, placeholder, touched, valid, shouldValidate, errorMessage,  onChange}) => {
    return (
        <>
            {touched}
        <input
            type={type}
            className={className}
            placeholder={placeholder}
            onChange={onChange}
        />
        {!valid && shouldValidate && touched
            ? <span>{errorMessage || 'Введите значение'}</span>
            : null
        }
        </>
    );
};

export default MyInput;