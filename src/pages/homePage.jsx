import React, { useEffect } from 'react';

import Navbar from '../components/common/Navbar';
import Hero from '../components/pages/home-page/Hero';
import CovidStats from '../components/pages/home-page/CovidStats';
import HomeArticleSection from '../components/pages/home-page/HomeArticleSection';
import DonationSection from '../components/pages/home-page/DonationSection';

const HomePage = (props) => {
    useEffect(() => {
        document.title = "KitaPeduli | Beranda"
    },[]);
    return (
        <>
            <Navbar/>
            <Hero/>
            <CovidStats/>
            <HomeArticleSection/>
            <DonationSection/>
        </>
    )
}

export default HomePage;