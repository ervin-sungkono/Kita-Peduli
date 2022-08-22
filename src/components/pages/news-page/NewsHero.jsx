import React from 'react';

import NewsThumbnail from './NewsHeroThumbnail';

import NewsThumbnailImage from '../../../assets/images/newsThumbnail.png';
import ArrowNext from '../../../assets/images/arrow-right.svg';

const NewsHero = () => {
    return (
        <div className="NewsHeroSection">
            <div className="NewsCarousel">
                {/* Carousel kiri */}
            </div>
            <div className="NewsRightSide">
                <h3 className="NewsSubHeading">Update COVID-19 Terbaru</h3>
                <div className="NewsThumbnails">
                    <NewsThumbnail
                        imageSrc={NewsThumbnailImage}
                        imageAlt="News-image"
                        headline="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                        link="/"
                    />
                    <NewsThumbnail
                        imageSrc={NewsThumbnailImage}
                        imageAlt="News-image"
                        headline="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                        link="/"
                    />
                    <NewsThumbnail
                        imageSrc={NewsThumbnailImage}
                        imageAlt="News-image"
                        headline="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                        link="/"
                    />
                    <NewsThumbnail
                        imageSrc={NewsThumbnailImage}
                        imageAlt="News-image"
                        headline="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                        link="/"
                    />
                    <NewsThumbnail
                        imageSrc={NewsThumbnailImage}
                        imageAlt="News-image"
                        headline="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                        link="/"
                    />
                </div>
                <a href="/">
                    <div className="NewsButtonViewMore">
                        <span className="NewsButtonViewMoreText">Lihat Selengkapnya</span>
                        <img className="NewsButtonViewMoreIcon" src={ArrowNext} alt="Arrow-icon" />
                    </div>
                </a>
            </div> 
        </div>
    )
}

export default NewsHero;