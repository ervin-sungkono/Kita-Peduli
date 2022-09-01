import React, { useEffect } from 'react';

import Icon from './Icon';

const Banner = () => {
    let emailField, messageBox, subscribeBtn;
    const onClickButton = () => {
        const email = emailField.value;
        if(email.length > 0 && email.includes('@') && email.endsWith('.com')){
            subscribeBtn.classList.add('clicked');
            messageBox.innerHTML = 'Email anda berhasil kami simpan!';
            messageBox.classList.add('show');
        }else{
            subscribeBtn.classList.add('fail');
            messageBox.innerHTML = 'Email anda tidak valid, mohon dicek kembali';
            messageBox.classList.add('show','error');
        }
        setTimeout(() => {
            subscribeBtn.classList.remove('clicked','fail');
            messageBox.classList.remove('show', 'error');
        },3000);
    }
    useEffect(() => {
        emailField = document.getElementById('email-field');
        messageBox = document.getElementById('message-box');
        subscribeBtn = document.getElementById('subscribe-btn');
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
                <div className="form-wrapper">
                    <div id="message-box" className='caption'></div>
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
            </div>
        </section>
    )
}

export default Banner;