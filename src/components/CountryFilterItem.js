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

    let mappiLista = []

    let mappaus = weather.map((p) => {
        console.log('p')
        console.log('length', p.length)

        mappiLista.push(p.list)

        return p.list
    })

    console.log('mappaus', mappaus)

    let arrayy = []

    var index = -1
    var val = '2021-03-26'

    var filteredObj = mappiLista.filter(function (item, i) {
        index = i

        console.log('item.length', item.length)

        for (i = 0; i < item.length; i++) {
            console.log('', item)
            console.log('[i]', item[i])

            console.log('[index]', item[index])
            console.log('[index].dt_txt', item[index].dt_txt)

            if (item[i].dt_txt.includes(val)) {
                console.log(
                    'item[index].dt_txt.includes(val)',
                    item[index].dt_txt.includes(val)
                )
                index = i
                console.log('2index', index)
                console.log('2item', item)
                console.log('3item', item[index].dt_txt)
                arrayy.push(item[i].dt_txt)
            }
        }
    })
    // // var filteredObj = mappaus.filter(function (item, i) {
    // //     if (item.dt_txt.includes(val)) {
    // //         index = i
    // //         console.log('index', index)
    // //         console.log('item', item)
    // //         return item
    // //     }
    // // })

    console.log('filteredObj', filteredObj)
    console.log('arrayy', arrayy)

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
