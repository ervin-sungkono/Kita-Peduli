import React from 'react';

const page3 = () => {
  return (
    <div className="form-container">
        <div className="form-content">
            <h4>Nama Lengkap</h4>
            <input type="text" placeholder="Masukkan nama lengkap anda..." id="namaLengkap" required />
        </div>
        <div className="form-content">
            <h4>Email</h4>
            <input type="text" placeholder="Masukkan email anda..." id="email" required />
        </div>
        <div className="form-content">
            <h4>Nomor Telepon</h4>
            <input type="tel" placeholder="Masukkan nomor telepon anda..." name="phone" id="phone" required />
        </div>
    </div>
  )
}

export default page3;