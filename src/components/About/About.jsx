import React from 'react'
import exp from '../../assets/experience.png'
import education from '../../assets/education.png'

import "./About.css"

const About = () => {
  return (
    <div className='app__about' id='about'>
      <div className='app__about-content'>
        <div className='app__about-content_title'>
          <p style={{fontSize:"15px", color:"grey"}}>Get To Know More</p>
          <h1 style={{fontSize:"50px"}}>About Me</h1>
        </div>
        <div className='app__about-content-info'>
          <div className='app__about-box'>
            <img src={exp} alt="experience" style={{cursor:"pointer"}}/>
            <h5 style={{fontSize:"20px"}}>Experience</h5>
            <p style={{fontSize:"15px"}}>1+ year</p>
            <p style={{fontSize:"15px"}}>Frontend Development</p>
          </div>
          <div className='app__about-box'>
            <img src={education} alt="education" style={{cursor:"pointer"}} />
            <h5 style={{fontSize:"20px"}}>Education</h5>
            <p style={{fontSize:"15px"}}>Codecademy: Frontend Development</p>
          </div>
        </div>
        <div className='app__about-text'>
          <p>My name is Tamilla and I have been learning programming for about a year.
            Although I am a new in this job and need to learn further,
            I have already done some projects and
            progress in this field.</p>
        </div>
      </div>
    </div>
  )
}

export default About