import React, { useState } from 'react';

const CompWithProps = () => {
    const [inputValue, setInputValue] = useState('');  
    const [charCount, setCharCount] = useState(0);     

    // Función que actualiza el estado cuando se escribe en el input
    const handleInputChange = (event) => {
        const value = event.target.value;
        setInputValue(value);         
        setCharCount(value.length);    
    };

    return (
        <div>
            <h1>HOLA DESDE VITE</h1>
            <p>Count: {charCount}</p>  
            
            <input 
                type="text" 
                value={inputValue} 
                onChange={handleInputChange} 
                placeholder="Escribe aquí..."
            />
            <h2>User: {inputValue}</h2>  
        </div>
    );
};

export default CompWithProps;
