
import React from 'react'

function Select({setData}) {
  return (
    <div>
        과일 : 
        <select onChange={(e) => {
            setData((data) => {
                return {...data, fruit: e.target.value}
            })
        }}>
            <option value='prd_01'>사과</option>
            <option value='prd_02'>바나나</option>
            <option value='prd_03'>복숭아</option>
            <option value='prd_04'>오렌지</option>
        </select>
        배경색 :
        <select onChange={(e) => {
            setData((data) => {
                return {...data, background: e.target.value}
            })
        }}>
            <option value='red'>빨강</option>
            <option value='yellow'>노랑</option>
            <option value='green'>초록</option>
            <option value='blue'>파랑</option>
        </select>
        글자색 :
        <select onChange={(e) => {
            setData((data) => {
                return {...data, color: e.target.value}
            })
        }}>
            <option value='red'>빨강</option>
            <option value='yellow'>노랑</option>
            <option value='green'>초록</option>
            <option value='blue'>파랑</option>
        </select>
    </div>
  )
}

export default Select