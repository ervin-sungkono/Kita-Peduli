import React, { useEffect } from 'react';


const DonateHero = ({showForm}) => {
  useEffect(() => {
    let card = document.getElementById("donate-hero-card")
      window.addEventListener('scroll', function() {
        var value = window.scrollY;
        let itemTranslate = value/2;
        card.style.transform = `translate(-50%,calc(-50% + ${itemTranslate}px)`;
    })
  })
  return (
    <div className='donate-hero-container'>
      <div className="donate-hero-card" id="donate-hero-card">
        <div className="donate-hero-content">
          <h3 className='donate-title'>Kehabisan APD, Tim Medis Corona pakai Jas Hujan</h3>
          <div className="donate-hero-text">
            <p>FILANTRA Official</p>
            <hr />
            <p><b>18597</b> Donasi</p>
            <hr />
            <p>Rp 2.168.023.583 terkumpul</p>
          </div>
        </div>
        <a href="#donate" className="primary-btn donate-btn" onClick={showForm}>Bantu Donasi</a>
      </div>
    </div>
  )
}

export default DonateHero;