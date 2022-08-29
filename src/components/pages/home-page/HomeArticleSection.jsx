import React from "react";

import ArticleImage1 from '../../../assets/images/article-image-1.png';
import HomeArticle from "./HomeArticle";

const HomeArticleSection = () => {
    return(
        <section id="article-section">
            <div className="container">
                <div className="header">
                    <h2>Artikel Terbaru Kami</h2>
                </div>
                <div className="content">
                    <HomeArticle
                        reverse={false}
                        imageSrc={ArticleImage1}
                        imageAlt='Kesulitan Ekonomi Masyarakat ditengah Pandemi'
                        articleHeader='Kesulitan Ekonomi Masyarakat di Tengah Pandemi COVID-19'
                        articleText={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor, donec nibh commodo posuere purus nibh sollicitudin condimentum. Porta morbi amet porta leo, morbi tristique in. Aliquam sollicitudin pulvinar consectetur massa odio quis.\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor, donec nibh commodo posuere purus nibh sollicitudin condimentum. Porta morbi amet porta leo, morbi tristique in. Aliquam'}
                    />
                    <HomeArticle
                        reverse={true}
                        imageSrc={ArticleImage1}
                        imageAlt='Kesulitan Ekonomi Masyarakat ditengah Pandemi'
                        articleHeader='Kesulitan Ekonomi Masyarakat di Tengah Pandemi COVID-19'
                        articleText={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor, donec nibh commodo posuere purus nibh sollicitudin condimentum. Porta morbi amet porta leo, morbi tristique in. Aliquam sollicitudin pulvinar consectetur massa odio quis.\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor, donec nibh commodo posuere purus nibh sollicitudin condimentum. Porta morbi amet porta leo, morbi tristique in. Aliquam'}
                    />
                </div>
            </div>
        </section>
    )
}

export default HomeArticleSection;