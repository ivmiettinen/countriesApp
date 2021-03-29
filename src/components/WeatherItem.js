import React from 'react';

const WeatherItem = ({ temperature, icon, description, date, images, today }) => {
  // console.log('Item propsit', temperature);
  // console.log('date', date)
  // console.log('icon', icon);
  // console.log('images', images)
  // console.log('milta nayttaa', `${icon}@2x.png`)

  return (
    <table className='zone purple' key={today}>
      <thead>
      <tr><th>{date}</th></tr>
      
      <tr><th>{temperature}°c</th></tr>
      <tr><th><img className='img' src={images[`${icon}@2x.png`]} title={description} /></th></tr>
      </thead>
    </table>
  );
};

// {temperatureConverter(weather.list[0].main.temp).toFixed(1)}

export default WeatherItem;

{
  /* <img src={images[`${weather.list[2].weather[0].icon}@2x.png`]} />
   */
}
//  {temperatureConverter(weather.list[0].main.temp).toFixed(1)} °C
