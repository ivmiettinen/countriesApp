import React from 'react'
import '../index.css'

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
                    <div className='container'>
                        <div className='zone purple'>
                            <p>Time: {weather.list[0].dt_txt}</p>
                            <p>
                                {' '}
                                Temperature:{' '}
                                {temperatureConverter(
                                    weather.list[0].main.temp
                                ).toFixed(1)}{' '}
                                °C
                                {weather.list[0].weather[0].icon}{' '}
                            </p>
                            <img
                                src={
                                    images[
                                        `${weather.list[0].weather[0].icon}@2x.png`
                                    ]
                                }
                            />
                        </div>
                        <div className='zone purple'>
                            <p>Time: {weather.list[1].dt_txt}</p>
                            <p>
                                {' '}
                                Temperature:{' '}
                                {temperatureConverter(
                                    weather.list[1].main.temp
                                ).toFixed(1)}{' '}
                                °C{' '}
                            </p>
                            <img
                                src={
                                    images[
                                        `${weather.list[1].weather[0].icon}@2x.png`
                                    ]
                                }
                            />
                        </div>
                        <div className='zone purple'>
                            <p>Time: {weather.list[2].dt_txt}</p>
                            <p>
                                {temperatureConverter(
                                    weather.list[2].main.temp
                                ).toFixed(1)}{' '}
                                °C
                            </p>
                            <img
                                src={
                                    images[
                                        `${weather.list[2].weather[0].icon}@2x.png`
                                    ]
                                }
                            />
                        </div>
                        <div className='zone purple'>
                            <p>Time: {weather.list[3].dt_txt}</p>
                            <p>
                                {temperatureConverter(
                                    weather.list[3].main.temp
                                ).toFixed(1)}{' '}
                                °C
                            </p>
                            <img
                                src={
                                    images[
                                        `${weather.list[3].weather[0].icon}@2x.png`
                                    ]
                                }
                            />
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default CountryFilterItem
