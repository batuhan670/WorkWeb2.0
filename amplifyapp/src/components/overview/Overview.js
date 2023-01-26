import React, { useEffect, useState } from 'react'
import "./OverviewStyles.css"

var bgCHH = document.querySelector(".currentHours")

function Overview() {

    function getColorStyle(number) {
        const BGhue = (number * 2.5) + 60;
        const BGsat = number + 50;
        const BGhsl = "hsl(" + BGhue + ", " + BGsat + "%, 50%"
        return { "backgroundColor": BGhsl }
    }

    const [hours, setHours] = useState(10)

    useEffect(() => {
        async function doSomeWork() {
            console.log("Doing some work")

            await new Promise(resolve => setTimeout(resolve, 2000))

            setHours(-25)
        }
        doSomeWork()
    })

    return (
        <div id="overview">
            <div className='overviewtable'>
                <div className='tableName'>Aktuelle Stunden</div>
                <div className='tableContent'><div id="currentHours" style={getColorStyle(hours)}>{hours}</div></div>
            </div>
            <div className='overviewtable'>
                <div className='tableName'>Vorgesetzer</div>
                <div className='tableContent'>Anwesenheit<br />
                    Kontakte</div>
            </div>
            <div className='overviewtable'>
                <div className='tableName'>Facility Manager</div>
                <div className='tableContent'>Udo Jürgens</div>
            </div>
        </div>
    )
}

export default Overview
