import React from 'react';

import BCA from "../../../assets/images/icon-payment/BCA.png";
import GoPay from "../../../assets/images/icon-payment/GoPay.png";
import OVO from "../../../assets/images/icon-payment/OVO.png";
import Paypal from "../../../assets/images/icon-payment/Paypal.png";
import VISA from "../../../assets/images/icon-payment/VISA.png";

const page2 = () => {
  return (
    <div className="form-container">
        <div className="form-content">
            <h4>Pilih Metode Pembayaran</h4>
            <div className="button-donation-method">
                <div className="method-option">
                    <input className="pay-method" type="radio" name="donation-method" id="BCA" />
                    <label className="radio-label" htmlFor="BCA">
                        <img src={BCA} alt="BCA.png" />
                    </label>
                </div>
                <div className="method-option">
                    <input className="pay-method" type="radio" name="donation-method" id="GoPay" />
                    <label className="radio-label" htmlFor="GoPay">
                        <img src={GoPay} alt="GoPay.png" />
                    </label>
                </div>
                <div className="method-option">
                    <input className="pay-method" type="radio" name="donation-method" id="OVO" />
                    <label className="radio-label" htmlFor="OVO">
                        <img src={OVO} alt="OVO.png" />
                    </label>
                </div>
                <div className="method-option">
                    <input className="pay-method" type="radio" name="donation-method" id="Paypal" />
                    <label className="radio-label" htmlFor="Paypal">
                        <img src={Paypal} alt="Paypal.png" />
                    </label>
                </div>
                <div className="method-option">
                    <input className="pay-method" type="radio" name="donation-method" id="VISA" />
                    <label className="radio-label" htmlFor="VISA">
                        <img src={VISA} alt="VISA.png" />
                    </label>
                </div>
            </div>
        </div>
        <div className="form-card-content">
            <div className="content-card card-num">
                <h4>Nomor Kartu</h4>
                <input type="text" placeholder="Masukkan nomor kartu anda..." id="card-num" />
            </div>
            <div className="content-card card-cvv">
                <h4>CVV</h4>
                <input type="text" placeholder="Masukkan CVV..." id="card-cvv" required />
            </div>
        </div>
    </div>
  )
}

export default page2;