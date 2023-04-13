import {Link} from 'react-router-dom';
import { useState } from 'react';
const Navbar = () => {

    const [selectedPage, setSelectedPage] = useState('home');
    function navItemClickHandler(e) {
        setSelectedPage(e.currentTarget.id);
    }
    return (
        <nav className="navbar navbar-expand-sm navbar-light bg-light">
            <ul className="navbar-nav m-2">
                <li className="nav-item"><Link id='home' className={(selectedPage === 'home' ? 'active ' : '') + 'nav-link'} to="/" onClick={navItemClickHandler}>Home</Link></li>
                <li className="nav-item"><Link id='teams' className={(selectedPage === 'teams' ? 'active ' : '') + 'nav-link'} to="/teams" onClick={navItemClickHandler}>Teams</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;