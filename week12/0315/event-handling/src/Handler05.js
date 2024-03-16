import React, { useState } from 'react'

function Handler05() {
  const [display, setDisplay] = useState(true)
  return (
    <div>
      <button onClick={() => setDisplay(!display)}>
        {display ? '숨겨라' : '보여라'}
      </button>
      <div>{display && <h3>안녕하세요</h3>}</div>
    </div>
  )
}

export default Handler05