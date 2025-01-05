import React from 'react'
import "./Certificate.css"
import certificate from "../../assets/certificate.png"
import cpdf from "../../assets/Certificate-FD.pdf"

const Certificate = () => {
  return (
    <div className='app__certificate' id='certificate'>
        <div className="app__certificate-title">
            <p style={{fontSize:"15px", color:"rgb(123,123,123)"}}>Watch my</p>
            <h1 style={{fontSize:"50px"}}>Certificate</h1>
        </div>
        <div className="app__certificate-info">
            <img src={certificate} alt="certificate"/>
            <h1>Frontend Development</h1>
            <a href={cpdf} download={"Tamilla-Certificate"} target='_blank' rel='noreferrer'>Download</a>
        </div>
    </div>
  )
}

export default Certificate