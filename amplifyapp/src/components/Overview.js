import React from 'react'
import "./OverviewStyles.css"

function Overview() {
    return (
        <div id="overview">
            <div className='table'>
                Aktuelle Stunden<br />
                83,2
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
