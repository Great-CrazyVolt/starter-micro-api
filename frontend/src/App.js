import { Attendance, Supervisor, AddEmployee, Navbar } from './components'
// import './App.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Attendance />} />
        <Route path="/supervisor" element={<Supervisor />} />
        <Route path="/addEmployee" element={<AddEmployee />} />
      </Routes>

    </Router>
  );
}

export default App;
