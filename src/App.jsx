import { Element } from 'react-scroll'
import Home from "./components/Home/Home"
import About from "./components/About/About"
import Nav from "./components/Nav/Nav"
import Project from "./components/Projects/Project"
import Contact from "./components/Contact/Contact"

function App() {
  return (
    <>
      <Nav />

      <Element name="home">
        <Home />
      </Element>

      <Element name="about">
        <About />
      </Element>

      <Element name="projects">
        <Project />
      </Element>

      <Element name="contact">
        <Contact />
      </Element>
    </>
  )
}

export default App
