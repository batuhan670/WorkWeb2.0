import React from 'react'
import { Link } from "react-router-dom";
const Adressbuch = () => {
  return (
    <div>
      <p>0664 435-9568</p>    
      <p>0661 675-3213</p> 
      <p>0660 892-0876</p> 
      <p>0664 243-8456</p>  
      <div><Link to={`/`}>Back to home</Link></div>
    </div>
  )
}

export default Adressbuch
