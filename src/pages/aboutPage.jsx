import React, { useEffect } from 'react';

import Vision from '../components/pages/about-page/Vision';
import Mission from '../components/pages/about-page/Mission';

const AboutPage = () => {
    useEffect(() => {
        document.title = "KitaPeduli | Tentang Kami"
    },[]);
    return (
        <section id='About'>
            <Vision />
            <Mission />
        </section>
    )
}

export default AboutPage;