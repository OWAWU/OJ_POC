import React, { useState } from 'react';
import "./input.css";

const Input = () => {
    const [value, setValue] = useState('');
    const onChange = (event) => {
        setValue(event.target.value);
    }

    return (
        <div className="field">
            <input type ="text" value ={value} onChange ={onChange} placeholder ="코드를 입력하세요" />
        </div>
    );
}

export default Input;