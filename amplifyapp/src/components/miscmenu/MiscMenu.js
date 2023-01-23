import React from "react"
import { Link } from "react-router-dom";
import "./MiscMenuStyles.css";

function WrapLink(Link) {
    return (
        <div className="miscMenuComp">
            {Link}
        </div>
    );
}

const MiscMenuLinks = [
    <Link to={`/addressbuch`}>Adressbuch</Link>,
    <Link to={`/urlaub`}>Urlaub</Link>,
    <Link to={`/pwaendern`}>Passwort ändern</Link>,
    <Link to={`/doctorsnote`}>Krankmeldung</Link>,
    <Link to={`/addressbuch`}>Adressbuch</Link>,
    <Link to={`/urlaub`}>Urlaub</Link>,
    <Link to={`/pwaendern`}>Passwort ändern</Link>,
    <Link to={`/doctorsnote`}>Krankmeldung</Link>,
    <Link to={`/addressbuch`}>Adressbuch</Link>,
]

function MiscMenues() {
    return (<div id="MiscMenu">
        {MiscMenuLinks.map(WrapLink)}
    </div>
    );
}

export default MiscMenues