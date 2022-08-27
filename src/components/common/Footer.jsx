import React from 'react';

import LogoWhite from '../../assets/images/logo-white.png';

const Footer = () => {
    return(
        <section id='footer-section'>
            <div className="container">
                <div className="footer-content">
                    <div id="footer-logo">
                        <img src={LogoWhite} alt="Logo Kita Peduli"/>
                    </div>
                    <div className="footer-content">
                        <div className="social-media-links">
                            <div className="social-media">
                                <a href=""></a>
                            </div>
                            <div className="social-media">
                                <a href=""></a>
                            </div>
                            <div className="social-media">
                                <a href=""></a>
                            </div>
                        </div>
                        <hr />
                        <div id="sitemap">
                            <a className="sitemap-link">Beranda</a>
                            <a className="sitemap-link">Tentang Kami</a>
                            <a className="sitemap-link">Berita</a>
                            <a className="sitemap-link">Donasi</a>
                            <a className="sitemap-link">Kebijakan Pribadi</a>
                            <a className="sitemap-link">Syarat dan Ketentuan</a>
                        </div>
                    </div>
                </div>
                
            </div>
        </section>
    )
}

export default Footer;