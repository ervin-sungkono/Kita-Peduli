import React, { useEffect, useRef } from 'react';

import Glide from '@glidejs/glide';

import NewsThumbnail from './NewsHeroThumbnail';
import Icon from '../../common/Icon';

import Images from '../../../assets/images/slide-img/images';
import NewsThumbnailImage from '../../../assets/images/mission-image.png';

const glideConfig = {
    type: "carousel",
    perView: 1,
    startAt: 0,
    threshold: 50,
    autoplay: 5000,
    gap: 0,
    focusAt: "center",
};

const NewsHero = () => {
    const newsCarouselData =[
        {
            imageSrc: Images.Image3,
            imageAlt: "Gambar Artikel",
            title: "Arahan Pemerintah Terkait Penanganan COVID-19",
            date: "18 Aug 2022"
        },
        {
            imageSrc: Images.Image2,
            imageAlt: "Gambar Artikel",
            title: "Ajakan untuk Menggunakan Masker Setiap Saat",
            date: "18 Aug 2022"
        },
        {
            imageSrc: Images.Image1,
            imageAlt: "Gambar Artikel",
            title: "Kemendikbud: Bersama Kita Lawan Corona!",
            date: "18 Aug 2022"
        }
    ];
    const newsThumbnailData = [
        {
            imageSrc: NewsThumbnailImage,
            imageAlt: "News-image",
            headline: "Pemerintah Salurkan Bantuan Sosial Bagi Masyarakat yang Terdampak COVID-19",
            date: "18 Aug 2022",
            link: "#news"
        },
        {
            imageSrc: NewsThumbnailImage,
            imageAlt: "News-image",
            headline: "Akibat Pandemi, 304 Karyawan Perusahaan Kena PHK Massal",
            date: "18 Aug 2022",
            link: "#news"
        },
        {
            imageSrc:NewsThumbnailImage,
            imageAlt: "News-image",
            headline: "Tenaga Kesehatan Kehabisan APD, Terpaksa Pakai Jas Hujan!",
            date: "18 Aug 2022",
            link: "#news"
        },
        {
            imageSrc: NewsThumbnailImage,
            imageAlt: "News-image",
            headline: "Kaum Milenial Bersatu adakan Donasi Bagi Warga yang Membutuhkan",
            date: "18 Aug 2022",
            link: "#news"
        },
        {
            imageSrc: NewsThumbnailImage,
            imageAlt: "News-image",
            headline: "Peneliti di Jerman Menemukan Varian baru COVID-19, namanya BA 6",
            date: "18 Aug 2022",
            link: "#news"
        }
    ];

    const ref = useRef();
    useEffect(() => {
        const carousel = new Glide(ref.current, glideConfig);
        carousel.mount();
    },[ref]);
    return (
        <div className="NewsHeroSection">
            <div className="container">
                <div className="NewsCarousel">
                    <div ref={ref} className="glide">
                        <div className="glide__track" data-glide-el="track">
                            <ul className="glide__slides">
                                {newsCarouselData.map((news) => {
                                    return(
                                        <li className="glide__slide">
                                            <img src={news.imageSrc} alt={news.imageAlt} />
                                            <div className="text-wrapper">
                                                <h3>{news.title}</h3>
                                                <p>{news.date}</p>
                                            </div>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                        <div className="glide__bullets" data-glide-el="controls[nav]">
                            {newsCarouselData.map((_,index) => {
                                return(
                                    <button className="glide__bullet" data-glide-dir={`=${index}`}></button>
                                )
                            })}
                        </div> 
                    </div>
                </div>
                <div className="NewsRightSide">
                    <h3 className="NewsSubHeading">Update COVID-19 Terbaru</h3>
                    <div className="NewsThumbnails">
                        {newsThumbnailData.map((news, index) => {
                            return(
                                <NewsThumbnail
                                    imageSrc={news.imageSrc}
                                    imageAlt={news.imageAlt}
                                    headline={news.headline}
                                    date={news.date}
                                    link={news.link}
                                    animationDelay={index * 200}
                                />
                            )
                        })}
                    </div>
                    <a href="#news" className='tertiary-btn NewsButtonViewMore' data-aos={'fade-left'} data-aos-delay={1000} data-aos-once={true}>
                        <p className="NewsButtonViewMoreText">Lihat Selengkapnya</p>
                        <Icon icon='arrow-next'/>
                    </a>
                </div> 
            </div>
        </div>
    )
}

export default NewsHero;