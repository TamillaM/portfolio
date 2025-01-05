import React from 'react'

import Skill from '../Skill/Skill.jsx'
import './Experience.css'

const Experience = () => {
  return (
    <div className='app__exp' id='experience'>
      <div className='app__exp-title'>
        <p style={{fontSize:"15px", color:"rgb(123,123,123)"}}>Explore My</p>
        <h1 style={{fontSize:"50px"}}>Experience</h1>
      </div>
      <div className='app__exp-content'>
        <div className='app__exp-card'>
          <h2 style={{fontSize:"30px", color:"rgb(80,80,80)"}} className='title'>Frontend Development</h2>
          <div className='app__exp-skills'>
            <Skill name={"HTML"} level={"Experienced"}/>
            <Skill name={"CSS"} level={"Experienced"}/>
            <Skill name={"JavaScript"} level={"Basic"}/>
            <Skill name={"React"} level={"Basic"}/>
            <Skill name={"Git"} level={"Experienced"}/>
            <Skill name={"Github"} level={"Experienced"}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience