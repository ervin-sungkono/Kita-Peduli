import React, { useEffect } from 'react';

import Icon from './Icon';

const Banner = () => {
    const onClickButton = () => {
        const email = document.getElementById('email-field').value;
        const subscribeBtn = document.getElementById('subscribe-btn');
        if(email.length > 0 && email.includes('@') && email.endsWith('.com')){
            subscribeBtn.classList.add('clicked');
            setTimeout(() => subscribeBtn.classList.remove('clicked'),3000);
        }else{
            subscribeBtn.classList.add('fail');
            setTimeout(() => subscribeBtn.classList.remove('fail'),3000);
        }
    }
    useEffect(() => {
        const subscribeBtn = document.getElementById('subscribe-btn');
        subscribeBtn.addEventListener('click', onClickButton);
    },[])
    return(
        <section id='banner-section'>
            <div className="container" data-aos={'zoom-in-up'}>
                <div className="header">
                    <h2>Jangan lewati informasi dari kami!</h2>
                    <p>Subscribe untuk mendapatkan update terbaru tentang COVID-19 dan 
                    informasi mengenai donasi serta bantuan.</p>
                </div>
                <form id="subscribe-form">
                    <div className="input-field">
                        <Icon icon='mail'></Icon>
                        <input type="email" name="email-field" id="email-field" placeholder='Masukkan Email Anda..'/>
                    </div>
                    <button type="button" id='subscribe-btn'>
                        <Icon icon='send'></Icon>
                        <Icon icon='check'></Icon>
                    </button>
                </form>
            </div>
        </section>
    )
}

export default Banner;