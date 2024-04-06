// import './postCreateForm.scss'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux';
import { addPost } from '../redux/postSlice';
import { useNavigate } from 'react-router-dom';
import { useCallback, useEffect, useState } from 'react';

function PostCreateForm(){
    // 게시글 작성 form -> reaact-hook-form
    const {register, handleSubmit} = useForm();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onSubmit = (data) => {
        console.log(data)
        const newPost = {
            id: Date.now(),
            title: data.title,
            content: data.content,
        };

        dispatch(addPost(newPost));
        navigate('/');
    };

    // useCallback
    const [input, setInput] = useState('')
    // const someFunction = () => {
    //     console.log(`input: ${input}`)
    // };

    const someFunction = useCallback(() => {
        console.log('someFunction 실행!');
        console.log(`input: ${input}`);
    }, [input]); // 의존성 배열이 빈 값이니 처음 렌더링 될 때 만들어져서 메모이제이션이 됨

    /* 
        input 값 변경 시 someFunction이 바뀌는건 아니니까 useEffect()는 불리지 않아야함
        but input 변경 해보면 콘솔에 'someFunction 변경!'이 찍히는걸 확인할 수 있음
        리액트에서 state 변경 시 컴포넌트는 다시 랜더링 되기 때문에
        => 함수형 컴포넌트 렌더링 = 함수 다시 호출 = 함수 내부 모든 변수 초기화
        someFunction 함수도 하나의 변수이기 때문에 (변수에 함수 객체의 메모리 주소가 할당된 것)
        input 변경될 때 다시 렌더링이 될 때 함수 객체가 새로 만들어져 또 다른 메모리 주소가 생김
        => useCallback 이용해서 렌더링 되더라도 someFunction 이 바뀌지 않게 하면 됨
    */

    useEffect(() => {
        console.log('someFunction 변경!')
    }, [someFunction]);

  return (
    <>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor='title'>제목</label>
                <input type='text' id='title' {...register('title', {required: '제목은 필수'})} />
            </div>
            <div>
                <label htmlFor='content'>내용</label>
                <textarea name='' id='content' cols='30' rows='10'{...register('content')} />
            </div>
            <button>작성</button>
        </form>
        <hr />
        <input type='text' value={input} onChange={(e) => setInput(e.target.value)} />
        <button onClick={someFunction}>call someFunction</button>
    </>
  )
}

export default PostCreateForm