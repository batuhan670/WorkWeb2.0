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
        <div id="overview">
            <div className='table'>
                <EmployeeHours />
            </div>
            <div className='table'>
                Vorgesetzer
                {userData?.manager}<br />
                Anwesenheit<br />
                Kontakte
            </div>
            <div className='table'>
                Instandhaltung
            </div>
        </div>
    )
}

export default Overview
