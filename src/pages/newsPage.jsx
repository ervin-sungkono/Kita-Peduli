import React,{ useEffect } from 'react';

import Navbar from '../components/common/Navbar';
import NewsHero from '../components/pages/news-page/NewsHero';
import NewArticle from '../components/pages/news-page/NewArticleStructure';

const NewsPage = () => {
    useEffect(() => {
        document.title = "Kita Peduli | Berita"
    },[]);
    return (
        <section id="News">
            <Navbar/>
            <NewsHero />
            <NewArticle />
        </section>
    )
}

export default NewsPage;