import React, { useEffect, useState } from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

const CovidStats = () => {
    const [data, setData] = useState({
        "positif": 6338906,
        "dirawat": 46548,
        "sembuh": 6134880,
        "meninggal": 157478,
        "lastUpdate": "26-08-2022T09:35:03.000Z"
    });

    return(
        <section id="covid-stats">
            <div className="container">
                <h2>Situasi COVID-19 di Indonesia</h2>
                <div className="cases-table">
                    <div className="header">
                        <p className="title">Kasus Kumulatif</p>
                        <p>Update Terakhir: {data.lastUpdate.split('T')[0]}</p>
                    </div>
                    <div className="body">
                        <VisibilitySensor offset={{bottom: 100}}>
                            {({ isVisible }) => (
                            <>
                                <div className="content">
                                    <h3>{isVisible ? <CountUp start={0} end={data.positif} duration={5} separator={'.'}/>: "0"}</h3>
                                    <p>Positif</p>
                                </div>
                                <div className="content">
                                    <h3>{isVisible ? <CountUp start={0} end={data.sembuh} duration={5} separator={'.'}/>: "0"}</h3>
                                    <p>Sembuh</p>
                                </div>
                                <div className="content">
                                    <h3>{isVisible ? <CountUp start={0} end={data.dirawat} duration={5} separator={'.'}/>: "0"}</h3>
                                    <p>Dirawat</p>
                                </div>
                                <div className="content">
                                    <h3>{isVisible ? <CountUp start={0} end={data.meninggal} duration={5} separator={'.'}/>: "0"}</h3>
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