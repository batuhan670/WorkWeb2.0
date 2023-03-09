import React from 'react';
import "./OverviewStyles.css";
import { useSelector, useDispatch } from 'react-redux'
import { incremented, decremented } from "../../stores/counterStore";
import { getEmployeeById } from '../../api/api';
import { setManager } from '../../stores/userStore';
import ClockIn from '../../data/Employee_hours';

function Overview() {
    const dispatch = useDispatch();
    const hourbalance = useSelector((state) => state.counter.value);
    const user = useSelector((state) => state.user.user);
    const manager = useSelector((state) => state.user.manager);

    useEffect(() => {
        const load = async () => {
            try {
                const manager = await getEmployeeById(user.payload.manager_IDemployees);
                dispatch(setManager(manager))
            } catch (err) {
                console.log(err);
            }
        }
        if (!user.payload.manager) {
            load()
        }
    }, [user])

    function managedBy() {
        if (manager == null) {
            return (<></>)
        } else {
            const managerName = manager.payload.name.split(/\b(\s)/);
            return (
                <div className='overviewtable'>
                    <div className='tableName'>Vorgesetzer</div>
                    <div className='tableContent'> {managerName[0]}<br />{managerName[2]}</div>
                </div>
            );
        }
    }

    function getHourColorStyle(number) {
        return {
            "backgroundColor":
                "hsl(" + (60 + number) + ", " + (Math.ceil(Math.abs(number), 50) + 50) + "%, 50%"
        }
    };

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
                    <div className="hourss"> <ClockIn /></div>
                </div>
            </div>
            {managedBy()}
            <div className='overviewtable'>
                <div className='tableName'>Facility<br />Manager</div>
                <div className='tableContent'>Udo Jürgens</div>
            </div>
        </div>
    )
}

export default Overview
