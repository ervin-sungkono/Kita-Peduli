import React from "react";

import CardArticle from "./CardArticle";

import SampleImage from "../../../assets/images/newArticleSampleImage.jpg";

const NewArticle = () => {
    const articleData = [
        {
            imageSrc: SampleImage,
            imageAlt: "Gambar Artikel",
            date: "18 Aug 2022",
            title: "Kehabisan APD, Tim Medis Corona pakai Jas Hujan",
            textPreview: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc scelerisque quam ut pellentesque nam egestas nunc, euismod diam. Mauris eros et sit aliquam ipsum urna egestas odio mollis.",
            link: "#news"
        },
        {
            imageSrc: SampleImage,
            imageAlt: "Gambar Artikel",
            date: "18 Aug 2022",
            title: "Kehabisan APD, Tim Medis Corona pakai Jas Hujan",
            textPreview: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc scelerisque quam ut pellentesque nam egestas nunc, euismod diam. Mauris eros et sit aliquam ipsum urna egestas odio mollis.",
            link: "#news"
        },
        {
            imageSrc: SampleImage,
            imageAlt: "Gambar Artikel",
            date: "18 Aug 2022",
            title: "Kehabisan APD, Tim Medis Corona pakai Jas Hujan",
            textPreview: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc scelerisque quam ut pellentesque nam egestas nunc, euismod diam. Mauris eros et sit aliquam ipsum urna egestas odio mollis.",
            link: "#news"
        },
        {
            imageSrc: SampleImage,
            imageAlt: "Gambar Artikel",
            date: "18 Aug 2022",
            title: "Kehabisan APD, Tim Medis Corona pakai Jas Hujan",
            textPreview: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc scelerisque quam ut pellentesque nam egestas nunc, euismod diam. Mauris eros et sit aliquam ipsum urna egestas odio mollis.",
            link: "#news"
        },
        {
            imageSrc: SampleImage,
            imageAlt: "Gambar Artikel",
            date: "18 Aug 2022",
            title: "Kehabisan APD, Tim Medis Corona pakai Jas Hujan",
            textPreview: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc scelerisque quam ut pellentesque nam egestas nunc, euismod diam. Mauris eros et sit aliquam ipsum urna egestas odio mollis.",
            link: "#news"
        },
        {
            imageSrc: SampleImage,
            imageAlt: "Gambar Artikel",
            date: "18 Aug 2022",
            title: "Kehabisan APD, Tim Medis Corona pakai Jas Hujan",
            textPreview: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc scelerisque quam ut pellentesque nam egestas nunc, euismod diam. Mauris eros et sit aliquam ipsum urna egestas odio mollis.",
            link: "#news"
        },
    ];
    
    return (
        <div className="newArticle">
            <div className="container">
                <hr className="newsArticleSeparator"/>
                <div className="newArticleHeading">Artikel Terbaru</div>
                <div className="newArticleArticles">
                    {articleData.map((article) => {
                        return(
                            <CardArticle
                                imageSrc={article.imageSrc}
                                imageAlt={article.imageAlt}
                                date={article.date}
                                title={article.title}
                                textPreview={article.textPreview}
                                link={article.link}
                            />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default NewArticle;