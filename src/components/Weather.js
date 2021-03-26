import React from 'react';
import WeatherItem from './WeatherItem';

const Weather = ({ tomorrow, date }) => {
  // console.log('tomorrow', tomorrow);
  // console.log('date', date);
  // console.log('typee', typeof tomorrow);

  return (
    <div>
    
      <WeatherItem
      date={date}
        temperature={tomorrow.main.temp}
        icon={tomorrow.weather.map((p) => p.icon)}
        description={tomorrow.weather.map((p) => p.description)}
        key={tomorrow.dt}
      />
    </div>
  );
};

export default Weather;

// {Object.keys(tomorrow).map((keyName, i) => (
//     <li className='travelcompany-input' key={i}>
//       <span className='input-label'>
//         key: {i} Name: {tomorrow[keyName]}
//       </span>
//     </li>
//   ))}
