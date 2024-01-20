import React from 'react'
import conSt from '../pages/contact/contact.module.scss'
function Contact() {
    return (
        <div className={conSt.contact}>
            <div className={conSt.group}>
            <h2> CONTACT
                <a href="../../pdf/resume.pdf" download="resume.pdf">
                    <button className={conSt.pdf}> 이력서 PDF
                        <img className={conSt.down} src="../../img/icons/download.png" />
                    </button>
                </a>
            </h2>
            <p className={conSt.cimg}>
                AGE : 1994. 03. 03
            </p>
            <p className={conSt.cimg}>
                <a href="mailto:skyg000@naver.com" className={conSt.mail}>
                    E-mail : skyg000@naver.com
                </a>
            </p>
            <p className={conSt.cimg}>
                Phone : 010-4222-1318
            </p>
            <p className={conSt.cimg}>
                <a href="https://github.com/skyg000" className={conSt.git} target="_blank">
                    GitHub : https://github.com/skyg000
                </a>
            </p>
            </div>
            
        </div>
    )
}

export default Contact