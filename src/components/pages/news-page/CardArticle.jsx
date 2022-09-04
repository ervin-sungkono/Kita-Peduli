import React from 'react';

const CardArticle = (props) => {
    return (
        <a href={props.link}>
            <div className="cardArticle" data-aos={'fade-up'}>
                <img className="articleImage" src={props.imageSrc} alt={props.imageAlt} />
                <div className="newsContent">
                    <p className="dateOfNews caption">{props.date}</p>
                    <div className='newsDetail'>
                        <p className="title">{props.title}</p>
                        <p className="newsPreview">{props.textPreview}</p>
                    </div>
                </div>
            </div>
        </a>
    )
}

export default CardArticle;