import React from "react";

import ArticleImage1 from '../../../assets/images/article-image-1.png';
import ArticleImage2 from '../../../assets/images/article-image-2.png';
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
                        imageAlt='Kesulitan Ekonomi Masyarakat di Tengah Pandemi COVID-19'
                        articleHeader='Kesulitan Ekonomi Masyarakat di Tengah Pandemi COVID-19'
                        articleText={'Pemerintah Indonesia telah mengeluarkan dua paket stimulus ekonomi untuk membantu warga kelas menengah bawah yang dinilai paling terdampak kelesuan ekonomi akibat pandemi Covid-19.Meski demikian, beberapa stimulus yang diberikan dinilai masih terlalu kecil dan jangkauannya kurang luas.\nSalah satu relaksasi yang sudah diumumkan oleh Presiden Joko Widodo adalah penambahan nilai manfaat kartu sembako dari Rp150.000 menjadi Rp200.000 per bulan. Kebijakan ini akan berlangsung selama sembilan bulan dan rencananya diberikan kepada 20 juta penerima, naik dari 15,2 juta orang yang saat ini terdaftar sebagai pemegang kartu sembako.'}
                    />
                    <HomeArticle
                        reverse={true}
                        imageSrc={ArticleImage2}
                        imageAlt='Tenaga kesehatan mendapat dukungan dari KPB dan Kompak Kalteng'
                        articleHeader='Tenaga kesehatan mendapat dukungan dari KPB dan Kompak Kalteng'
                        articleText={'Di tengah pandemi Covid-19, banyak warga yang mengalami kesulitan ekonomi. Untuk itu, semua elemen masyarakat harus bahu membahu membantu setiap warga yang kesulitan akibat dampak pandemi Covid-19 yang sudah satu tahun lebih melanda Indonesia dan negara-negara lain di dunia.\nSeperti yang dilakukan My Home Indonesia dan Komunitas Pembawa Berkat (KOMPAK) Kalimantan Tengah, bersama Komisi Pelayanan Bapak KPB) Resort GKE Puruk Cahu Kabupaten Murung Raya, komunitas tersebut membantu para nakes sebagai garda terdepan penanganan pandemi Covid-19 dengan berbagi kasih di Puskesmas Puruk Cahu dan RSUD Puruk Cahu, Rabu (18/8/2021).'}
                    />
                </div>
            </div>
        </section>
    )
}

export default HomeArticleSection;