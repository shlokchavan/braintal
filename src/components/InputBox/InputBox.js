import React from 'react'
import './InputBox.css'
const InputBox = ({ width, className, type, placeholder }) => {
    return (

        <input style={{ width: width }} className={'input ' + className} type={type | 'text'} placeholder={placeholder} />


    )
}

export default InputBox
