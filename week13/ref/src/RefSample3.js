import React, { useRef } from 'react'

function RefSample3() {
    // 1. ref 객체 만들기
    const inputRef = useRef(null);

    const handleFocus = () => {
        console.log(inputRef.current);
        inputRef.current.focus();
    }
    return (
        <>
            <p>(함수형 컴포넌트) 버튼 클릭시 input에 focus 처리</p>
            <input type='text' ref={inputRef} />
            <button onClick={handleFocus}>클릭</button> 
        </>
       
    )
}

export default RefSample3