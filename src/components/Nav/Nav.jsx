import React,{useRef} from 'react'
import "./Nav.css"
import {Link} from 'react-scroll'
function Nav() {
  let menu=useRef()
  let mobile=useRef()
 
  return (
    <nav>
        <h1>PORTFOLIO</h1>
        <ul className='desktopMenu'>
            <Link to="home" activeClass='active' smooth={true} spy={true} duration={500}><li>Home</li></Link>         
            <Link to="about" activeClass='active' smooth={true} spy={true} duration={500}><li>About</li></Link>          
            <Link to="projects" activeClass='active' smooth={true} spy={true} duration={500}><li>Projects</li></Link>
            <Link to="contact" activeClass='active' smooth={true} spy={true} duration={500}><li>Contact</li></Link>        
        </ul>
        <div className="hamburger" ref={menu} onClick={()=>{
          mobile.current.classList.toggle("activeMobile")
           menu.current.classList.toggle("activeham")
        }}>
          <div className="ham"></div>
          <div className="ham"></div>
          <div className="ham"></div>
        </div>
         <ul className='mobileMenu' ref={mobile}>
            <Link to="home" activeClass='active' smooth={true} spy={true} duration={500}><li>Home</li></Link>         
            <Link to="about" activeClass='active' smooth={true} spy={true} duration={500}><li>About</li></Link>          
            <Link to="projects" activeClass='active' smooth={true} spy={true} duration={500}><li>Projects</li></Link>
            <Link to="contact" activeClass='active' smooth={true} spy={true} duration={500}><li>Contact</li></Link>        
        </ul>
    </nav>
  )
}

export default Nav
