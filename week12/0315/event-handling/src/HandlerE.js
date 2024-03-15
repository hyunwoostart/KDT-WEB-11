
import { useState } from 'react'

function HandlerE() {
    const [text, setText] = useState('검정색 글씨')
    const [color, setColor] = useState({color : 'black'});

    const redChange = () => {
        setText('빨간색 글씨')
        setColor({color: 'red'})
    }

    const blueChange = () => {
      setText('파란색 글씨')
      setColor({color : 'blue'})
    }

  return (
    <div>
        <h2 style={color}>{text}</h2>
        <button onClick={redChange}>빨간색</button>
        <button onClick={blueChange}>파란색</button>
    </div>
  )
}

export default HandlerE