import {Link, NavLink} from 'react-router-dom';
import CardWidget from '../CarWidget/CardWidget';
import './NavBar.css';
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
                <CardWidget />
            </nav>
        </header>

);
}

export default NavBar;