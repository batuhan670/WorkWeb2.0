import React from "react";

const woche = [
    "Mo", "Di", "Mi", "Do", "Fr", "Sa", "So"
];

const arbeitsstunden = [
    "04:00-12:00", "04:00-12:00", "04:00-12:00", "04:00-12:00", "04:00-12:00", "Frei", "Frei"
];

function tage(element) {
    return <div>{element}</div>
};

function Schichtplan() {
    return (
        <div className="schichtplan">
            {woche.map(tage)}
            {arbeitsstunden.map(tage)}
        </div>
    );
};

export default Schichtplan;
