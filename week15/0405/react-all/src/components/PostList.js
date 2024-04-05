import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
// import './postList.scss'

function PostList(){
    // 작성에 해당하는 PostCreateForm 으로 링크
    // 게시글 목록 보여줌

    // 리덕스 스토어에서 게시글 목록 상태를 조회
    const posts = useSelector((state) => state.posts.postList);
  return (
    <div className='postList'>
        <h1>게시판</h1>
        <Link to='/create'>작성</Link>
        {/* 게시글 목록 */}
        <ul>
            {posts.map((post) => (
                <li key={post.id}>{post.content}</li>
            ))}
        </ul>
    </div>
  )
}

export default PostList