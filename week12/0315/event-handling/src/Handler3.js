import {useState } from 'react'

function Handler3() {
    const [text, setText] = useState('안녕하세요')
    const [sub, setSub] = useState('사라져라')

    const changeText = () => {
        setText('')
        setSub('보여라')
    }

  return (
    <div>
        <h2>{text}</h2>
        <button onClick={changeText}>{sub}</button>
    </div>
  )
}

export default Handler3