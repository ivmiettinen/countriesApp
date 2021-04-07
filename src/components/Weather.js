import React from 'react';
import WeatherItem from './WeatherItem';

const Weather = ({ weather, date, images, parseTemp }) => {
  // console.log('weather', weather);
  // console.log('date', date);
  // console.log('typee', typeof tomorrow);

  // console.log('images', images)

  return (
  
    <div>
      <WeatherItem
        date={date}
        images={images}
        temperature={parseTemp(weather.main.temp).toFixed(1)}
        icon={weather.weather.map((p) => p.icon)}
        description={weather.weather.map((p) => p.description)}
        key={weather.dt}
      />
    </div>
  );
};

export default Weather;
