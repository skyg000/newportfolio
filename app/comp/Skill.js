import React from 'react'
import skSt from '../pages/skill/skill.module.scss'
function Skill() {
  return (
    <div className={skSt.skill}>
        <h1>SKILL</h1>
        <div className={skSt.skill_icon}>
        <figure className={skSt.skill_img}>
            <div className={skSt.use}>
                <h3>활용 할 줄 알아요</h3>
                <img src="../../img/icons/skillicon/html.png" />
                <img src="../../img/icons/skillicon/css.png" />
                <img src="../../img/icons/skillicon/scss.png" />
                <img src="../../img/icons/skillicon/jscript.png" />
                <img src="../../img/icons/skillicon/react.png" />
                <img src="../../img/icons/skillicon/nextjs.png" /> 
                <img src="../../img/icons/skillicon/figma1.png" /> 
                <img src="../../img/icons/skillicon/github.png" />
            </div>
            <div className={skSt.lowuse}>
                <h3> 활용해 봤어요</h3>
                <img src="../../img/icons/skillicon/vue.png" />
                <img src="../../img/icons/skillicon/mysql.png" />
                <img src="../../img/icons/skillicon/maria.png" />
                <img src="../../img/icons/skillicon/mongo.png" /> 
            </div>
        </figure>
    </div>
    </div>
  )
}

export default Skill