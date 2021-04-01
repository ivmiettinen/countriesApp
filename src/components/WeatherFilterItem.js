import React from 'react'
import WeatherItem from './WeatherItem'

const WeatherFilterItem = ({
    today,
    images,
    parseTemp,
    date,
}) => {
    return (
        <div>
            <WeatherItem
                date={date}
                images={images}
                temperature={parseTemp(today.main.temp).toFixed(1)}
                icon={today.weather.map((p) => p.icon)}
                description={today.weather.map((p) => p.description)}
                key={today.dt}
            />
        </div>
    )
}

export default WeatherFilterItem
