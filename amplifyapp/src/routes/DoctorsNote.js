import React from 'react'
import DoctorForm from '../components/doctorForms/DoctorForm.js';
import ShiftSchedule from '../components/Schichtplan/ShiftSchedule.js';
import ShiftScheduleBanner from '../components/Schichtplan/ShiftScheduleBanner.js';
import Data from '../data/Data.js';
import EmployeeHours from '../data/Employee_hours.js';


function DoctorsNote() {
  return (
    <div>

      <Data />
      <EmployeeHours />
      <ShiftScheduleBanner />
      <ShiftSchedule />
    </div>
  )
}

export default DoctorsNote