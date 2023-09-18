import React, { Fragment } from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

const WeatherApp = () => {
    const [city, setCity] = useState();
    const [SearchData, SetSearchData] = useState("kathmandu");
    const fetchData = () => {
        return axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${SearchData}&appid=e8ef92859b1fa898de459496cae316c4`)
            .then((res) => {
                setCity(res.data);
            })
}
    useEffect(() => {
        console.log("app init ")
        fetchData();
    }, []);



    return (
        <Fragment>
     <div className="weather_app">
                <div className="weather_box">
                    <form onSubmit={e => {
                        e.preventDefault()
                        fetchData()
                    }} className="search_bar">
                        <input type="search"
                            className="form-control"
                            onChange={(event) => {
                                SetSearchData(event.target.value)

                            }}

                        />
                    </form>
                    <br />

                    <div className="weather_info">
                        <h3>{SearchData}</h3>
                        {
                            !city ?
                                (<p>no data found</p>) :


                                (<>  <i className="fa-solid fa-cloud"></i> <h6><span>{city.main.temp}</span> </h6>  </>)
                                }
                                 </div>
                </div>
            </div>
        </Fragment>
    )
}

export default WeatherApp
