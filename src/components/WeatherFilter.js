import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../App.css';
import Weather from './Weather';
import {
  createToday,
  createTomorrow,
  createDayAfterTomorrow,
  dayName,
  tomorrowDayName,
  dayAfterTomorrowName,
} from './weatherHelpers/createDays';

import { images } from './weatherHelpers/images';

const WeatherFilter = ({ countries }) => {
  const [weather, setWeather] = useState([]);
  const [filteredToday, setFilteredToday] = useState([]);
  const [tomorrow, setTomorrow] = useState([]);
  const [dayAfterTomorrow, setDayAfterTomorrow] = useState([]);
  const [weatherError, setWeatherError] = useState(null);
  //   const [forecast, setForecast] = useState([]);

  // Fetch weather:

  useEffect(() => {
    const api_key = process.env.REACT_APP_API_KEY;
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/forecast?q=${countries.capital}&APPID=${api_key}`
      )
      .then((response) => {
        let mapIt = [response].map((p) => p.data.list);

        setWeather([response.data]);
        setWeatherError(false);

        mapIt.filter(function(item, i) {
          let filteredToday = [];

          for (i = 0; i < item.length; i++) {
            if (item[i].dt_txt.includes(createToday())) {
              filteredToday.push(item[i]);
            }
          }

          return setFilteredToday(filteredToday);
        });
      })
      .catch((error) => {
        console.log(error);
        setWeatherError(true);
      });
  }, [countries.capital]);

  useEffect(() => {
    const filteredTomorrow = [];

    weather
      .map((p) => p.list)
      .filter(function(item, i) {
        for (i = 0; i < item.length; i++) {
          if (item[i].dt_txt.includes(createTomorrow())) {
            filteredTomorrow.push(item[i]);
          }
        }

        return setTomorrow(filteredTomorrow);
      });

    const FilteredDayAfterTomorrowWeather = [];

    weather
      .map((p) => p.list)
      .filter(function(item, i) {
        for (i = 0; i < item.length; i++) {
          if (item[i].dt_txt.includes(createDayAfterTomorrow())) {
            FilteredDayAfterTomorrowWeather.push(item[i]);
          }
        }

        return setDayAfterTomorrow(FilteredDayAfterTomorrowWeather);
      });
  }, [weather]);

  //Parse temperature
  const parseTemp = (p) => (p = parseFloat(p) - 273.15);

  return (
    <div>
      <div>
        <span className='container weatherFilterh4'>
          Weather in {countries.capital}:
        </span>
        {weatherError ? (
          <div className='container bottomContainer'><strong>Unfortunately Weather API does not provide weather information for
          this capital.</strong></div> 
        ) : (
          <div className='container'>
            <div className='containerHeader'>{dayName()}</div>
            {filteredToday.map((weather) => (
              <Weather
                weather={weather}
                images={images}
                //   date={today.dt_txt}
                date={weather.dt_txt.slice(10, 13)}
                // tomorrowWeather={tomorrowWeather}
                parseTemp={parseTemp}
                key={weather.dt}
                
              />
            ))}
            <span className='containerFooter'>&nbsp;</span>
          </div>
        )}
      </div>

      {weatherError ? (<div></div>) : (
      <div className='container hidden-mobile'>
        <div className='containerHeader'>{tomorrowDayName()}</div>
        {tomorrow.map((weather) => (
          <Weather
            weather={weather}
            date={weather.dt_txt.slice(10, 13)}
            images={images}
            parseTemp={parseTemp}
          
            key={weather.dt}
          />
        ))}
        <span className='containerFooter'>&nbsp;</span>
      </div>) }

      {weatherError ? (<div></div>) : (
      <div className='container hidden-mobile bottomContainer'>
        <div className='containerHeader'>{dayAfterTomorrowName()}</div>
        {dayAfterTomorrow.map((weather) => (
          <Weather
            weather={weather}
            date={weather.dt_txt.slice(10, 13)}
            images={images}
            parseTemp={parseTemp}
           
            key={weather.dt}
          />
        ))}
        <span className='containerFooter'>&nbsp;</span>
      </div>)}
    </div>
  );
};

export default WeatherFilter;
