import React from 'react';

const Banner = () => {
    return(
        <section id='banner-section'>
            <div className="container">
                <div className="header">
                    <h2>Jangan lewati informasi dari kami!</h2>
                    <p>Subscribe untuk mendapatkan update terbaru tentang COVID-19 dan 
                    informasi mengenai donasi serta bantuan.</p>
                </div>
                <form id="subscribe-form">
                    <input type="email" name="email-field" id="email-field"/>
                    <button type="submit">
                        Send
                    </button>
                </form>
            </div>
        </section>
    )
}

export default Banner;