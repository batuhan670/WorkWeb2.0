import React, { useEffect, useState } from 'react'
import "./OverviewStyles.css"
import EmployeeHours from '../../data/Employee_hours'

function Overview() {
    const [userData, setUserData] = useState()

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
                <div className='tableContent'><div id="currentHours" style={getHourColorStyle(hours)}>{hours}</div></div>
            </div>
            <div className='table'>
                Vorgesetzer
                {userData?.manager}<br />
                Anwesenheit<br />
                Kontakte
            </div>
            <div className='overviewtable'>
                <div className='tableName'>Facility<br />Manager</div>
                <div className='tableContent'>Udo Jürgens</div>
            </div>
        </div>
    )
}

export default Overview
