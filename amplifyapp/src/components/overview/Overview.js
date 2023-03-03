import React from 'react';
import { useEffect, useState } from 'react';
import "./OverviewStyles.css";
import { useSelector, useDispatch } from 'react-redux'
import { incremented, decremented } from "../../stores/counterStore";

function Overview() {
    const dispatch = useDispatch();
    const hourbalance = useSelector((state) => state.counter.value);
    function getHourColorStyle(number) {
        return {
            "backgroundColor":
                "hsl(" + (60 + number) + ", " + (Math.ceil(Math.abs(number), 50) + 50) + "%, 50%"
        }
    };
    const [userData, setUserData] = useState();

    useEffect(() => {
        async function loadData() {
            const result = await fetch("http://localhost:3000/api/employees/1")
            const userData = await result.json()
            setUserData(userData)
        }
        loadData()
    }, [])

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
                <div className='tableContent'> {userData?.manager}</div>
            </div>
            <div className='overviewtable'>
                <div className='tableName'>Facility<br />Manager</div>
                <div className='tableContent'>Udo Jürgens</div>
            </div>
        </div>
    )
}

export default Overview
