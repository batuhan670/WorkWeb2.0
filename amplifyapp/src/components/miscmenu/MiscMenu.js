import React from "react"
import { Link } from "react-router-dom";
import "./MiscMenuStyles.css";

function WrapLink(Link, option) {
    return (
        <div key={option} className="mMComp">
            {Link}
        </div>
    );
}
const MMOpt = ["nM1", "nM2", "nM3", "nM4", "nM5", "nM6", "nM7", "nM8", "nM9"];
const MMLinks = [
    <Link to={`/addressbuch`}>Adressbuch</Link>,
    <Link to={`/urlaub`}>Urlaub</Link>,
    <Link to={`/pwaendern`}>Passwort ändern</Link>,
    <Link to={`/doctorsnote`}>Krankmeldung</Link>,
    <Link to={`/addressbuch`}>Adressbuch</Link>,
    <Link to={`/urlaub`}>Urlaub</Link>,
    <Link to={`/pwaendern`}>Passwort ändern</Link>,
    <Link to={`/doctorsnote`}>Krankmeldung</Link>,
    <Link to={`/addressbuch`}>Adressbuch</Link>,
];

function MiscMenues() {
    return (
        <div id="MiscMenu">
            {WrapLink(MMLinks[0], MMOpt[0])}
            {WrapLink(MMLinks[1], MMOpt[1])}
            {WrapLink(MMLinks[2], MMOpt[2])}
            {WrapLink(MMLinks[3], MMOpt[3])}
            {WrapLink(MMLinks[4], MMOpt[4])}
            {WrapLink(MMLinks[5], MMOpt[5])}
            {WrapLink(MMLinks[6], MMOpt[6])}
            {WrapLink(MMLinks[7], MMOpt[7])}
            {WrapLink(MMLinks[8], MMOpt[8])}
        </div>)
}
/*
{ imageNews.map((number) =>
        <div key={number.toString()}>
            {number}
        </div>)}
*/

export default MiscMenues