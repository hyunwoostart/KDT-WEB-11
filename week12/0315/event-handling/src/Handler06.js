import React, { useState } from 'react'

function Handler06() {
    const [display, setDisplay] = useState(true)
  return (
    <div>
        <button onClick={() => setDisplay(!display)}>
            {display ? '숨겨라' : '보여라'}
        </button>
        <h3>
            {display && '안녕하세요'}
        </h3>
    </div>
  )
}

export default Handler06