import React, { useRef, useState } from 'react'

function RefSample4() {
    const idRef = useRef(1);
    const [id, setId] = useState(10);
    let idVar = 20;

    const plusIdRef = () => {
        idRef.current += 1;
        console.log(idRef.current);
    }

    const plusIdState = () => {
        setId(id + 1);
    }
  return (
    <div>
        <h1>Ref Sample - 로컬 변수</h1>
        <h2>{idRef.current}</h2>
        <button onClick={plusIdRef}>plus ref</button>

        <h2>{id}</h2>
        <button onClick={plusIdState}>plus state</button>
   
        <h2>{idVar}</h2>
        <button onClick={() => {
            idVar += 1;
            console.log(idVar);
        }}>plus 일반 변수</button>
    </div>
  )
}

export default RefSample4