import {Link, NavLink} from 'react-router-dom';
import CardWidget from '../CarWidget/CardWidget';
import './NavBar.css';
import Logo from '../Logo/Logo';
import { useState } from 'react';

function NavBar() {

    const [isActive, setIsActive] = useState(false);

    const closeMenu = () => {
        setIsActive(false);
    };

    return (
        <header>
            <Link to="/">
                <Logo />
            </Link>
            <div className='navbarD'>
                <nav>
                    <div className={`navLinks ${isActive && "active"}`}>
                    <NavLink to="/categoria/consoles" onClick={closeMenu}>Consolas</NavLink>
                    <NavLink to="/categoria/games" onClick={closeMenu}>Juegos</NavLink>
                    <NavLink to="/categoria/accesories" onClick={closeMenu}>Accesorios</NavLink>
                    </div>
                    <div className={`navToggle ${isActive && "active"}`} onClick={ () => setIsActive (!isActive)}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </nav>
                <CardWidget />
            </div>
        </header>

);
}

export default NavBar;