import React from 'react'
import con from '../../assets/contact.png'
import './Contact.css'
import {useGSAP} from '@gsap/react'
import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)
function Contact() {
  useGSAP(() => {
    gsap.from(".leftcontact img", {
      x: -100,
      duration: 1,
      opacity: 0,
        stagger:1,
      scrollTrigger: {
        trigger: ".leftcontact img",
        scrub: 2,
        start: "top 60%",
        end: "top 30%"
      }
    })
        gsap.from("form", {
      x: 100,
      duration: 1,
      opacity: 0,
        stagger:1,
      scrollTrigger: {
        trigger: "form",
        scrub: 2,
        start: "top 60%",
        end: "top 30%"
      }
    })
  })
  return (
   <div id="contact">
    <div className="leftcontact">
        <img src={con} alt="" />
    </div>
    <div className="rightcontact">
        <form action="https://formspree.io/f/xdkzpled" method='POST'>
          <input name='Username' type="text" placeholder='Name' />
          <input type="email" name="Email" placeholder='Email'/>
          <textarea name="message" id="textarea" placeholder='message me'></textarea>
          <input type="submit" id='btn' value="Submit"/>
        </form>
    </div>
   </div>
  )
}

export default Contact
