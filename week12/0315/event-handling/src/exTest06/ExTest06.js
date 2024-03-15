import React, { useState } from 'react'
import Select from './Select'
import Result from './Result'
import Input from './Input'

function ExTest06() {
    const [data, setData] = useState({
        fruit: 'prd_01',
        color: '#000',
        background: 'coral',
        content: '입력해주세요'
    })
  return (
    <div>
        <Select setData={setData} />
        <Input setData={setData} />
        <Result data={data} />
    </div>
  )
}

export default ExTest06