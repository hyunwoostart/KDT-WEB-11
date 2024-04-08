import React, { useState } from 'react'
import Select from './Select'
import Input from './Input'
import Result from './Result'

function ExTest16() {

    const [data, setData] = useState({
        fruit: 'prd_01',
        background: 'red',
        color: '#000',
        content: '내용을 입력해주세요'
    });

  return (
    <div>
        <Select setData={setData}/>
        <Input setData={setData}/>
        <Result data={data}/>
    </div>
  )
}

export default ExTest16