import React, { useEffect } from 'react';

import DonateHero from '../components/pages/donate-page/DonateHero';
import DonateContent from '../components/pages/donate-page/DonateContent';

const DonatePage = () => {
    useEffect(() => {
        document.title = "KitaPeduli | Donasi"
    },[]);
    return (
        <section id='Donate'>
            <DonateHero />
            <DonateContent />
        </section>
    )
}

export default DonatePage;