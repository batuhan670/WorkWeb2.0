import React from "react"
import { Link } from "react-router-dom";


class MiscMenues extends React.Component {
    render() {
        return <div className="lineFour">
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
}

export default MiscMenues