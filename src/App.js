import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ButtonCountry from './components/ButtonCountry';
import WeatherFilter from './components/WeatherFilter';
import CountryItem from './components/CountryItem';

import './App.css';

function App() {
  const [countries, setCountires] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [showAll, setShowall] = useState(true);
  const [oneButtonCountry, setoneButtonCountry] = useState(['']);
  const [onlyOneCountry, setOnlyOneCountry] = useState([]);

  //Fetch countries:
  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then((response) => {
        // console.log('data:', response.data);

        setCountires(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleCountryFilter = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleCountryFilter2 = (e) => {
    setSearchTerm(e.target.value);
    setShowall(true);
    setoneButtonCountry([]);
    setOnlyOneCountry([]);
  };

  const onKeyDownFunc = (e) => {
    // console.log('onKeyDownFunc key', e.keyCode);

    if (e.keyCode === 8 && results.length <= 10 && results.length > 1) {
      setSearchTerm(e.target.value);
      setShowall(!showAll);

      setoneButtonCountry([]);
      setOnlyOneCountry([]);
    } else {
      setSearchTerm(e.target.value);
      setShowall(true);
    }
  };

  const oneCountry = (e) => {
    // console.log('value:', e.target.value);

    setShowall(!showAll);

    const userPickNation = results.find(({ name }) => name === e.target.value);

    setOnlyOneCountry(onlyOneCountry.concat(userPickNation));

    // console.log('capital:', onlyOneCountry.capital);

    setoneButtonCountry(oneButtonCountry.concat(e.target.value));
  };

  const results = !searchTerm
    ? countries
    : countries.filter((param) =>
        param.name.toLowerCase().includes(searchTerm.toLocaleLowerCase())
      );

  // console.log('results:', results.length);

  let buttoni = (
    <button value={countries.name} onClick={oneCountry}>
      Show
    </button>
  );

  if (results.length > 10) {
    return (
      <div>
        <div className='findCountries'>
          <div className='countryApp'>Country App</div>
          <div className='findCountriesDiv1'>
          Find countries:{' '}</div>
         <input
              size='16'
              autoFocus='autofocus'
              value={searchTerm}
              onChange={handleCountryFilter}
              placeholder='Enter the country...'
              onKeyDown={onKeyDownFunc}
            ></input>
          
          <br/>
          <p className='findCountriesDiv2'>
          Too many matches, write the name of the country more accurately...
          </p>
        </div>
      </div>
    );
  }

  if (results.length <= 10 && results.length > 1) {
    return (
      <>
        {showAll === true ? (
          <div className='findCountries'>
            <div className='countryApp'>Country App</div>
            <div>
            <div className='findCountriesDiv1'>
              Find countries:{' '}
        </div>
                <input
                  size='16'
                  autoFocus='autofocus'
                  value={searchTerm}
                  onChange={handleCountryFilter}
                  placeholder='search countries'
                  onKeyDown={onKeyDownFunc}
                ></input>
             
              <div>
                {results.map((countries) => (
                  <ButtonCountry
                    buttoni={buttoni}
                    handleClick={oneCountry}
                    countries={countries}
                    key={countries.numericCode}
                  />
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className='findCountries'>
            <div className='countryApp'>Country App</div>
            <div className='findCountriesDiv1'>
            Find countries:{' '}
          <br/>
              <div>
                <input
                  size='16'
                  autoFocus='autofocus'
                  value={searchTerm}
                  onChange={handleCountryFilter}
                  placeholder='search countries'
                  onKeyDown={onKeyDownFunc}
                ></input>
              </div>
              <div>
                {onlyOneCountry.map((countries) => (
                  <CountryItem
                    countries={countries}
                    name={countries.name}
                    capital={countries.capital}
                    population={countries.population}
                    flag={countries.flag}
                    languages={countries.languages}
                    currency={countries.currencies}
                    key={countries.numericCode}
                  />
                ))}
                {onlyOneCountry.map((countries) => (
                  <WeatherFilter
                    countries={countries}
                    key={countries.numericCode}
                  />
                ))}
              </div>
              <div>
                <button onClick={handleCountryFilter2}>Go back</button>
              </div>
            </div>
          </div>
        )}
      </>
    );
  }

  if (results.length === 1) {
    return (
      <div className='findCountries'>
        <div className='countryApp'>Country App</div>
        <div className='findCountriesDiv1'>
              Find countries:{' '}
        </div>
          
        <input
          size='16'
          autoFocus='autofocus'
          value={searchTerm}
          onChange={handleCountryFilter}
          placeholder='search countries'
          onKeyDown={onKeyDownFunc}
        ></input>
        <div className='container2'>
          {results.map((countries) => (
            <CountryItem
              countries={countries}
              name={countries.name}
              capital={countries.capital}
              population={countries.population}
              flag={countries.flag}
              languages={countries.languages}
              currency={countries.currencies}
              key={countries.numericCode}
            />
          ))}
        </div>
        <div>
          {results.map((countries) => (
            <WeatherFilter countries={countries} key={countries.numericCode} />
          ))}
        </div>
        <div>
          <button className='backButton' onClick={handleCountryFilter2}>
            Go back
          </button>
        </div>
      </div>
    );
  }

  if (results.length === 0) {
    return (
      <div className='findCountries'>
          <div className='countryApp'>Country App</div>
       <div className='findCountriesDiv1'>
              Find countries:{' '}
        </div>
        <input
          size='16'
          autoFocus='autofocus'
          value={searchTerm}
          onChange={handleCountryFilter}
          placeholder='search countries'
          onKeyDown={onKeyDownFunc}
        ></input>
        <p className='findCountriesDiv2'>No matches. Check your spelling.</p>
      </div>
    );
  }

  return (
    <div className='findCountriesDiv'>
      <div className='findCountriesDiv1'></div>
      Find countries:{' '}
    
      <input
        size='10'
        autoFocus='autofocus'
        value={searchTerm}
        onChange={handleCountryFilter}
        placeholder='search countries'
        onKeyDown={onKeyDownFunc}
      ></input>
      <h3>Countries</h3>
      <div>
        {results.map((countries) => (
          <ButtonCountry
            countries={countries}
            languages={countries.languages}
            key={countries.numericCode}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
