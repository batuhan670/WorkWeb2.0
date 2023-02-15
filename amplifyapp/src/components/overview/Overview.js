import React from 'react'
import "./OverviewStyles.css"
import EmployeeHours from '../../data/Employee_hours'

function Overview() {
    return (
        <div id="overview">
            <div className='table'>
                <EmployeeHours />
            </div>
            <div className='table'>
                Vorgesetzer<br />
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
