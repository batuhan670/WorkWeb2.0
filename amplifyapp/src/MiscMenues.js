import React from "react"
import { Link } from "react-router-dom";

function MiscMenues () {
        return <div className="miscMenu">
            <Link to={`/addressbuch`}>Adressbuch</Link>
            <Link to={`/urlaub`}>Urlaub</Link>
            <Link to={`/pwaendern`}>Passwort ändern</Link>

            <Link to={`/addressbuch`}>Adressbuch</Link>
            <Link to={`/urlaub`}>Urlaub</Link>
            <Link to={`/pwaendern`}>Passwort ändern</Link>
            
            <Link to={`/addressbuch`}>Adressbuch</Link>
            <Link to={`/urlaub`}>Urlaub</Link>
            <Link to={`/pwaendern`}>Passwort ändern</Link>
        </div>;
    }

export default MiscMenues