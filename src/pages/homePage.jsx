import React, { useEffect } from 'react';

import Navbar from '../components/common/Navbar';
import Hero from '../components/pages/home-page/Hero';
import CovidStats from '../components/pages/home-page/CovidStats';

const HomePage = (props) => {
    useEffect(() => {
        document.title = "KitaPeduli | Beranda"
    },[]);
    return (
        <>
            <Navbar/>
            <Hero/>
            <CovidStats/>
        </>
    )
}

export default HomePage;