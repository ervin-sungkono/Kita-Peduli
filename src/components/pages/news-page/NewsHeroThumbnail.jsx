import React from 'react';

const NewsThumbnail = (props) => {
    return (
        <a href={props.link}>
            <div className="thumbnailNews">
                <img className="thumbnailNewsImage" src={props.imageSrc} alt={props.imageAlt} />
                <h4 className="thumbnailHeadline">{props.headline}</h4>
            </div>
        </a>
    )
}

export default NewsThumbnail;