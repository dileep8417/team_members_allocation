import TeamSelection from "./TeamSelection";
import EmployeesCards from "./EmployeesCards";

const Employees = ({employees, setEmployees, selectedTeam, setSelectedTeam}) => {

    return (
        <div>
            <TeamSelection employees={employees} selectedTeam={selectedTeam} setSelectedTeam={setSelectedTeam} />
            <EmployeesCards employees={employees} selectedTeam={selectedTeam} setEmployees={setEmployees} />
        </div>     
    );
}

export default Employees;