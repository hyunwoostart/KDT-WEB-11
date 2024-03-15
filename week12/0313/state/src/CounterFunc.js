import React from 'react'
import { useState } from 'react';

function CounterFunc() {
    const [number, setNumber] = useState(0);

    const increase = () => {
        setNumber (number + 1);
    }

    const decrease = () => {
        setNumber (number - 2);
    }
  return (
    <div>
        <h1>{number}</h1>
        <button onClick={increase}>plus</button>
        <button onClick={decrease}>minus</button>
    </div>
  )
}

export default CounterFunc