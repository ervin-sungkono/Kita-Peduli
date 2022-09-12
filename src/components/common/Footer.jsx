import React from 'react';

import LogoWhite from '../../assets/images/logo-white.png';
import Icon from './Icon';

const Footer = () => {
    return(
        <section id='footer-section'>
            <div className="container">
                <div className="footer-wrapper">
                    <div id="footer-logo">
                        <img src={LogoWhite} alt="Logo Kita Peduli"/>
                    </div>
                    <div className="footer-content">
                        <div className="social-media">
                            <a href="##instagram">
                                <Icon icon='instagram'></Icon>
                            </a>
                            <a href="##facebook">
                                <Icon icon='facebook'></Icon>
                            </a>
                            <a href="##twitter">
                                <Icon icon='twitter'></Icon>
                            </a>
                        </div>
                        <hr />
                        <div id="sitemap">
                            <a className="sitemap-link" href='#'>Beranda</a>
                            <a className="sitemap-link" href='#about'>Tentang Kami</a>
                            <a className="sitemap-link" href='#news'>Berita</a>
                            <a className="sitemap-link" href='#donate'>Donasi</a>
                            <a className="sitemap-link" href='##kebijakan'>Kebijakan Pribadi</a>
                            <a className="sitemap-link" href='##syarat'>Syarat dan Ketentuan</a>
                        </div>
                    </div>
                </div>
                <div className="copyright">
                    <span className='caption'>Copyright 2022 KitaPeduli, All Rights Reserved</span>
                </div>
            </div>
        </section>
    )
}

export default Footer;