import React, { useState } from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

const CovidStats = () => {
    const data = {
        "positif": 6338906,
        "dirawat": 46548,
        "sembuh": 6134880,
        "meninggal": 157478,
        "lastUpdate": new Date().toLocaleDateString('id', {
            weekday: 'long',
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        })
    };
    
    const [state, setState] = useState(false);

    return(
        <section id="covid-stats">
            <div className="container">
                <h2>Situasi COVID-19 di Indonesia</h2>
                <div className="cases-table" data-aos={'zoom-in-up'}>
                    <div className="header">
                        <p className="title">Kasus Kumulatif</p>
                        <p>Update Terakhir: {data.lastUpdate}</p>
                    </div>
                    <div className="body">
                        <VisibilitySensor offset={{bottom: 200}}>
                            {({ isVisible }) => ( 
                            <>
                                <div className="content">
                                    <h3>{isVisible || state ? <CountUp start={0} end={data.positif} duration={6} separator={'.'} useEasing onStart={() => setState(true)}/>: "0"}</h3>
                                    <p>Positif</p>
                                </div>
                                <div className="content">
                                    <h3>{isVisible || state ? <CountUp start={0} end={data.sembuh} duration={6} separator={'.'} useEasing/>: "0"}</h3>
                                    <p>Sembuh</p>
                                </div>
                                <div className="content">
                                    <h3>{isVisible || state ? <CountUp start={0} end={data.dirawat} duration={6} separator={'.'} useEasing/>: "0"}</h3>
                                    <p>Dirawat</p>
                                </div>
                                <div className="content">
                                    <h3>{isVisible || state ? <CountUp start={0} end={data.meninggal} duration={6} separator={'.'} useEasing/>: "0"}</h3>
                                    <p>Meninggal</p>
                                </div>
                            </>
                            )}
                        </VisibilitySensor>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CovidStats;