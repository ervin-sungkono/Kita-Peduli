import React from 'react';

import Navbar from '../components/common/Navbar';
import Vision from '../components/pages/about-page/Vision';
import Mission from '../components/pages/about-page/Mission';

const AboutPage = () => {
    return (
        <section id='About'>
            <Navbar />
            <Vision />
            <Mission />
        </section>
    )
}

export default AboutPage;