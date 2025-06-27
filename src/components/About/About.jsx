import React from 'react'
import "./About.css"
import mern from "../../assets/mern.png"
import c from "../../assets/c++.png"
import dsa from "../../assets/dsa.png"
import Card from "../Card/Card"
import {useGSAP} from '@gsap/react'
import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)
function About() {
 useGSAP(() => {
    gsap.from(".circle", {
      x: -100,
      duration: 1,
      opacity: 0,
        stagger:1,
      scrollTrigger: {
        trigger: ".circle",
        scrub: 2,
        start: "top 60%",
        end: "top 30%"
      }
    });

    gsap.from(".line", {
      x: -100,
      duration: 1,
      opacity: 0,
       stagger:1,
      scrollTrigger: {
        trigger: ".line",
        scrub: 2,
        start: "top 60%",
        end: "top 30%"
      }
    });
        gsap.from(".about-details h1", {
      x: -100,
      duration: 1,
      opacity: 0,
       stagger:1,
      scrollTrigger: {
        trigger: ".about-details h1",
        scrub: 2,
        start: "top 60%",
        end: "top 30%"
      }
    });
        gsap.from(".about-details ul", {
      y:100,
      duration: 1,
      opacity: 0,
       stagger:1,
      scrollTrigger: {
        trigger: ".about-details ul",
        scrub: 2,
        start: "top 60%",
        end: "top 30%"
      }
    });
    gsap.from(".rightAbout", {
      x:100,
      duration: 1,
      opacity: 0,
       stagger:1,
      scrollTrigger: {
        trigger: ".rightAbout",
        scrub: 2,
        start: "top 60%",
        end: "top 30%"
      }
    });
  });
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
