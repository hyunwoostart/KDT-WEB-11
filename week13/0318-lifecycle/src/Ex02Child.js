import React, { useEffect } from 'react'

function Ex02Child({fakePosts}) {


  useEffect(() => {
    return (fakePosts) => {
      console.log('loading')
    }
  }, [fakePosts])
  

  return (
    <div>{fakePosts.id}{fakePosts.title}{fakePosts.body}</div>
  )
}

export default Ex02Child