import React, { useEffect } from 'react';

import CovidStats from '../components/pages/home-page/CovidStats';
import Hero from '../components/pages/home-page/Hero';

const HomePage = (props) => {
    useEffect(() => {
        document.title = "KitaPeduli | Beranda"
    },[]);
    return (
        <>
            <Hero/>
            <CovidStats/>
        </>
    )
}

export default HomePage;