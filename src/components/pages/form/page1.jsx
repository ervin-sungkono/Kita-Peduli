import React from 'react';

const page1 = () => {
  return (
    <div className="form-container">
        <div className="form-content">
            <h4>Pilih Jenis Donasi</h4>
            <div className="radio-first">
                <input className="radio-option" type="radio" name="donationType" id="donasiBulanan"/>
                <label className="radio-label" htmlFor="donasiBulanan">Donasi Bulanan</label>

                <div className="vl"></div>
                
                <input className="radio-option" type="radio" name="donationType" id="donasiSatuKali" />
                <label className="radio-label" htmlFor="donasiSatuKali">Donasi Satu Kali</label>
            </div>
        </div>
        <div className="form-content">
            <h4>Pilih Jumlah Donasi</h4>
            <div className="donation-amount">
                <div className="amount-option">
                    <input className="radio-option" type="radio" name="donation-amount" id="10k" />
                    <label className="radio-label" htmlFor="10k">Rp 10.000</label>
                </div>
                <div className="amount-option">
                    <input className="radio-option" type="radio" name="donation-amount" id="25k" />
                    <label className="radio-label" htmlFor="25k">Rp 25.000</label>
                </div>
                <div className="amount-option">
                    <input className="radio-option" type="radio" name="donation-amount" id="40k" />
                    <label className="radio-label" htmlFor="40k">Rp 40.000</label>
                </div>
                <div className="amount-option">
                    <input className="radio-option" type="radio" name="donation-amount" id="75k" />
                    <label className="radio-label" htmlFor="75k">Rp 75.000</label>
                </div>
                <div className="amount-option">
                    <input className="radio-option" type="radio" name="donation-amount" id="120k" />
                    <label className="radio-label" htmlFor="120k">Rp 120.000</label>
                </div>
            </div>
        </div>
    </div>
  )
}

export default page1;