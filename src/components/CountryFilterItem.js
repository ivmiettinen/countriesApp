import React from 'react'

const CountryFilterItem = ({ weather, forecast }) => {
    //   console.log('itemi:', weather.current);

    function temperatureConverter(valNum) {
        valNum = parseFloat(valNum)
        return valNum - 273.15
    }

    return (
        <div>
            {weather.map((weather) => {
                return (
 
                        <div key={weather.city.id}>
                            <b>Temperature:</b>
                            <p>
                                {temperatureConverter(
                                    weather.list[0].main.temp
                                ).toFixed(2)}{' '}
                                celsius
                            </p>
                        </div>

                )
            })}
        </div>
    )
}

export default CountryFilterItem
