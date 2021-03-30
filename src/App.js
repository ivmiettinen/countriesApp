import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ButtonCountry from './components/ButtonCountry'
import WeatherFilter from './components/WeatherFilter'
import CountryItem from './components/CountryItem'

import './App.css'

function App() {
    const [countries, setCountires] = useState([])
    const [searchTerm, setSearchTerm] = useState('')
    const [showAll, setShowall] = useState(true)
    const [oneButtonCountry, setoneButtonCountry] = useState([''])
    const [onlyOneCountry, setOnlyOneCountry] = useState([])

    //Fetch countries:
    useEffect(() => {
        axios.get('https://restcountries.eu/rest/v2/all').then((response) => {
            // console.log('data:', response.data);

            setCountires(response.data)
        })
    }, [])

    const handleCountryFilter = (e) => {
        setSearchTerm(e.target.value)
    }

    const handleCountryFilter2 = (e) => {
        setSearchTerm(e.target.value)
        setShowall(true)
        setoneButtonCountry([])
        setOnlyOneCountry([])
    }

    const onKeyDownFunc = (e) => {
        // console.log('onKeyDownFunc key', e.keyCode);

        if (e.keyCode === 8 && results.length <= 10 && results.length > 1) {
            setSearchTerm(e.target.value)
            setShowall(!showAll)

            setoneButtonCountry([])
            setOnlyOneCountry([])
        } else {
            setSearchTerm(e.target.value)
            setShowall(true)
        }
    }

    const oneCountry = (e) => {
        // console.log('value:', e.target.value);

        setShowall(!showAll)

        const userPickNation = results.find(
            ({ name }) => name === e.target.value
        )

        setOnlyOneCountry(onlyOneCountry.concat(userPickNation))

        // console.log('capital:', onlyOneCountry.capital);

        setoneButtonCountry(oneButtonCountry.concat(e.target.value))
    }

    const results = !searchTerm
        ? countries
        : countries.filter((param) =>
              param.name.toLowerCase().includes(searchTerm.toLocaleLowerCase())
          )

    // console.log('results:', results.length);

    let buttoni = (
        <button value={countries.name} onClick={oneCountry}>
            Show
        </button>
    )

    if (results.length > 10) {
        return (
            <div>
                Find countries:
                <input
                    autoFocus='autofocus'
                    value={searchTerm}
                    onChange={handleCountryFilter}
                    placeholder='search countries'
                    onKeyDown={onKeyDownFunc}
                ></input>
                <p>Too many matches, specify another filter</p>
            </div>
        )
    }

    if (results.length <= 10 && results.length > 1) {
        return (
            <>
                {showAll === true ? (
                    <div>
                        Find countries:{' '}
                        <input
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
                ) : (
                    <div>
                        Find countries:{' '}
                        <input
                            autoFocus='autofocus'
                            value={searchTerm}
                            onChange={handleCountryFilter}
                            placeholder='search countries'
                            onKeyDown={onKeyDownFunc}
                        ></input>
                        {/* <div>
                            {results.map((countries) => (
                                <ButtonCountry
                                    buttoni={buttoni}
                                    handleClick={oneCountry}
                                    countries={countries}
                                    key={countries.numericCode}
                                />
                            ))}
                        </div> */}
                        <div>
                            {onlyOneCountry.map((countries) => (
                                <CountryItem
                                    countries={countries}
                                    name={countries.name}
                                    capital={countries.capital}
                                    population={countries.population}
                                    flag={countries.flag}
                                    languages={countries.languages}
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
                        <button onClick={handleCountryFilter2}>Go back</button>
                    </div>
                )}
            </>
        )
    }

    if (results.length === 1) {
        return (
            <div>
                Find countries:{' '}
                <input
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
                            key={countries.numericCode}
                        />
                    ))}
                    {results.map((countries) => (
                        <WeatherFilter
                            countries={countries}
                            key={countries.numericCode}
                        />
                    ))}
                </div>
                <button onClick={handleCountryFilter2}>Go back</button>
            </div>
        )
    }

    if (results.length === 0) {
        return (
            <div>
                Find countries:
                <input
                    autoFocus='autofocus'
                    value={searchTerm}
                    onChange={handleCountryFilter}
                    placeholder='search countries'
                    onKeyDown={onKeyDownFunc}
                ></input>
                <p>No matches. Check your spelling.</p>
            </div>
        )
    }

    return (
        <div>
            Find countries:{' '}
            <input
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
    )
}

export default App
