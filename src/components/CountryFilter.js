import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CountryFilterItem from './CountryFilterItem';
import '../App.css';
import Weather from './Weather';

const CountryFilter = ({ countries }) => {
  const [weather, setWeather] = useState([]);
  const [tomorrow, setTomorrow] = useState([]);
  const [today, setToday] = useState([]);
  const [filteredToday, setFilteredToday] = useState([]);
  //   const [forecast, setForecast] = useState([]);

  const images = importAll(
    require.context('./images', false, /\.(png|jpe?g|svg)$/)
  );

  function importAll(r) {
    let images = {};
    r.keys().map((item, index) => {
      images[item.replace('./', '')] = r(item);
    });
    return images;
  }

  // Fetch weather:
  const api_key = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/forecast?q=${countries.capital}&APPID=${api_key}`
      )
      .then((response) => {
        let mapIt = [response].map((p) => p.data.list);

        // console.log('mapitmapi', mapIt);
        setWeather([response.data]);

        // setToday([mapIt])
        setToday(response.data.list);
        // console.log('response.data.current', response.data.list.slice(0, 10));

       mapIt.filter(function(item, i) {
          // index = i;

          // console.log('item.length', item.length);

          // console.log('create today', createToday());

          let filteredToday = [];

          for (i = 0; i < item.length; i++) {
            // console.log('TomorrowToText', tomorrowToText);

            // console.log('typeOfText', typeof tomorrowToText)

            if (item[i].dt_txt.includes(createToday())) {
              filteredToday.push(item[i]);
            }
       
          }

          // console.log('filteredToday', filteredToday);
          setFilteredToday(filteredToday);
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }, [countries.capital]);

  // useEffect(() => {
  //   mapTheDays.filter(function(item, i) {
  //     // index = i;

  //     console.log('item.length', item.length);

  //     for (i = 0; i < item.length; i++) {
  //       // console.log('TomorrowToText', tomorrowToText);
  //       // console.log('item[i].dt_txt with index', item[i].dt_txt);

  //       // console.log('typeOfText', typeof tomorrowToText)

  //       if (item[i].dt_txt.includes(createToday())) {
  //         // );
  //         // index = i;

  //         filteredToday.push(item[i]);
  //       }
  //     }
  //     setToday(filteredToday);
  //   });
  // }, [today]);

  const mapTheDays = weather.map((p) => {
    return p.list;
  });

  const createToday = () => {
    const newString = [];

    const nextDay = new Date();

    const nextday = nextDay.getDate();

    const nextmonth = nextDay.getMonth() + 1;

    const nextyear = nextDay.getFullYear();

    newString.push(`${nextyear}-0${nextmonth}-${nextday}`);

    return newString.toString();
  };

  const createTomorrow = () => {
    const newString = [];

    const nextDay = new Date();

    const nextday = nextDay.getDate() + 1;

    const nextmonth = nextDay.getMonth() + 1;

    const nextyear = nextDay.getFullYear();

    newString.push(`${nextyear}-0${nextmonth}-${nextday}`);

    return newString.toString();
  };

  const tomorrowWeather = (value) => {
    // console.log(value);

    // var val = '2021-03-30';

    // console.log('NEXTNEXT', nextDay)

    //"2021-03-31 12:00:00"

    // console.log('dayday', nextDay);
    //dayday Mon Mar 29 2021 09:47:35 GMT+0300 (Eastern European Summer Time)

    // console.log('newString', newString.toString())

    // let index = -1;

    const filteredTomorrow = [];

    const filteredObj = mapTheDays.filter(function(item, i) {
      // index = i;

      console.log('item.length', item.length);

      for (i = 0; i < item.length; i++) {
        // console.log('TomorrowToText', tomorrowToText);
        // console.log('item[i].dt_txt with index', item[i].dt_txt);

        // console.log('typeOfText', typeof tomorrowToText)

        if (item[i].dt_txt.includes(createTomorrow())) {
          // );
          // index = i;

          filteredTomorrow.push(item[i]);
        }
      }

      setTomorrow(filteredTomorrow);
    });
    // // var filteredObj = mappaus.filter(function (item, i) {
    // //     if (item.dt_txt.includes(val)) {
    // //         index = i
    // //         console.log('index', index)
    // //         console.log('item', item)
    // //         return item
    // //     }
    // // })

    // console.log('filteredObj', filteredObj);
    // console.log('arrayy', filteredTomorrow);
  };

  //Parse temperature
  const parseTemp = (p) => (p = parseFloat(p) - 273.15);

  return (
    <div>
      <h3>{countries.name}</h3>
      <p>
        {/* {filteredTodayFunc.map((p) => (
          <p>{p}</p>
        ))} */}
      </p>
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

<div>
      <div className='container'>
        {filteredToday.length > 0 ? (
          filteredToday.map((today, i) => (
            <CountryFilterItem
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
      <button className='button' onClick={() => tomorrowWeather()}>
        Tomorrow weather
      </button>
      </div>
      <br />

      <div className='container'>
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
    </div>
  );
};

export default CountryFilter;
