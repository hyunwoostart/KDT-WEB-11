import React from 'react'
import { useForm } from 'react-hook-form';

function Ex01() {
    const { register, handleSubmit, formState: { errors }, } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

  return (
    <div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input name='example' ref={register({ required: true })} />
            {errors.example && <span>This field is required</span>}

            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default Ex01