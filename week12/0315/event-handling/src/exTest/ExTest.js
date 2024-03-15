import React, { useState } from 'react'
import Select from './Select'
import Input from './Input'
import Result from './Result'

function ExTest() {
    // 상태
    const [data, setData] = useState({
        fruit: 'prd_01',
        background: '#000',
        color: '#fff',
        content:'텍스트'
    })
  return (
    <div>
        <Select setData={setData}/>
        <Input setData={setData}/>
        <Result data={data}/>
    </div>
  )
}

export default ExTest