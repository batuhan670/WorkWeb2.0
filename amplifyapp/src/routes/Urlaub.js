import React from 'react'
import { Link } from "react-router-dom";
const Urlaub = () => {
  return (
    <div>
      <p>Urlaubsantrag</p>
      <div><Link to={`/`}>Back to home</Link></div>
    </div>
  )
}

export default Urlaub
