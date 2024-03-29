import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ButtonCountry from './components/ButtonCountry';
import WeatherFilter from './components/WeatherFilter';
import CountryItem from './components/CountryItem';

function App() {
  const [countries, setCountires] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [showAll, setShowall] = useState(true);
  const [oneButtonCountry, setoneButtonCountry] = useState(['']);
  const [onlyOneCountry, setOnlyOneCountry] = useState([]);

  //Fetch countries:
  useEffect(() => {
    axios
      .get('https://restcountries.com/v2/all')
      .then((response) => {
        setCountires(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleCountryFilter = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleBackPress = (e) => {
    setSearchTerm(e.target.value);
    setShowall(true);
    setoneButtonCountry([]);
    setOnlyOneCountry([]);
  };

  //Handle user input when pressing delete button:

  const onKeyDownFunc = (e) => {
    if (e.keyCode === 8) {
      setSearchTerm(e.target.value);
      setShowall(true);
      setoneButtonCountry([]);
      setOnlyOneCountry([]);
    }
  };

  const oneCountry = (e) => {
    setShowall(false);
    const userPickNation = results.find(({ name }) => name === e.target.value);
    setOnlyOneCountry(onlyOneCountry.concat(userPickNation));
    setoneButtonCountry(oneButtonCountry.concat(e.target.value));
  };

  const results = !searchTerm
    ? countries
    : countries.filter((country) =>
        country.name.toLowerCase().includes(searchTerm.toLocaleLowerCase())
      );

  if (results.length > 10) {
    return (
      <div>
        <div className='findCountries'>
          <div className='countryApp'>Country App</div>
          <div className='findCountriesDiv1'>Find countries: </div>
          <input
            size='16'
            autoFocus='autofocus'
            value={searchTerm}
            onChange={handleCountryFilter}
            placeholder='Enter the country...'
            onKeyDown={onKeyDownFunc}
          ></input>

          <br />
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
              <div className='findCountriesDiv1'>Find countries: </div>
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
                  <ButtonCountry
                    onClick={oneCountry}
                    className='pick-btn'
                    countries={countries}
                    key={countries.numericCode}
                  >
                    Pick
                  </ButtonCountry>
                ))}
              </div>
            </div>
          </div>
        ) : (
          //When user clicks button for oneCountry, return this:
          <div className='findCountries'>
            <div className='countryApp'>Country App</div>
            <div className='findCountriesDiv1'>
              Find countries: <br />
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
                <ButtonCountry
                  countries={countries}
                  onClick={handleBackPress}
                  className='backButton'
                >
                  Go back
                </ButtonCountry>
              </div>
            </div>
          </div>
        )}
      </>
    );
  }

  if (results.length === 1) {
    return (
      //When user types countries name directly to input, return this:
      <div className='findCountries'>
        <div className='countryApp'>Country App</div>
        <div className='findCountriesDiv1'>Find countries: </div>
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
          <ButtonCountry
            countries={countries}
            onClick={handleBackPress}
            className='backButton'
          >
            Go back
          </ButtonCountry>
        </div>
      </div>
    );
  }

  if (results.length === 0) {
    return (
      <div className='findCountries'>
        <div className='countryApp'>Country App</div>
        <div className='findCountriesDiv1'>Find countries: </div>
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
}

export default App;
