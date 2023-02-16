import React from 'react';
//import { useEffect, useState } from 'react';
import "./OverviewStyles.css";

function Overview() {
    const hours = -15;
    function getHourColorStyle(number) {
        return {
            "backgroundColor":
                "hsl(" + (60 + number) + ", " + (Math.ceil(Math.abs(number), 50) + 50) + "%, 50%"
        }
    };

    /*
        const [hours, setHours] = useState(+20);
        useEffect(() => {
            async function changeHoursTest() {
                console.log("Doing some work")
                await new Promise(resolve => setTimeout(resolve, 5000))
                setHours(-30)
            }
            changeHoursTest()
        });
    */

    return (
        <div id='overview'
            //Delete style, once adjusted.
            style={{ 'marginTop': '150px' }}>
            <div className='overviewtable'>
                <div className='tableName'>Aktuelle<br />Stunden</div>
                <div className='tableContent'><div id="currentHours" style={getHourColorStyle(hours)}>{hours}</div></div>
            </div>
            <div className='overviewtable'>
                <div className='tableName'>Vorgesetzer</div>
                <div className='tableContent'>Anwesenheit<br />
                    Kontakte</div>
            </div>
            <div className='overviewtable'>
                <div className='tableName'>Facility<br />Manager</div>
                <div className='tableContent'>Udo Jürgens</div>
            </div>
        </div>
    )
}

export default Overview
