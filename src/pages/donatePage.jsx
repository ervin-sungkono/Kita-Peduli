import React, { useEffect } from 'react';

import DonateHero from '../components/pages/donate-page/DonateHero';
import DonateContent from '../components/pages/donate-page/DonateContent';
import DonateOther from '../components/pages/donate-page/DonateOther';
import FormPopup from '../components/pages/form/formPopup';

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
            <DonateOther />
        </section>
    )
}

export default DonatePage;