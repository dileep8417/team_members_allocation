import { useState } from "react";
import Employees from "./components/Employees";
import TeamDetails from './components/TeamDetails';

import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {

  const [employees, setEmployees] = useState(
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

  const [selectedTeam, setSelectedTeam] = useState("");

  return (
    <div>
      <TeamDetails employees={employees} selectedTeam={selectedTeam} setSelectedTeam={setSelectedTeam} />
      <Employees employees={employees} setEmployees={setEmployees} selectedTeam={selectedTeam}/>
    </div>
  );
}

export default App;