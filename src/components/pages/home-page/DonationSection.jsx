import React from "react";

import Images from '../../../assets/images/card-image/images.js';
import DonationCard from "./DonationCard";

const DonationSection = () => {
    return(
        <section id="donate-section">
            <div className="container">
                <div className="header">
                    <h2>Mari Melakukan Donasi</h2>
                    <p>Silakan berdonasi dan bantu kami melawan COVID-19</p>
                </div>
                <div className="content">
                    <DonationCard
                        imageSrc={Images.Image1}
                        imageAlt={'Gambar Tim Medis Corona pakai Jas Hujan'}
                        title={'Kehabisan APD, Tim Medis Corona pakai Jas Hujan'}
                        name={'John Doe'}
                        totalDonate={18002}
                        donatedAmount={100324500}
                    />
                    <DonationCard
                        imageSrc={Images.Image1}
                        imageAlt={'Gambar Tim Medis Corona pakai Jas Hujan'}
                        title={'Kehabisan APD, Tim Medis Corona pakai Jas Hujan'}
                        name={'John Doe'}
                        totalDonate={18002}
                        donatedAmount={100324500}
                    />
                    <DonationCard
                        imageSrc={Images.Image1}
                        imageAlt={'Gambar Tim Medis Corona pakai Jas Hujan'}
                        title={'Kehabisan APD, Tim Medis Corona pakai Jas Hujan'}
                        name={'John Doe'}
                        totalDonate={18002}
                        donatedAmount={100324500}
                    />
                </div>
            </div>
        </section>
    )
}

export default DonationSection;