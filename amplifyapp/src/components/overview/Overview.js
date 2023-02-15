import React, { useEffect, useState } from 'react'
import "./OverviewStyles.css"

function Overview() {

    function getColorStyle(number) {
        const BGhue = 60 + number;
        const BGsat = Math.ceil(Math.abs(number), 50) + 50;
        const BGhsl = "hsl(" + BGhue + ", " + BGsat + "%, 50%"
        return { "backgroundColor": BGhsl }
    }

    const [hours, setHours] = useState(+20)

    useEffect(() => {
        async function doSomeWork() {
            console.log("Doing some work")

            await new Promise(resolve => setTimeout(resolve, 2000))

            setHours(-30)
        }
        doSomeWork()
    })

    return (
        <div id='overview' 
        //Delete style, once adjusted.
        style={{'marginTop':'150px'}}>
            <div className='overviewtable'>
                <div className='tableName'>Aktuelle<br/>Stunden</div>
                <div className='tableContent'><div id="currentHours" style={getColorStyle(hours)}>{hours}</div></div>
            </div>
            <div className='overviewtable'>
                <div className='tableName'>Vorgesetzer</div>
                <div className='tableContent'>Anwesenheit<br />
                    Kontakte</div>
            </div>
            <div className='overviewtable'>
                <div className='tableName'>Facility<br/>Manager</div>
                <div className='tableContent'>Udo Jürgens</div>
            </div>
        </div>
    )
}

export default Overview
