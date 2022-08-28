import React, { useEffect ,useState } from 'react';

import { NavLink } from 'react-router-dom';
import Logo from '../../assets/images/logo-navbar.png';

const Navbar = () => {
    const [show, setShow] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const controlNavbar = () => {
        if (typeof window !== 'undefined') { 
            if (window.scrollY > lastScrollY) {
                setShow(false); 
            } else {
                setShow(true);  
            }
            setLastScrollY(window.scrollY); 
        }
    };

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', controlNavbar);
        return () => {
            window.removeEventListener('scroll', controlNavbar);
        };
        }
    }, [lastScrollY]);

    return(
        <nav id="navbar" className={show ? `` : `scroll-down`}>
            <div className="container">
                <div className="nav-logo">
                    <a href="/"><img src={Logo} alt="Logo Kita Peduli"/></a>
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