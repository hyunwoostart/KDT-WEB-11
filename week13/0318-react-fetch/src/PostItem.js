import React from 'react'

function PostItem({post}) {
  return (
    <div>
        <div>
            <span>No. {post.id}</span>
            <span>- {post.title}</span>
        </div>
        <p>{post.body}</p>
    </div>
  )
}

export default PostItem