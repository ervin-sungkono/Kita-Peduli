import React from 'react';


const DonateHero = () => {
    // const data = {
    //     "donasi": 18022,
    //     "total": 100324500,
    // };

  return (
    <div className='donate-hero-container'>
      <div className="donate-hero-card">
        <div className="donate-hero-content">
          <h3 className='donate-title'>Kehabisan APD, Tim Medis Corona pakai Jas Hujan</h3>
          <div className="donate-hero-text">
            <p>Nama Penggalang dana</p>
            <hr />
            <p>18022 Donasi</p>
            <hr />
            <p>Rp. 100.324.500 terkumpul</p>
          </div>
        </div>
        <a href="#donate" className="primary-btn donate-btn">Bantu Donasi</a>
      </div>
    </div>
  )
}

export default DonateHero;