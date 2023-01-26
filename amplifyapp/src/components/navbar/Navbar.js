import "./NavbarStyles.css"

import React, { useState } from 'react'
import { Link } from "react-router-dom"

import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    const [color, setColor] = useState(false);
    const changeColor = () => {
        if (window.scrollY >= 100) {
            setColor(true);
        } else {
            setColor(false)
        }
    };
    const [submenuActive, setSubmenuActive] = useState(false);
    const activateSubMenu = () => setSubmenuActive(!submenuActive);


    window.addEventListener("scroll", changeColor);

    return (
        <div className={color ? "header header-bg" : "header"}>
            <Link to="/">
                <h1>WorkWeb.</h1>
            </Link>

            <div className="navbarAbteilung">
           <Link>
                    <h1 >Abteilung</h1>
                    </Link>
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/News">Schichtplan</Link>
                </li>
                <li>
                    <Link to="/Kontakte">Vorgesetzter</Link>
                </li>
                <li>
                    <Link to="/Kontakte">Kontakt</Link>
                </li>
                <li className="parentMenu">
                    <a href="#" onClick={activateSubMenu}>Einstellungen</a>
                    <div className={submenuActive ? "submenu active" : "submenu"}>
                        <ul>
                            <li>
                            <Link to="/Mitarbeiter">Passwort ändern</Link>
                            </li>
                            <li>
                            <Link to="/Mitarbeiter"></Link>
                            </li>
                        </ul>
                    </div>
                </li>
                
                
            </ul>
            <div className="hamburger" onClick=
                {handleClick}>
                {click ? (
                    <FaTimes size={20} style={{
                        color:
                            "#fff"
                    }} />
                ) : (

                    <FaBars size={20} style={{
                        color:
                            "#fff"
                    }} />
                )}
            </div>
        </div>
    );
};

export default Navbar;