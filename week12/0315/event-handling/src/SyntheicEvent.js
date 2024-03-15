import React from 'react'

function SyntheicEvent() {
    const SyntheicClick = (e) => {
        console.log(e);
        console.log('Synthetic Event Click!');
        // 콘솔에 기록되는 e 객체는 SyntheticEvent (합성 이벤트)
        // : 리액트가 DOM이 아닌 VirtualDOM 을 사용하는 것처럼
        // 웹 브라우저의 nativeEvent가 아닌 nativeEvent 를 감싼 SyntheticEvent 사용

        // 즉, 리액트에서 onClick, onChange 등등 같은 이벤트들은 브라우저의 기본 이벤트가 아니라
        // 브라우저의 이벤트들을 포함하고 있는 리액트의 고유한 이벤트 객체
    }

    const printInputValue = (e) => {
        console.log(e.target.value);
    }

  return (
    <div>
        <button onClick={SyntheicClick}>Syntheic event 콘솔 찍기</button>
        <br />

        <input type='text' placeholder='입력하세요' onChange={printInputValue} />
    </div>
  )
}

export default SyntheicEvent