import React, { useEffect } from 'react';


const DonateHero = ({showForm}) => {
  return (
    <div className='donate-hero-container'>
      <div className="donate-hero-card">
        <div className="donate-hero-content">
          <h3 className='donate-title'>Kehabisan APD, Tim Medis Corona pakai Jas Hujan</h3>
          <div className="donate-hero-text">
            <p>Nama Penggalang dana</p>
            <hr />
            <p><span className="donate-bold-text">18022</span> Donasi</p>
            <hr />
            <p><span className="donate-bold-text">Rp. 100.324.500</span> terkumpul</p>
          </div>
        </div>
        <a href="#donate" className="primary-btn donate-btn" onClick={showForm}>Bantu Donasi</a>
      </div>
    </div>
  )
}

export default DonateHero;