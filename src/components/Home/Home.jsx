import React from 'react'
import "./Home.css"
import man from "../../assets/man.png"
import { useNavigate } from 'react-router-dom';
import { scroller } from 'react-scroll';
import { Typewriter } from 'react-simple-typewriter';
import {useGSAP} from '@gsap/react'
import gsap from 'gsap'
function Home() {
  useGSAP(()=>{
  let tl1=gsap.timeline()
  tl1.from(".line1",{
    y:80,
    duration:1,
    opacity:0
  })
  tl1.from(".line2",{
    y:80,
    duration:1,
    opacity:0
  })
  tl1.from(".line3",{
    y:80,
    duration:1,
    opacity:0
  })
  gsap.from(".righthome img",{
    x:200,
    duration:1,
    opacity:0
  })
  })
const goToContact = () => {
  scroller.scrollTo("contact", {
    duration: 800,
    delay: 0,
    smooth: "easeInOutQuart"
  });
};

  return (
    <div id="home">
      <div className="lefthome">
        <div className="homedetails">
          <div className="line1">I'M</div>
          <div className="line2">Muskan Bano</div>
          <div className="line3">
            <Typewriter
              words={["WEB DEVELOPER","SOFTWARE DEVELOPER"]}
              speed={500} eraseSpeed={50} eraseDelay={500} typingDelay={500}
              cursor='|'
            />
          </div>
          <button onClick={goToContact}>CONTACT ME</button>
        </div>
      </div>
      <div className="righthome">
        <img src={man} alt="" />
      </div>
    </div>
  )
}

export default Home
