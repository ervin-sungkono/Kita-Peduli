import React from "react";

import Images from '../../../assets/images/card-images/images.js';
import DonationCard from "../home-page/DonationCard";

const DonateOther = () => {
    return(
        <section id="donate-section">
            <div className="container">
                <div className="header">
                    <h3>Penggalangan Dana untuk Melawan COVID-19</h3>
                    <p>Jadilah agen perubahan untuk <b>#IndonesiaPulihKembali</b></p>
                </div>
                <div className="content">
                        <DonationCard
                            imageSrc={Images.Image1}
                            imageAlt={'Gambar Donasi'}
                            title={'Kehabisan APD, Tim Medis Corona pakai Jas Hujan'}
                            name={'FILANTRA Official'}
                            totalDonate={18597}
                            donatedAmount={2168023583}
                        />
                        <DonationCard
                            imageSrc={Images.Image2}
                            imageAlt={'Gambar Donasi'}
                            title={'Lawan Corona: Sembako Untuk Pekerja Harian'}
                            name={'INSANI'}
                            totalDonate={37976}
                            donatedAmount={1311779692}
                        />
                        <DonationCard
                            imageSrc={Images.Image3}
                            imageAlt={'Gambar Donasi'}
                            title={'Milenial Bersatu Bantu Tenaga Medis COVID-19'}
                            name={'Syafi Djohan'}
                            totalDonate={494}
                            donatedAmount={100600025}
                        />
                </div>
            </div>
        </section>
    )
}

export default DonateOther;