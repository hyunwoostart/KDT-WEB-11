import React, { useState } from 'react'
// import Img01 from './prd_01.png'
// import Img02 from './prd_02.png'
// import Img03 from './prd_03.png'
// import Img04 from './prd_04.png'

function Handler4() {

  const [text, setText] = useState();
  const [color, setColor] = useState({color : 'red', backgroundColor : 'black'});


  const changeText = (e) => {
    setText(e.target.value);
  }

  const redChange = () => {
    setColor({color: 'red', backgroundColor: 'red'})
}

const blueChange = () => {
  setColor({color : 'blue', backgroundColor: 'blue'})
}

  return (
    <div>
      <label>과일
        <select>
          <option>사과</option>
          <option>바나나</option>
          <option>복숭아</option>
          <option>오렌지</option>
        </select>
      </label>
      <label>배경색
        <select>
          <optio>검정</optio>
          <option onChange={redChange}>빨강</option>
          <option onChange={blueChange}>노랑</option>
          <option>초록</option>
        </select>
      </label>
      <label>글자색
        <select>
          <option>검정</option>
          <option onChange={redChange}>빨강</option>
          <option onChange={blueChange}>노랑</option>
          <option>초록</option>
        </select>
      </label>
      <label>내용<input type="text" onChange={changeText} placeholder='내용을 입력하세요' /></label>
      <div className='prd_wrap'>
        {/* <img src={Img01} /> */}
        {/* <img src={Img02} />
        <img src={Img03} />
        <img src={Img04} /> */}
        <p style={{ color:color , backgroundColor: color }}>{text}</p>
      </div>
    </div>
  )
}

export default Handler4