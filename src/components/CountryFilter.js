import React, { useState, useEffect } from 'react'
import axios from 'axios'
import CountryFilterItem from './CountryFilterItem'
import '../App.css'

const CountryFilter = ({ countries }) => {
    const [weather, setWeather] = useState([])
    const [forecast, setForecast] = useState([])

    // Fetch weather:
    const api_key = process.env.REACT_APP_API_KEY

    useEffect(() => {
        const api_key = process.env.REACT_APP_API_KEY

        axios
            .get(
                `http://api.openweathermap.org/data/2.5/forecast?q=${countries.capital}&APPID=${api_key}`
            )
            .then((response) => {
                setWeather([response.data])
                console.log('response.data.current', response.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [countries.capital])

    return (
        <div>
            <h3>{countries.name}</h3>
            <p>Capital: {countries.capital}</p>
            <p>Population: {countries.population}</p>

            <h4>Languages:</h4>

            {countries.languages.map((param) => {
                return <li key={param.iso639_1}>{param.name}</li>
            })}

            <img
                className='flagPicture'
                src={countries.flag}
                alt='Country flag'
            ></img>

            {/* {weather.map(weather => (
        <CountryFilterItem weather={weather} key={weather.location} />
      ))} */}

            <h4>Weather in {countries.capital}</h4>
            <CountryFilterItem weather={weather} />
            <br />
        </div>
    )
}

export default CountryFilter
