import React from "react";

const HomeArticle = (props) => {
    return(
        <div className={"home-article " + (props.reverse ? "reverse" : "")} data-aos={props.reverse ? 'fade-left' : 'fade-right'}>
            <div className="article-image">
                <img src={props.imageSrc} alt={props.imageAlt}/>
            </div>
            <div className="article-content">
                <div className="article-header">
                    <h3>{props.articleHeader}</h3>
                    <div>{props.articleText.split('\n').map(str => <p>{str}</p>)}</div>
                </div>
                <div className="button-wrapper">
                    <a href="#donate" className="primary-btn donate-btn">Bantu Donasi</a>
                    <a href="/news" className="secondary-btn article-btn">Baca Lebih Lanjut</a>
                </div>
            </div>
        </div>
    )
}

export default HomeArticle;