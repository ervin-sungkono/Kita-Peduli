import React from 'react';

const CardArticle = (props) => {
    return (
        <a href={props.link}>
            <div className="cardArticle">
                <img className="articleImage" src={props.imageSrc} alt={props.imageAlt} />
                <p className="dateOfNews">{props.date}</p>
                <div className='newsDetail'>
                    <h2 className="newsHeading">{props.title}</h2>
                    <p className="newsPreview">{props.textPreview}</p>
                </div>
            </div>
        </a>
    )
}

export default CardArticle;