import CardStyle from "../styles/Employees.module.css";
import MaleProfile from "../assets/male.jpg";
import FemleProfile from "../assets/female.jpg";
import { useContext } from "react";
import AppContext from "../context";

const EmployeeCard = ({employee, cardClickHandler}) => {

    const {selectedTeam} = useContext(AppContext);

    return (
        <div className={ (employee.team === selectedTeam ? CardStyle.selected : '') + (selectedTeam && ' ' + CardStyle.filter) + " card col-md-4 col-lg-3 m-3"} 
        onClick={() => {cardClickHandler(employee.id)}} style={{maxWidth: '250px'}}>
            <div className="card-body">
                <img src={ employee.gender === 'male' ? MaleProfile : FemleProfile } style={{width: '180px'}} />
                <h5 className="card-title">{employee.first_name + " " + employee.last_name}</h5>
                <div className="text-muted">{employee.team}</div>
                <div className='mt-1'>Age: {employee.age}</div>
            </div>
        </div>
    );
}

export default EmployeeCard;