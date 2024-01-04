import { useEffect, useState } from 'react';
import { Attendance, Supervisor, AddEmployee, Navbar } from './components'
import './App.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [employeeDetails, setEmployeeDetails] = useState([])

  const handleEmployeeAttendance = (data) => {

    setEmployeeDetails(
      [ // with a new array
        ...employeeDetails, // that contains all the old items
        data // and one new item at the end
      ]
    )
  }

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Attendance handleEmployeeAttendance={handleEmployeeAttendance} />} />
        <Route path="/supervisor" element={<Supervisor employeeDetails={employeeDetails} />} />
        <Route path="/addEmployee" element={<AddEmployee />} />
      </Routes>

    </Router>
  );
}

export default App;
