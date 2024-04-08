import React, { useState } from 'react'
import Select from './Select'
import Input from './Input'
import Result from './Result'

function Extest14() {
    const [data, setData] = useState({
        fruit: 'prd_01',
        backgroud: 'red',
        color: '#000'
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