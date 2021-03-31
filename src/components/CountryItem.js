import React from 'react'

const CountryItem = ({
    name,
    capital,
    population,
    flag,
    languages,
    currency,
    countries,
}) => {
    if (languages !== undefined) {
        return (
            <div>
                <h3>{name}</h3>
                <h4>Capital:</h4> <> {capital} </>
                <h4>Population:</h4> {population}
                <h4>Currencies: </h4>
                {currency.map((p) => {
                    return (
                        <li key={p.name}>
                            {' '}
                            {p.name} ({p.symbol}) 
                        </li>
                    )
                })}
                <h4>Languages:</h4>
                {languages.map((p) => {
                    return <li key={p.iso639_1}>{p.name}</li>
                })}
                <img
                    className='flagPicture'
                    src={flag}
                    alt='Country flag'
                ></img>
            </div>
        )
    } else {
        return (
            <div>
                <h3>{name}</h3>
                <p>Capital: {capital}</p>
                <p>Population: {population}</p>
                <p>Currencies: {currency}</p>

                <img
                    className='flagPicture'
                    src={flag}
                    alt='Country flag'
                ></img>
            </div>
        )
    }
}

export default CountryItem
