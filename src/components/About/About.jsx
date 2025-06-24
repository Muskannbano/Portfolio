import React from 'react'
import "./About.css"
import mern from "../../assets/mern.png"
import c from "../../assets/c++.png"
import dsa from "../../assets/dsa.png"
import Card from "../Card/Card"
function About() {
  return (
    <div id="about">
      <div className="leftAbout">
        <div className="circle-line">
          <div className="circle"></div>
          <div className="line"></div>
          <div className="circle"></div>
          <div className="line"></div>
          <div className="circle"></div>
        </div>
        <div className="about-details">
          <div className="personal-info">
            <h1>Personal Info</h1>
            <ul>
              <li>
                <span>NAME</span> : MUSKAN BANO
              </li>
              <li>
                <span>AGE</span> : 23 YEARS
              </li>
              <li>
                <span>GENDER</span> : FEMALE
              </li>
              <li>
                <span>LANGUAGE KNOWN</span> : HINDI AND ENGLISH
              </li>
            </ul>
          </div>
        <div className="education">
            <h1>Education</h1>
            <ul>
              <li>
                <span>DEGREE</span> : BTECH 
              </li>
              <li>
                <span>BRANCH</span> : COMPUTER SCIENCE AND ENGINEERING
              </li>
              <li>
                <span>CGPA</span> : 7.3
              </li>
            </ul>
          </div>
         <div className="skills">
            <h1>Skills</h1>
            <ul>
              <li>
                MERN STACK WEB DEVELOPER
              </li>
              <li>
                DSA
              </li>
              <li>
               C++
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="rightAbout">
        <Card title="WEB DEVELOPMENT" image={mern}/>
        <Card title="C++" image={c}/>
        <Card title="DSA" image={dsa}/>
      </div>
    </div>
  )
}

export default About
