import React from 'react'

function Result(props) {
    const {fruit, background, color, content} = props.data
  return (
    <>
        <img src={`${fruit}.png`} width={100} height={100} alt={`${fruit}`} />
        <div style={{
            backgroundColor: background,
            color: color
        }}>
            {content}
        </div>
    </>
  )
}

export default Result