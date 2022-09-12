import React from "react";

import CardArticle from "./CardArticle";

import ArticleImage1 from '../../../assets/images/article-image-1.png';
import ArticleImage2 from '../../../assets/images/article-image-2.png';
import SampleImage from "../../../assets/images/newArticleSampleImage.jpg";

const NewArticle = () => {
    const articleData = [
        {
            imageSrc: ArticleImage1,
            imageAlt: "Gambar Artikel",
            date: "18 Aug 2022",
            title: "Kesulitan Ekonomi Masyarakat di Tengah Pandemi COVID-19",
            textPreview: "Pemerintah Indonesia telah mengeluarkan dua paket stimulus ekonomi untuk membantu warga kelas menengah bawah yang dinilai paling terdampak kelesuan ekonomi akibat pandemi Covid-19. Meski demikian, beberapa stimulus yang diberikan dinilai 'masih terlalu kecil dan jangkauannya kurang luas.",
            link: "#news"
        },
        {
            imageSrc: ArticleImage2,
            imageAlt: "Gambar Artikel",
            date: "18 Aug 2022",
            title: "Tenaga kesehatan mendapat dukungan dari KPB dan Kompak Kalteng",
            textPreview: "Di tengah pandemi Covid-19, banyak warga yang mengalami kesulitan ekonomi. Untuk itu, semua elemen masyarakat harus bahu membahu membantu setiap warga yang kesulitan akibat dampak pandemi Covid-19 yang sudah satu tahun lebih melanda Indonesia dan negara-negara lain di dunia.",
            link: "#news"
        },
        {
            imageSrc: ArticleImage1,
            imageAlt: "Gambar Artikel",
            date: "18 Aug 2022",
            title: "Kesulitan Ekonomi Masyarakat di Tengah Pandemi COVID-19",
            textPreview: "Pemerintah Indonesia telah mengeluarkan dua paket stimulus ekonomi untuk membantu warga kelas menengah bawah yang dinilai paling terdampak kelesuan ekonomi akibat pandemi Covid-19. Meski demikian, beberapa stimulus yang diberikan dinilai 'masih terlalu kecil dan jangkauannya kurang luas.",
            link: "#news"
        },
        {
            imageSrc: ArticleImage2,
            imageAlt: "Gambar Artikel",
            date: "18 Aug 2022",
            title: "Tenaga kesehatan mendapat dukungan dari KPB dan Kompak Kalteng",
            textPreview: "Di tengah pandemi Covid-19, banyak warga yang mengalami kesulitan ekonomi. Untuk itu, semua elemen masyarakat harus bahu membahu membantu setiap warga yang kesulitan akibat dampak pandemi Covid-19 yang sudah satu tahun lebih melanda Indonesia dan negara-negara lain di dunia.",
            link: "#news"
        },
        {
            imageSrc: ArticleImage1,
            imageAlt: "Gambar Artikel",
            date: "18 Aug 2022",
            title: "Kesulitan Ekonomi Masyarakat di Tengah Pandemi COVID-19",
            textPreview: "Pemerintah Indonesia telah mengeluarkan dua paket stimulus ekonomi untuk membantu warga kelas menengah bawah yang dinilai paling terdampak kelesuan ekonomi akibat pandemi Covid-19. Meski demikian, beberapa stimulus yang diberikan dinilai 'masih terlalu kecil dan jangkauannya kurang luas.",
            link: "#news"
        },
        {
            imageSrc: ArticleImage2,
            imageAlt: "Gambar Artikel",
            date: "18 Aug 2022",
            title: "Tenaga kesehatan mendapat dukungan dari KPB dan Kompak Kalteng",
            textPreview: "Di tengah pandemi Covid-19, banyak warga yang mengalami kesulitan ekonomi. Untuk itu, semua elemen masyarakat harus bahu membahu membantu setiap warga yang kesulitan akibat dampak pandemi Covid-19 yang sudah satu tahun lebih melanda Indonesia dan negara-negara lain di dunia.",
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