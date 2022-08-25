import React, { useEffect } from 'react';

import Navbar from '../components/common/Navbar';
import Hero from '../components/pages/home-page/Hero';

const HomePage = (props) => {
    useEffect(() => {
        document.title = "Kita Peduli | Beranda"
    },[]);
    return (
        <>
            <Navbar/>
            <Hero />
        </>
    )
}

export default HomePage;