"use client"
import React, { useEffect } from 'react'
import footerSt from '../pages/footer/footer.module.scss'
import Link from 'next/link'
function Footer() {
  const scrollToTop = () =>{
    window.scrollTo({
      top:0,
      behavior: 'smooth'
    })
  }
  useEffect(()=>{
    const button = document.getElementById('scrollbutton')
    button.addEventListener('click',scrollToTop);

    return () => {
      button.removeEventListener('click',scrollToTop)
    }
  },[])
  return (
    <div className={footerSt.footer}>
      <p className={footerSt.top}> 
      <button id="scrollbutton" className={footerSt.btn} onClick={scrollToTop} type='button'> TOP</button>
        </p>
    </div>
  )
}

export default Footer