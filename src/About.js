import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div>
        <center>
          <h3>
               Welcome to About
          </h3>
          <Link to={'/'}  >Back to home</Link>
        </center>
        
    </div>
  )
}

export default About