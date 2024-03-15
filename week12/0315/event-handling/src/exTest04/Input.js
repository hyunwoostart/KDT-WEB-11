import React from 'react'

function Input({setData}) {
  return (
    <div>
      <input type="text" onChange={(e) => {
        setData((data) => {
          return {...data, content: e.target.value}
        })
      }} /> 
    </div>
  )
}

export default Input