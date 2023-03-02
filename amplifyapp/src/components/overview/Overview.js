import React from 'react';
//import { useEffect, useState } from 'react';
import "./OverviewStyles.css";
import { useSelector, useDispatch } from 'react-redux'
import { incremented, decremented } from "../../stores/loginStore";

function Overview() {
    const hourbalance = useSelector((state) => state.counter.value)
    const dispatch = useDispatch();
    function getHourColorStyle(hourbalance) {
        return {
            "backgroundColor":
                "hsl(" + (60 + hourbalance) + ", " + (Math.ceil(Math.abs(hourbalance), 50) + 50) + "%, 50%"
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
                <div className='tableContent'>
                    <button onClick={() => dispatch(incremented())}>+</button>
                    <div id="currentHours" style={getHourColorStyle(hourbalance)}>{hourbalance}</div>
                    <button onClick={() => dispatch(decremented())}>-</button>
                </div>
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
