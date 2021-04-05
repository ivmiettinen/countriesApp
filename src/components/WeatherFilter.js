import React, { useState, useEffect } from 'react'
import axios from 'axios'
import WeatherFilterItem from './WeatherFilterItem'
import '../App.css'
import Weather from './Weather'
import {
    createToday,
    createTomorrow,
    createDayAfterTomorrow,
    dayName,
    tomorrowDayName,
    dayAfterTomorrowName,
} from './weatherHelpers/createDays'

import { images } from './weatherHelpers/images'

const WeatherFilter = ({ countries }) => {
    const [weather, setWeather] = useState([])
    const [filteredToday, setFilteredToday] = useState([])
    const [tomorrow, setTomorrow] = useState([])
    const [DayAfterTomorrow, setDayAfterTomorrow] = useState([])
    //   const [forecast, setForecast] = useState([]);

    // Fetch weather:

    useEffect(() => {
        const api_key = process.env.REACT_APP_API_KEY
        axios
            .get(
                `http://api.openweathermap.org/data/2.5/forecast?q=${countries.capital}&APPID=${api_key}`
            )
            .then((response) => {
                let mapIt = [response].map((p) => p.data.list)

                // console.log('mapitmapi', mapIt);
                setWeather([response.data])

                // console.log('response.data.current', response.data.list.slice(0, 10));

                mapIt.filter(function (item, i) {
                    // index = i;

                    // console.log('item.length', item.length);

                    // console.log('create today', createToday());

                    let filteredToday = []

                    for (i = 0; i < item.length; i++) {
                        // console.log('TomorrowToText', tomorrowToText);

                        // console.log('typeOfText', typeof tomorrowToText)

                        if (item[i].dt_txt.includes(createToday())) {
                            filteredToday.push(item[i])
                        }
                    }

                    // console.log('filteredToday', filteredToday);
                    return setFilteredToday(filteredToday)
                })
            })
            .catch((error) => {
                console.log(error)
            })
    }, [countries.capital])

    const tomorrowWeather = (value) => {
        const filteredTomorrow = []

        weather
            .map((p) => p.list)
            .filter(function (item, i) {
                // index = i;

                // console.log('item.length', item.length)

                for (i = 0; i < item.length; i++) {
                    // console.log('TomorrowToText', tomorrowToText);
                    // console.log('item[i].dt_txt with index', item[i].dt_txt)

                    // console.log('typeOfText', typeof tomorrowToText)

                    if (item[i].dt_txt.includes(createTomorrow())) {
                        // );
                        // index = i;

                        filteredTomorrow.push(item[i])
                    }
                }

                return setTomorrow(filteredTomorrow)
            })
    }
    const dayAfterTomorrowWeather = (value) => {
        const FilteredDayAfterTomorrowWeather = []

        weather
            .map((p) => p.list)
            .filter(function (item, i) {
                // index = i;

                // console.log('item.length', item.length)

                for (i = 0; i < item.length; i++) {
                    // console.log('TomorrowToText', tomorrowToText);
                    // console.log('item[i].dt_txt with index', item[i].dt_txt)

                    // console.log('typeOfText', typeof tomorrowToText)

                    if (item[i].dt_txt.includes(createTomorrow())) {
                        // );
                        // index = i;

                        FilteredDayAfterTomorrowWeather.push(item[i])
                    }
                }

                return setDayAfterTomorrow(FilteredDayAfterTomorrowWeather)
            })
    }

    //Parse temperature
    const parseTemp = (p) => (p = parseFloat(p) - 273.15)

    return (
        <div>
            <div>
                <button
                    className='tomorrowWeather'
                    onClick={() => tomorrowWeather()}
                >
                    Tomorrow weather
                </button>
                <button
                    className='dayAfterTomorrowWeather'
                    onClick={() => dayAfterTomorrowWeather()}
                >
                    Day after tomorrow weather
                </button>
                <h4 className='weatherFilterh4'>
                    Weather in {countries.capital}:
                </h4>

                <div className='container'>
                    <div className='containerHeader'>{dayName()}</div>
                    {filteredToday.length > 0 ? (
                        filteredToday.map((today, i) => (
                            <WeatherFilterItem
                                today={today}
                                images={images}
                                //   date={today.dt_txt}
                                date={today.dt_txt.slice(10, 13)}
                                tomorrowWeather={tomorrowWeather}
                                parseTemp={parseTemp}
                                key={i}
                            />
                        ))
                    ) : (
                        <ul></ul>
                    )}
                </div>
            </div>

            <div className='container'>
                <div className='containerHeader'>{tomorrowDayName()}</div>
                {tomorrow.map((tomorrow) => (
                    <Weather
                        tomorrow={tomorrow}
                        date={tomorrow.dt_txt.slice(10, 13)}
                        images={images}
                        parseTemp={parseTemp}
                        key={tomorrow.dt}
                    />
                ))}
            </div>
            <div className='container'>
                <div className='containerHeader'>{dayAfterTomorrowName()}</div>
                {DayAfterTomorrow.map((tomorrow) => (
                    <Weather
                        tomorrow={tomorrow}
                        date={tomorrow.dt_txt.slice(10, 13)}
                        images={images}
                        parseTemp={parseTemp}
                        key={tomorrow.dt}
                    />
                ))}
            </div>
        </div>
    )
}

export default WeatherFilter
