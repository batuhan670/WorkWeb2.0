import React from 'react'
import { Link } from "react-router-dom";
import Data from '../data/Data';
const Urlaub = () => {
  return (
    <div>
      <p>Passwort ändern</p>
      <div><Link to={`/`}>Back to home</Link></div>
      <Data />
    </div>
  )
}

export default Urlaub