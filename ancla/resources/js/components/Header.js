import React, {useState} from 'react';
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const closeMobileMenu = () => setClick(false)

    const stileMobileMenu = {
        display: "block", 
        position: "absolute",
        top: "50px",
        backgroundColor: "black"
    }

    const stileMobileMenuItem = {
        display: "block", 
        width: "100%"
    }

    return (
        <section className="header">
            <header className="navbar">
                <div className="navbar-brand">
                    <Link to="/" onClick={closeMobileMenu}>ANNACLAUDIA CALABRESE</Link>
                </div>
                <nav className="navbar-menu" id="topnav">
                    <a className="menu-icon" onClick={handleClick}>
                        <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
                    </a>
                    <ul className="nav-menu" style={(click) ? stileMobileMenu : {}}>
                        <li className="nav-item" style={(click) ? stileMobileMenuItem : {}} onClick={closeMobileMenu}>
                            <Link to="/bio">Bio</Link>
                        </li>
                        <li className="nav-item" style={(click) ? stileMobileMenuItem : {}} onClick={closeMobileMenu}>
                            <Link to="/lezioni">Lezioni</Link>
                        </li>
                        <li className="nav-item" style={(click) ? stileMobileMenuItem : {}} onClick={closeMobileMenu}>
                            <Link to="/collabs">Servizi</Link>
                        </li>
                        <li className="nav-item" style={(click) ? stileMobileMenuItem : {}} onClick={closeMobileMenu}>
                            <Link to="/media">Media</Link>
                        </li>
                        <li className="nav-item" style={(click) ? stileMobileMenuItem : {}} onClick={closeMobileMenu}>
                            <Link to="/books">Pubblicazioni</Link>
                        </li>                            
                    </ul>
                </nav>
                <div className="navbar-contact">
                    <Link to="/contact">Contatta</Link>
                </div>
            </header>
        </section>
    );  
}

export default Header;
