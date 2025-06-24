import React from 'react'
import Card from "../Card/Card"
import "./Project.css"
function Project() {
  return (
    <div id='projects'>
      <h1>My Projects</h1>
      <div className="slider">
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>
    </div>
  )
}

export default Project
