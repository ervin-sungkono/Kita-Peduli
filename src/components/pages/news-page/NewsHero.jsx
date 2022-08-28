import React from 'react';

import NewsThumbnail from './NewsHeroThumbnail';

import NewsThumbnailImage from '../../../assets/images/newArticleSampleImage.jpg';
import Icon from '../../common/Icon';

const NewsHero = () => {
    return (
        <div className="NewsHeroSection">
            <div className="container">
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
                            <p className="NewsButtonViewMoreText">Lihat Selengkapnya</p>
                            <Icon icon='arrow-next'/>
                        </div>
                    </a>
                </div> 
            </div>
        </div>
    )
}

export default NewsHero;