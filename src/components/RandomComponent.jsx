import React, { useState } from 'react';

const RandomComponent = () => {
    const [value, setValue] = useState(0);

    const randomizeValue = () => {
        const randomValue = Math.floor(Math.random() * 100) + 1; // Genera un valor aleatorio entre 1 y 100
        setValue(randomValue);
    };

    const resetValue = () => {
        setValue(0); // Resetea el valor a 0
    };

    return (
        <div>
            <h2>Random Value: {value}</h2>
            <button onClick={randomizeValue}>Generate Random Value</button>
            <button onClick={resetValue}>Reset to 0</button>
        </div>
    );
};

export default RandomComponent;
