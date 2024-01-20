"use client"
import React from 'react'
import abSt from "../pages/about/about.module.scss"

function About() {
  return (
    <div className={abSt.about}>
      <h1>ABOUT</h1>
      <div className={abSt.total}>
        <div className={abSt.myimg}>
          <img src='../../img/about/myimg1.jpg' className={abSt.img}></img>
        </div>
        <div className={abSt.text}>
          <div className={abSt.introduce}>
            <p className={abSt.introtext}>
              개발을 접하면서 더 많은 발전을 하기 위해 지금까지 열심히 공부해왔습니다. 
              다소 부족하지만 하루하루 노력으로 채우고 있습니다. 빠르게 변하는 웹개발   
              트랜드 속에서,  다양한 시도를 하며 <span className={abSt.txtcolor}>성실하게 성장하는 프론트엔드 개발자가</span> 되겠습니다.
            </p>
          </div>
          <div className={abSt.edu}>
            <h3>EDUCATION</h3>
            <ul>
              <li>
                <p>- 2023. 11 : 그린컴퓨터아카데미 프론트엔드 과정 수료</p>
                <p>- 2021. 02 : 한국관광대학교 디지털관광과 졸업</p>
              </li>
            </ul>
          </div>
          <div className={abSt.cer}>
            <h3>CERTIFICATE</h3>
            <ul>
              <li>
                <p>- 리눅스마스터2급 (1차 합격)</p>
                <p>- 네트워크관리사2급 </p>
                <p>- ITQ한글엑셀A등급 </p>
                <p>- 정보처리기능사 </p>
              </li>
            </ul>
          </div>
          <span className={abSt.aboutfoot}>
            더 많은 발전을 하기 위해 열심히 공부하고 있습니다 .
          </span>
        </div>
      </div>
    </div>
  )
}

export default About