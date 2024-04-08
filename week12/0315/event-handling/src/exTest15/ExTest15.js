import React, { useState } from 'react'
import Select from './Select'
import Input from './Input'
import Result from './Result'

function Extest14() {
    const [data, setData] = useState({
        fruit: 'prd_01',
        background: 'red',
        color: '#000',
        content: '내용을 입력해주세요'
    })

  return (
    <>
        <Select setData={setData} />
        <Input setData={setData} />
        <Result data={data} />
    </>
  )
}

export default Extest14