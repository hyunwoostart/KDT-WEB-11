import React from 'react';

import { useForm } from 'react-hook-form';

export default function Form() {
  const {
    register, // input 할당, value 변경 감지
    handleSubmit, // form submit 시 호출
    formState: { errors }, // 폼 상태 객체 - errors
    watch, // 특정 폼 필드의 값을 실시간으로 사용
  } = useForm();

  // handleSubmit(funcA[,funcB]) : 두개의 함수를 받음
  // - funcA: 필수, 유효할 때 실행
  // - funcB: 선택, 유효하지 않을 때 실행

  const onValid = (data) => {
    console.log('onValid', data);
  };

  const onInValid = (err) => {
    console.log('onInValid', err);
  };

  console.log('errors', errors);
  console.log('watch', watch('username'));
  return (
    <div>
      <h1>react-hook-form 라이브러리 데모</h1>
      <form onSubmit={handleSubmit(onValid, onInValid)}>
        <input
          type="text"
          placeholder="username"
          // name='username' 기능
          {...register('username', {
            required: '이름은 필수항목입니다.',
            minLength: {
              message: '이름은 최소 2글자 이상 작성해주세요',
              value: 2,
            },
          })}
        />
        {/* 에러 메시지 */}
        {errors.username?.message}
        <br />
        <input
          type="number"
          placeholder="age"
          {...register('age', {
            required: '0이상의 숫자만 입력 가능합니다.',
            validate: {
              useGmail: (value) => {
                return (
                  value.includes() || '0이상의 숫자만 입력 가능합니다.'
                );
              },
            },
          })}
        />
        {errors.age?.message}
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}