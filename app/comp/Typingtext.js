"use client"
import React, { useEffect, useState } from 'react'

function Typingtext() {
    const txt = "안녕하세요 ! \n 저는 항상 화이팅 하는 FRONTEND 개발자 홍석현입니다. "
    const [text,settext] = useState('');
    const [count,setCount] = useState(0);
    useEffect(()=>{
        const interval = setInterval(() => {
            settext(text + txt[count])
            setCount(count +1)
        }, 100);
        if(count === txt.length){
            clearInterval(interval)
        }
        return()=> clearInterval(interval)
    })
  return (
    <p className='text'>{text}</p>
  )
}

export default Typingtext