import React from 'react'
import { Link } from "react-router-dom";
const PWaendern = () => {
  return (
    <div>
      <p>Passwort ändern</p>
      <div><Link to={`/`}>Back to home</Link></div>
    </div>
  )
}

export default PWaendern
