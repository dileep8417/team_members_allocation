import { useState } from "react";
import TeamStyles from '../styles/TeamDetails.module.css';

const TeamGroups = ({ employees }) => {

    const [employeeGroups, setEmployeeGroups] = useState(getEmployeesGroup()); 

    function getEmployeesGroup() {
        let groupedEmployees = {};

        employees.forEach((employee) => {
            groupedEmployees[employee.team] = groupedEmployees[employee.team] ? [...groupedEmployees[employee.team], employee] : [employee];
            groupedEmployees[employee.team]['collapsed'] = true;
        });

        return groupedEmployees;
    }

    function cardToggleHandler(e) {
        let updatedEmployees = {...employeeGroups};

        updatedEmployees[e.currentTarget.id]['collapsed'] = !updatedEmployees[e.currentTarget.id]['collapsed'];
        setEmployeeGroups(updatedEmployees);
    }

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8 col-lg-6">
                    {
                        Object.keys(employeeGroups).map((teamName, index) => {
                            return (
                                <div key={index} className="m-5">
                                    <div id={teamName} className="cad-header bg-success text-white p-2" style={{cursor: 'pointer'}} onClick={cardToggleHandler}><h5>{teamName}</h5></div>
                                    <div className={ (employeeGroups[teamName]['collapsed'] ? TeamStyles.collapse : TeamStyles.show + ' p-2') + ' card-body bg-light' }>
                                        {employeeGroups[teamName].map((employee, index) => {
                                            return <div key={index} className="details">
                                                <p className="text-dark">{employee.first_name + ' ' + employee.last_name}</p>
                                            </div>
                                        })}
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default TeamGroups;