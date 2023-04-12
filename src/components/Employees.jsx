
import CardStyle from "../styles/Employees.module.css";
import MaleProfile from "../assets/male.jpg";
import FemleProfile from "../assets/female.jpg";

const Employees = ({employees, setEmployees, selectedTeam}) => {

    function cardClickHandler(employeeId) {
        if (!selectedTeam) {
            return;
        }
        setEmployees(employees.map(employee => {
            if (employee.id === employeeId) {
                employee.team = selectedTeam;
            }
            return employee;
        }));
    }

    return (
        <div className="container-fluid" id="employees_cards">
            <div className="row justify-content-center" style={{}}>
                { employees.map((employee, index) => {
                    return (
                        <div className={ (employee.team === selectedTeam ? CardStyle.selected : '') + (selectedTeam && ' ' + CardStyle.filter) + " card col-md-4 col-lg-3 m-3"} 
                        key={index} onClick={() => {cardClickHandler(employee.id)}} style={{maxWidth: '250px'}}>
                            <div className="card-body">
                                <img src={ employee.gender === 'male' ? MaleProfile : FemleProfile } style={{width: '180px'}} />
                                <h5 className="card-title">{employee.first_name + " " + employee.last_name}</h5>
                                <div className="text-muted">{employee.team}</div>
                                <div className='mt-1'>Age: {employee.age}</div>
                            </div>
                        </div>
                    );
                }) }
            </div>
        </div>       
    );
}

export default Employees;