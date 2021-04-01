import React from 'react'


const CountryItem = ({
    name,
    capital,
    population,
    flag,
    languages,
    currency,
    countries,
}) =>
    // <table className='zone purple' key={today}>
    // <thead>
    // <tr><th>{date}</th></tr>

    // <tr><th>{temperature}°c</th></tr>
    // <tr><th><img className='img' src={images[`${icon}@2x.png`]} title={description} /></th></tr>
    // </thead>
    // </table>

    {
        if (languages !== undefined) {
            return (
                <div className='countryItemDiv'>
                    
                    <h2 className='CountryItemHeader'>
                    <p>{name}</p>
                  
                        
                    </h2>
                    <p>
                    <img
                            className='flagPicture'
                            src={flag}
                            alt='Country flag'
                        ></img>
                       </p>
                    <table className='countryItemTable'>
                        <thead className='countryThead'>
                            <tr  className='countryTr'>
                                <th>Capital:</th>
                                <th>Population:</th>
                                <th>Currencies:</th>
                                <th>Languages:</th>
                            </tr>
                            <tr>
                                <td > {capital}</td>
                                <td > {population}</td>
                                {currency.map((p) => {
                                    return (
                                        <td  key={p.name}>
                                            {' '}
                                            {p.name} ({p.symbol})
                                        </td>
                                    )
                                })}
                                <td  className='countryTd'>
                                {languages.map((p) => {
                                    if(languages.length === 1){
                                    return <span key={p.iso639_1}className='countryTd'>{p.name}</span>
                                }
                                else{
                                    return <span className='countryTd' key={p.iso639_1}>-{p.name}
                                    <br></br> </span>
                                }
                                })}
                                </td>
                            </tr>
                        </thead>
                    </table>
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
