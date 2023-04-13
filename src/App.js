import { useState, useEffect } from "react";
import Employees from "./components/Employees";
import Navbar from "./components/Navbar";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import TeamGroups from "./components/TeamGroups";

const App = () => {

  const [employees, setEmployees] = useState(
    JSON.parse(localStorage.getItem('employees')) ||
    [
        { 
            'id': '987',
            'first_name': 'Dileep',
            'last_name': 'Atyam',
            'gender': 'male',
            'age': 23,
            'team': 'Engineering'
        },
        { 
            'id': '487',
            'first_name': 'Priyanka',
            'last_name': 'Rajesh',
            'gender': 'female',
            'age': 22,
            'team': 'Engineering'
        },
        { 
            'id': '927',
            'first_name': 'Yovan',
            'last_name': 'Gullapudi',
            'gender': 'male',
            'age': 20,
            'team': 'Product Management'
        },
        { 
            'id': '923',
            'first_name': 'Janith',
            'last_name': 'Gullapudi',
            'gender': 'male',
            'age': 20,
            'team': 'Engineering'
        },
        { 
            'id': '374',
            'first_name': 'Anirudha',
            'last_name': 'Singh',
            'gender': 'female',
            'age': 25,
            'team': 'Product Management'
        },
        { 
            'id': '874',
            'first_name': 'Sunny',
            'last_name': '',
            'gender': 'female',
            'age': 28,
            'team': 'Product Management'
        },
        { 
            'id': '877',
            'first_name': 'May',
            'last_name': 'Ketchum',
            'gender': 'female',
            'age': 25,
            'team': 'Engineering'
        },
    ]
  );

  const [selectedTeam, setSelectedTeam] = useState(localStorage.getItem('selectedTeam') || '');

  useEffect(() => {
    localStorage.setItem('employees', JSON.stringify(employees));
  }, [employees]);

  useEffect(() => {
    localStorage.setItem('selectedTeam', selectedTeam);
  }, [selectedTeam]);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <Employees employees={employees} setEmployees={setEmployees} selectedTeam={selectedTeam} setSelectedTeam={setSelectedTeam} />
        } />

        <Route path = "/teams" element={<TeamGroups employees={employees} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;