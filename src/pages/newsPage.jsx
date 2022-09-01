import React,{ useEffect } from 'react';

import NewsHero from '../components/pages/news-page/NewsHero';
import NewArticle from '../components/pages/news-page/NewArticleStructure';

const NewsPage = () => {
    useEffect(() => {
        document.title = "KitaPeduli | Berita"
    },[]);
    return (
        <section id="News">
            <NewsHero />
            <NewArticle />
        </section>
    )
}

export default NewsPage;