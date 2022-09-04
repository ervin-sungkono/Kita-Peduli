import React from 'react';

const NewsThumbnail = (props) => {
    return (
        <a href={props.link}>
            <div className="thumbnailNews" data-aos={'fade-left'} data-aos-delay={props.animationDelay} data-aos-once={true}> 
                <img className="thumbnailNewsImage" src={props.imageSrc} alt={props.imageAlt} />
                <div className="headline">
                    <p className="thumbnailHeadline">{props.headline}</p>
                    <p className="thumbnailDate caption">{props.date}</p>
                </div>
            </div>
        </a>
    )
}

export default NewsThumbnail;