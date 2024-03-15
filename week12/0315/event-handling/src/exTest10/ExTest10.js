import React, { useState } from 'react'
import Select from './Select'
import Input from './Input'
import Result from './Result'

function ExTest10() {
    const [data, setData] = useState({
        fruit: 'prd_01',
        color: '#000',
        background: 'lightgreen',
        content: '입력해주세요'
    })
  return (
    <div>
        <Select setData={setData}/>
        <Input setData={setData}/>
        <Result data={data}/>
    </div>
  )
}

export default ExTest10