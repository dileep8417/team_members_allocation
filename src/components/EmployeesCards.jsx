import EmployeeCard from "./EmployeeCard";

const EmployeesCards = ({employees, setEmployees, selectedTeam, cardClickHandler}) => {

    function cardClickHandler(employeeId) {
        if (!selectedTeam) {
            return;
        }
        setEmployees(employees.map(employee => {
            if (employee.id === employeeId) {
                if (employee.team === selectedTeam) {
                    employee.team = '';
                } else {
                    employee.team = selectedTeam;
                }
            }
            return employee;
        }));
    }

    return (
        <div className="container-fluid" id="employees_cards">
            <div className="row justify-content-center">
                { employees.map((employee, index) => {
                    return <EmployeeCard employee={employee} selectedTeam={selectedTeam} cardClickHandler={cardClickHandler} />;
                }) }
            </div>
        </div>
    );
}

export default EmployeesCards;