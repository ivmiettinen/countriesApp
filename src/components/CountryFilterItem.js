import React from 'react'

const CountryFilterItem = ({ weather, forecast }) => {
    //   console.log('itemi:', weather.current);

    function temperatureConverter(valNum) {
        valNum = parseFloat(valNum)
        return valNum - 273.15
    }

    //import whole imagefolder:

    const images = importAll(
        require.context('./images', false, /\.(png|jpe?g|svg)$/)
    )

    function importAll(r) {
        let images = {}
        r.keys().map((item, index) => {
            images[item.replace('./', '')] = r(item)
        })
        return images
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
                        <p>{weather.list[0].weather[0].icon} </p>
                        <br />
                        <img
                            src={
                                images[
                                    `${weather.list[0].weather[0].icon}@2x.png`
                                ]
                            }
                        />
                    </div>
                )
            })}
        </div>
    )
}

export default CountryFilterItem
