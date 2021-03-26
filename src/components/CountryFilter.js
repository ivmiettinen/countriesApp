import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CountryFilterItem from './CountryFilterItem';
import '../App.css';
import Weather from './Weather';

const CountryFilter = ({ countries }) => {
  const [weather, setWeather] = useState([]);
  const [tomorrow, setTomorrow] = useState([]);
  //   const [forecast, setForecast] = useState([]);

  // Fetch weather:
  const api_key = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/forecast?q=${countries.capital}&APPID=${api_key}`
      )
      .then((response) => {
        setWeather([response.data]);
        console.log('response.data.current', response.data.list.slice(0, 10));
      })
      .catch((error) => {
        console.log(error);
      });
  }, [countries.capital]);

  const tomorrowWeather = (value) => {
    console.log(value);

    let mappiLista = [];

    let mappaus = weather.map((p) => {
      console.log('p');
      console.log('length', p.length);

      mappiLista.push(p.list);

      return p.list;
    });

    console.log('mappaus', mappaus);

    let arrayy = [];

    var index = -1;
    var val = '2021-03-27';

    var filteredObj = mappiLista.filter(function(item, i) {
      index = i;

      console.log('item.length', item.length);

      for (i = 0; i < item.length; i++) {
        // console.log('', item)
        // console.log('[i]', item[i])

        // console.log('[index]', item[index])
        // console.log('[index].dt_txt', item[index].dt_txt)

        if (item[i].dt_txt.includes(val)) {
          console.log(
            'item[index].dt_txt.includes(val)',
            item[index].dt_txt.includes(val)
          );
          index = i;
          // console.log('2index', index)
          // console.log('2item', item)
          // console.log('3item', item[index].dt_txt)
          arrayy.push(item[i]);
        }
      }

      setTomorrow(arrayy);
    });
    // // var filteredObj = mappaus.filter(function (item, i) {
    // //     if (item.dt_txt.includes(val)) {
    // //         index = i
    // //         console.log('index', index)
    // //         console.log('item', item)
    // //         return item
    // //     }
    // // })

    console.log('filteredObj', filteredObj);
    console.log('arrayy', arrayy);
  };

  return (
    <div>
      <h3>{countries.name}</h3>
      <p>Capital: {countries.capital}</p>
      <p>Population: {countries.population}</p>

      <h4>Languages:</h4>

      {countries.languages.map((param) => {
        return <li key={param.iso639_1}>{param.name}</li>;
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

      {weather.length > 0 ? (
        <CountryFilterItem
          weather={weather}
          tomorrowWeather={tomorrowWeather}
        />
      ) : (
        <ul></ul>
      )}
      <br />

      <div className='container'>
      {tomorrow.map((tomorrow) => (
        <Weather tomorrow={tomorrow} date={tomorrow.dt_txt} key={tomorrow.dt}  />
      ))}
      </div>
    </div>
  );
};

export default CountryFilter;
