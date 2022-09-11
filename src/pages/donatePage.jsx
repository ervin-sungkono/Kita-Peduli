import React, { useEffect } from 'react';

import DonateHero from '../components/pages/donate-page/DonateHero';
import DonateContent from '../components/pages/donate-page/DonateContent';
import FormPopup from './formPopup';

const DonatePage = () => {
    let donateForm;
    const showForm = () => {
        donateForm.classList.remove('hidden');
    }
    const hideForm = () => {
        donateForm.classList.add('hidden');
    }

    useEffect(() => {
        document.title = "KitaPeduli | Donasi"
        donateForm = document.querySelector('.popup-form-wrapper');
    },[donateForm]);
    return (
        <section id='Donate'>
            <FormPopup hideForm={hideForm}/>
            <DonateHero showForm={showForm}/>
            <DonateContent />
        </section>
    )
}

export default DonatePage;