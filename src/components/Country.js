import React from 'react'

const Country = ({ name, capital, population, flag, languages }) => {
    return (
        <div>
            <h3>{name}</h3>
            <p></p>
            <p>Capital: {capital}</p>
            <p>Population: {population}</p>

            <h4>Languages:</h4>

            {languages.map((p) => {
                return <li key={p.iso639_1}>{p.name}</li>
            })}

            <img className='flagPicture' src={flag} alt='Country flag'></img>
        </div>
    )
}

export default Country
