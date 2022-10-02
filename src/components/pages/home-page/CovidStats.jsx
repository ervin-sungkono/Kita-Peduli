import React, { useEffect, useState } from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

const CovidStats = () => {
    const options = {
        weekday: 'long',
        day: 'numeric',
        month: 'short',
        year: 'numeric'
    };
    const [data, setData] = useState({
        lastUpdate: '2022-10-02',
        positif: 6433263,
        sembuh: 6257444,
        meninggal: 158122,
        dirawat: 29330,
    });
    const [state, setState] = useState(false);

    // useEffect(() => {
    //     async function fetchData(){
    //         // Resource used from https://github.com/Reynadi531/api-covid19-indonesia-v2
    //         const APIdata = await fetch('https://apicovid19indonesia-v2.vercel.app/api/indonesia')
    //             .then(res => res.json())
    //             .catch(err => console.log(err));
    //         setData(APIdata);
    //     }
    //     fetchData();
    // },[]);

    return(
        <section id="covid-stats">
            <div className="container">
                <h2>Situasi COVID-19 di Indonesia</h2>
                <div className="cases-table" data-aos={'zoom-in-up'}>
                    <div className="header">
                        <p className="title">Kasus Kumulatif</p>
                        <p>Update Terakhir: {new Date(data.lastUpdate).toLocaleDateString('id', options)}</p>
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