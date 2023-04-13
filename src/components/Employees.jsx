import TeamDetails from "./TeamDetails";
import EmployeesCards from "./EmployeesCards";

const Employees = ({employees, setEmployees, selectedTeam, setSelectedTeam}) => {

    return (
        <div>
            <TeamDetails employees={employees} selectedTeam={selectedTeam} setSelectedTeam={setSelectedTeam} />
            <EmployeesCards employees={employees} selectedTeam={selectedTeam} setEmployees={setEmployees} />
        </div>     
    );
}

export default Employees;