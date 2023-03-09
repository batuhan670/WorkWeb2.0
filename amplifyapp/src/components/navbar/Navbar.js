import "./NavbarStyles.css"

import React, { useState } from 'react'
import { Link } from "react-router-dom"
import { FaBars, FaTimes } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { clearUser } from "../../stores/userStore";

const Navbar = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user.user)
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

    function logoutButton() {
        if (user == null) {
            return <></>
        }
        return (
            <li>
                <button onClick={() => dispatch(clearUser())}>Logout</button>
            </li>
        );
    }

    function showUser() {
        if (user != null) {
            return (<h1>WorkWeb - Hallo {user.payload.name}</h1>)
        } else {
            return (<h1>WorkWeb - Hallo Gast</h1>)
        }
    }

    return (
        <div className={color ? "header header-bg" : "header"}>
            <Link to="/">
                {showUser()}
            </Link>
            <Link>

            </Link>
            <div className="navbarAbteilung">
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
                {logoutButton()}
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