import React from 'react';
import WeatherItem from './WeatherItem';

const Weather = ({ tomorrow, date, images, parseTemp }) => {
  // console.log('tomorrow', tomorrow);
  // console.log('date', date);
  // console.log('typee', typeof tomorrow);

  
  // console.log('images', images)

  return (
    <div >
      <WeatherItem
        date={date}
        images={images}
        temperature={parseTemp(tomorrow.main.temp).toFixed(1)}
        icon={tomorrow.weather.map((p) => p.icon)}
        description={tomorrow.weather.map((p) => p.description)}
        key={tomorrow.dt}
      />
    </div>
  );
};

// {parseTemp({ temperature })}<

export default Weather;

// {Object.keys(tomorrow).map((keyName, i) => (
//     <li className='travelcompany-input' key={i}>
//       <span className='input-label'>
//         key: {i} Name: {tomorrow[keyName]}
//       </span>
//     </li>
//   ))}
