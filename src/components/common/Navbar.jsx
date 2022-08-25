import React from 'react';

import { NavLink } from 'react-router-dom';
import navLogo from '../../assets/images/logo-navbar.png';

const Navbar = () => {
    return(
        <nav id="navbar">
            <div className="container">
                <div className="nav-logo">
                    <img src={navLogo} alt="Logo Kita Peduli" />
                </div>
                <div className="nav-menu">
                    <div className="nav-link">
                        <NavLink exact to="/">Beranda</NavLink>
                        <NavLink exact to="/about">Tentang Kami</NavLink>
                        <NavLink exact to="/news">Berita</NavLink>
                        <NavLink exact to="/donate">Donasi</NavLink>
                    </div>
                    <a href="#contact" className="secondary-btn contact-btn">
                        Kontak
                    </a>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;