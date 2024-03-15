import React, { useState } from 'react'
import Select from './Select';
import Input from './Input';
import Result from './Result';

function ExTest02() {
    const [data, setData] = useState({
        fruit: 'prd_01',
        color: '#000',
        background: 'coral',
        content: 'text'
    });
  return (
    <>
        <Select setData={setData}/>
        <Input setData={setData}/>
        <Result data={data}/>
    </>
  )
}

export default ExTest02