import React, { useEffect, useRef } from 'react';

import Glide from '@glidejs/glide';

import ArrowButton from './ArrowButton';
import Images from '../../../assets/images/slide-img/images';

const glideConfig = {
    type: "carousel",
    perView: 1,
    startAt: 0,
    threshold: 50,
    autoplay: 5000,
    focusAt: "center",
    gap: 32,
};

const Hero = () => {
    const ref = useRef();

    useEffect(() => {
        const carousel = new Glide(ref.current, glideConfig);
        carousel.mount();
    },[ref]);

    return (
        <section id="hero-section">
            <div className="container">
                <div className="header">
                    <h1>Bersama Kita Cegah<br/>Penyebaran COVID-19</h1>
                    <p>Jadilah agen perubahan untuk <b>#IndonesiaPulihKembali</b></p>
                </div>
                <div className="glide-wrapper">
                    <div ref={ref} className="glide">
                        <div className="glide__arrows" data-glide-el="controls">
                            <button className="glide__arrow glide__arrow--left" data-glide-dir="<">
                                <ArrowButton/>
                            </button>
                        </div>
                        <div className="glide__track" data-glide-el="track">
                            <ul className="glide__slides">
                                <li className="glide__slide">
                                    <img src={Images.Image1} alt="" />
                                </li>
                                <li className="glide__slide">
                                    <img src={Images.Image2} alt="" />
                                </li>
                                <li className="glide__slide">
                                    <img src={Images.Image3} alt="" />
                                </li>
                            </ul>
                        </div>
                        <div className="glide__arrows" data-glide-el="controls">
                            <button className="glide__arrow glide__arrow--right" data-glide-dir=">">
                                <ArrowButton/>
                            </button>
                        </div>
                        <div className="glide__bullets" data-glide-el="controls[nav]">
                            <button className="glide__bullet" data-glide-dir="=0"></button>
                            <button className="glide__bullet" data-glide-dir="=1"></button>
                            <button className="glide__bullet" data-glide-dir="=2"></button>
                        </div> 
                    </div> 
                </div>
                
            </div>   
        </section>
    )
}

export default Hero;