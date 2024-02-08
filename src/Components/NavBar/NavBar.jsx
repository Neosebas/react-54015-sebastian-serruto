import {Link, NavLink} from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CardWidget from '../CarWidget/CardWidget';
import Logo from '../Logo/Logo';

function NavBar() {
    return (
        <header>
            <Link to="/">
                <Logo />
            </Link>
            <nav>
                <NavLink to="/categoria/consoles">Consolas</NavLink>
                <NavLink to="/categoria/games">Juegos</NavLink>
                <NavLink to="/categoria/accesories">Accesorios</NavLink>
            </nav>
        </header>

);
}

export default NavBar;