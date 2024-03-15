import React from 'react'

function Result(props) {
    const {fruit, color, background, content} = props.data
  return (
    <>  
        <img src={`${fruit}.png`} width={100} height={100} alt={'fruit'}/>
        <div style={
            {
                color: color,
                backgroundColor: background
            }
        }>
            {content}
        </div>
    </>
  )
}

export default Result