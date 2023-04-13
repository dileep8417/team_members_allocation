const TeamSelection = ({employees, selectedTeam, setSelectedTeam}) => {
    const teams = ['Engineering', 'Product Management'];

    function selectTeamHandler(e) {
        setSelectedTeam(e.target.value);
    }

    function getSelectedTeamEmployesCount() {
        return employees.filter(employee => {
            return employee.team === selectedTeam
        }).length;
    }

    return (
        <div className="container mb-4">
            <div className="row justify-content-center mt-5">
                <div className="col-md-8 col-lg-6">
                    <div className="row">
                        <span className="text-primary mt-2">
                            {selectedTeam ? ( <h6>{ getSelectedTeamEmployesCount() } employees are in {selectedTeam}</h6> ) : ( <h6>{employees.length} employees are in the Organisation</h6> ) }
                        </span>
                        <select className="form-select mt-2" name="teams" id="teams" value={selectedTeam} onChange={selectTeamHandler}>
                            <option value="">All team members</option>
                            { teams.map((team, index) => {
                                return ( <option value={team} key={index}>{team}</option> )
                            }) }
                        </select>
                    </div>
                </div>    
            </div>            
        </div>
    );
}

export default TeamSelection;