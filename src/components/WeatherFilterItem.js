import React from 'react';
import WeatherItem from './WeatherItem';

const WeatherFilterItem = ({
  today,
  images,
  tomorrowWeather,
  parseTemp,
  date,
}) => {
  //   console.log('itemi:', weather.current);

  //   console.log('today', today);
  //   console.log(
  //     'today.main',
  //     today.map((p) => p.main.temp)
  //   );

  // //   console.log('fsdjaljasdlf', today.weather.map((p) => p.icon) )

  //   console.log('iconii', icon)

  //   console.log(
  //     'ikoni',
  //     today.weather.map((p) => p.icon)
  //   );
  //   console.log('imagesX', images);
  //   console.log(
  //     'date',
  //     today.map((p) => p.dt_txt)
  //   );

  //import whole imagefolder:

  //   const parseTemp = (p) => (p = parseFloat(p) - 273.15);

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
  );
};

export default WeatherFilterItem;
