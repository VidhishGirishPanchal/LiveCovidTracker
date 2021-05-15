import React, {useState, useEffect} from 'react'
import "./Covid.css";

const Covid = () => {

    const [data, setData] = useState([])

    const getCovidData = async ()=>{
        
        try {
            const res = await fetch("https://api.covid19india.org/data.json");
            const actualData = await res.json();
            console.log(actualData.statewise[0]);
            setData(actualData.statewise[0]);
        } catch (err) {
            console.log(err);
        }
        
    }

    useEffect(() => {
        getCovidData();
    }, [])

    return (
        <>
            <div className="uppertext">
                <h1 className="livetext">🔴LIVE</h1>
                <h2 className="trackertext">COVID-19 CORONAVIRUS TRACKER</h2>
            </div>
                <ul className="row">
                    <li className="card card1 col-lg-4 col-md-6 col-sm-12">
                    <div className="card_main">
                    <div className="card_inner">
                        <p><h3>OUR COUNTRY</h3></p>
                        <p className="card_total card_small">INDIA</p>
                    </div>
                    </div>
                    </li>

                    <li className="card card2 col-lg-4 col-md-6 col-sm-12">
                    <div className="card_main">
                    <div className="card_inner">
                        <p><h3>RECOVERED</h3></p>
                        <p className="card_total card_small">{data.recovered}</p>
                    </div>
                    </div>
                    </li>

                    <li className="card card3 col-lg-4 col-md-6 col-sm-12">
                    <div className="card_main">
                    <div className="card_inner">
                        <p><h3>CONFIRMED</h3></p>
                        <p className="card_total card_small">{data.confirmed}</p>
                    </div>
                    </div>
                    </li>

                    <li className="card card4 col-lg-4 col-md-6 col-sm-12">
                    <div className="card_main">
                    <div className="card_inner">
                        <p><h3>TOTAL DEATHS</h3></p>
                        <p className="card_total card_small">{data.deaths}</p>
                    </div>
                    </div>
                    </li>

                    <li className="card card5 col-lg-4 col-md-6 col-sm-12">
                    <div className="card_main">
                    <div className="card_inner">
                        <p><h3>TOTAL ACTIVE</h3></p>
                        <p className="card_total card_small">{data.active}</p>
                    </div>
                    </div>
                    </li>

                    <li className="card card6 col-lg-4 col-md-6 col-sm-12">
                    <div className="card_main">
                    <div className="card_inner">
                        <p><h3>LAST UPDATED</h3></p>
                        <p className="card_total card_small">{data.lastupdatedtime}</p>
                    </div>
                    </div>
                    </li>

                </ul>
        </>
    )
}

export default Covid;
