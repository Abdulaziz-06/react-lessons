import React from 'react'
import { Link } from 'react-router-dom'
export default function Header() {
  return (
    <div> 
       <h1>React app</h1>
          <Link to="/">App1</Link>-
          <Link to="/app2">App2</Link>
          
          <hr /></div>
  )
}
