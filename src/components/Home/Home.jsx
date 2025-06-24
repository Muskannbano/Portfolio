import React from 'react'
import "./Home.css"
import man from "../../assets/man.png"
import { Typewriter } from 'react-simple-typewriter';
function Home() {
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
          <button>HIRE ME</button>
        </div>
      </div>
      <div className="righthome">
        <img src={man} alt="" />
      </div>
    </div>
  )
}

export default Home
