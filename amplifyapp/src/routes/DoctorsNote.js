import React from 'react'
import SicknessReportForm from '../components/doctorForms/DoctorForm.js';
import ShiftSchedule from '../components/schichtplan/ShiftSchedule.js';
import ShiftScheduleBanner from '../components/schichtplan/ShiftScheduleBanner.js';
import Data from '../data/Data.js';
import EmployeeHours from '../data/Employee_hours.js';


function DoctorsNote() {
  return (
    <div>
      <SicknessReportForm />

    </div>
  )
}

export default DoctorsNote