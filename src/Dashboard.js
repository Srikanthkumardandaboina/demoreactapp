import React from 'react'
import { Link } from 'react-router-dom'

import { useLocation } from 'react-router-dom'

const Dashboard = () => {
 
  let {search}=useLocation();
  console.log(search);
  let pr= new URLSearchParams(search);
console.log(pr.get('name'));
  
  return (
    <div>
        <center>
            <h3>dashboard</h3>
            
            <Link to={'/'}>back to home</Link>
        </center>
    </div>
  )
}

export default Dashboard