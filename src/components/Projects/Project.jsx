import React from 'react'
import Card from "../Card/Card"
import weather from "../../assets/Weather.webp"
import todo from "../../assets/Todo.jpeg"
import car from "../../assets/car.jpg"
import twitter from "../../assets/twitter.avif"
import ems from "../../assets/ems.png"
import "./Project.css"
import {useGSAP} from '@gsap/react'
import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)
function Project() {
  useGSAP(() => {
    gsap.from("#para", {
      y: 100,
      duration: 1,
      opacity: 0,
        stagger:1,
      scrollTrigger: {
        trigger: "#para",
        scrub: 2,
        start: "top 60%",
        end: "top 30%"
      }
    })
    gsap.from(".slider", {
      y: 100,
      duration: 1,
      opacity: 0,
        stagger:1,
      scrollTrigger: {
        trigger: ".slider",
        scrub: 2,
        start: "top 60%",
        end: "top 30%"
      }
    })
    });
  return (
    <div id='projects'>
      <h1 id='para'>My Projects</h1>
      <div className="slider">
        <Card title="WEATHER APP" image={weather} link="https://weather-muskan.netlify.app/"/>
        <Card  title="TO DO APP" image={todo} link="https://github.com/Muskannbano/Twitter-Clone.git"/>
        <Card  title="CAR RACING GAME" image={car} link="https://car-racing-game-js.netlify.app/"/>
        <Card  title="TWITTER CLONE" image={twitter} link="https://muskannbano.github.io/Twitter-Clone/"/>
        <Card  title="EMPLOYEE MANAGEMENT SYSTEM" image={ems} link="https://muskan-ems01.netlify.app/"/>
      </div>
    </div>
  )
}

export default Project
