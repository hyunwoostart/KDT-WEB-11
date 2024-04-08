import React from 'react'

function Input({setData}) {
  return (
    <div>
      내용 : 
      <input type='text' onChange={(e) => {
        setData((data) => {
          return {...data, content: e.target.value}
        })
      }}/>
    </div>
  )
}

export default Input