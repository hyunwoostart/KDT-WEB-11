import React, { useState } from 'react'

function Handler04() {
    const [display, setDisplay] = useState(true)
  return (
    <div>
        <button onClick={() => setDisplay(!display)}>
            {display ? '숨겨라' : '보여라' }
        </button>
        {display && <h4>안녕하세요</h4>}
    </div>
  )
}

export default Handler04