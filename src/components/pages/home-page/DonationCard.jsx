import React from "react";

const DonationCard = (props) => {
    return(
        <div className="donate-card" data-aos={'fade-up'}>
            <div className="card-image">
                <img src={props.imageSrc} alt={props.imageAlt}/>
            </div>
            <div className="card-header">
                <p className="title">{props.title}</p>
                <p>{props.name}</p>
            </div>
            <div className="card-bottom">
                <div className="card-detail">
                    <p><b>{props.totalDonate}</b> Donasi</p>
                    <p>Rp. {props.donatedAmount.toLocaleString('id')}</p>
                </div>
                <a href="#donate" className="primary-btn donate-btn">Donasi Sekarang</a>
            </div>
        </div>
    )
}

export default DonationCard;