import React from "react";

import CardArticle from "./CardArticle";

import SampleImage from "../../../assets/images/newArticleSampleImage.jpg";

const NewArticle = () => {
    return (
        <div className="newArticle">
            <hr className="newsArticleSeparator"/>
            <div className="newArticleHeading">Artikel Terbaru</div>
            <div className="newArticleArticles">
                <CardArticle
                    imageSrc={SampleImage}
                    imageAlt="Sample-Image"
                    date="18 Aug 2022"
                    title="Kehabisan APD, Tim Medis Corona pakai Jas Hujan"
                    textPreview="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc scelerisque quam ut pellentesque nam egestas nunc, euismod diam. Mauris eros et sit aliquam ipsum urna egestas odio mollis."
                    link="/"
                />
                <CardArticle
                    imageSrc={SampleImage}
                    imageAlt="Sample-Image"
                    date="18 Aug 2022"
                    title="Kehabisan APD, Tim Medis Corona pakai Jas Hujan"
                    textPreview="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc scelerisque quam ut pellentesque nam egestas nunc, euismod diam. Mauris eros et sit aliquam ipsum urna egestas odio mollis."
                    link="/"
                />
                <CardArticle
                    imageSrc={SampleImage}
                    imageAlt="Sample-Image"
                    date="18 Aug 2022"
                    title="Kehabisan APD, Tim Medis Corona pakai Jas Hujan"
                    textPreview="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc scelerisque quam ut pellentesque nam egestas nunc, euismod diam. Mauris eros et sit aliquam ipsum urna egestas odio mollis."
                    link="/"
                />
                <CardArticle
                    imageSrc={SampleImage}
                    imageAlt="Sample-Image"
                    date="18 Aug 2022"
                    title="Kehabisan APD, Tim Medis Corona pakai Jas Hujan"
                    textPreview="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc scelerisque quam ut pellentesque nam egestas nunc, euismod diam. Mauris eros et sit aliquam ipsum urna egestas odio mollis."
                    link="/"
                />
                <CardArticle
                    imageSrc={SampleImage}
                    imageAlt="Sample-Image"
                    date="18 Aug 2022"
                    title="Kehabisan APD, Tim Medis Corona pakai Jas Hujan"
                    textPreview="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc scelerisque quam ut pellentesque nam egestas nunc, euismod diam. Mauris eros et sit aliquam ipsum urna egestas odio mollis."
                    link="/"
                />
                <CardArticle
                    imageSrc={SampleImage}
                    imageAlt="Sample-Image"
                    date="18 Aug 2022"
                    title="Kehabisan APD, Tim Medis Corona pakai Jas Hujan"
                    textPreview="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc scelerisque quam ut pellentesque nam egestas nunc, euismod diam. Mauris eros et sit aliquam ipsum urna egestas odio mollis."
                    link="/"
                />
            </div>
        </div>
    )
}

export default NewArticle;