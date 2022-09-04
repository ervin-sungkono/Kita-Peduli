import React, { useEffect, useRef } from 'react';

import Glide from '@glidejs/glide';

import NewsThumbnail from './NewsHeroThumbnail';
import NewsThumbnailImage from '../../../assets/images/newArticleSampleImage.jpg';
import Icon from '../../common/Icon';

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
                                <li className="glide__slide">
                                    <img src={NewsThumbnailImage} alt="" />
                                </li>
                                <li className="glide__slide">
                                    <img src={NewsThumbnailImage} alt="" />
                                </li>
                                <li className="glide__slide">
                                    <img src={NewsThumbnailImage} alt="" />
                                </li>
                            </ul>
                        </div>
                        <div className="glide__bullets" data-glide-el="controls[nav]">
                            <button className="glide__bullet" data-glide-dir="=0"></button>
                            <button className="glide__bullet" data-glide-dir="=1"></button>
                            <button className="glide__bullet" data-glide-dir="=2"></button>
                        </div> 
                    </div>
                </div>
                <div className="NewsRightSide">
                    <h3 className="NewsSubHeading">Update COVID-19 Terbaru</h3>
                    <div className="NewsThumbnails">
                        <NewsThumbnail
                            imageSrc={NewsThumbnailImage}
                            imageAlt="News-image"
                            headline="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                            date="18 Aug 2022"
                            link="/"
                            animationDelay={0}
                        />
                        <NewsThumbnail
                            imageSrc={NewsThumbnailImage}
                            imageAlt="News-image"
                            headline="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                            date="18 Aug 2022"
                            link="/"
                            animationDelay={300}
                        />
                        <NewsThumbnail
                            imageSrc={NewsThumbnailImage}
                            imageAlt="News-image"
                            headline="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                            date="18 Aug 2022"
                            link="/"
                            animationDelay={600}
                        />
                        <NewsThumbnail
                            imageSrc={NewsThumbnailImage}
                            imageAlt="News-image"
                            headline="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                            date="18 Aug 2022"
                            link="/"
                            animationDelay={900}
                        />
                        <NewsThumbnail
                            imageSrc={NewsThumbnailImage}
                            imageAlt="News-image"
                            headline="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                            date="18 Aug 2022"
                            link="/"
                            animationDelay={1200}
                        />
                    </div>
                    <a href="/" className='tertiary-btn NewsButtonViewMore'>
                        <p className="NewsButtonViewMoreText">Lihat Selengkapnya</p>
                        <Icon icon='arrow-next'/>
                    </a>
                </div> 
            </div>
        </div>
    )
}

export default NewsHero;