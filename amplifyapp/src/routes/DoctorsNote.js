import React from 'react'
import DoctorForm from '../components/doctorForms/DoctorForm.js';
import Data from '../data/Data.js';
import EmployeeHours from '../data/Employee_hours.js';


function DoctorsNote() {
  return (
    <div>
      <EmployeeHours />
      <Data />
    </div>
  )
}

export default DoctorsNote