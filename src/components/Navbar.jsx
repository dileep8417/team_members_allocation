import {Link, useLocation} from 'react-router-dom';
const Navbar = () => {

    const pathName = useLocation().pathname;

    return (
        <nav className="navbar navbar-expand-sm navbar-light bg-light">
            <ul className="navbar-nav m-2">
                <li className="nav-item"><Link className={(pathName === '/' ? 'active ' : '') + 'nav-link'} to="/">Home</Link></li>
                <li className="nav-item"><Link className={(pathName === '/teams' ? 'active ' : '') + 'nav-link'} to="/teams">Teams</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;