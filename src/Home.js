import React from 'react'
import { Link } from 'react-router-dom'
import './index.css';

function Home() {
  const nm='john';
  return (
    <div>
        <center>
            <h2>hello home</h2>
            <Link to={`/dashboard?name=${nm}`} className='Link'>Dashboard</Link> 
            <br></br>  
            <br></br> 
            <Link to={'/about'} className='Link'>About</Link>    
        </center>
    </div>
  )
}

export default Home