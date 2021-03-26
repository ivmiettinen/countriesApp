import React from 'react';

const WeatherItem = ({
  temperature,
  icon,
  description,
  date,
  images,

}) => {
  console.log('Item propsit', temperature);
  console.log('date', date)
  console.log('icon', icon);
  // console.log('images', images)
  // console.log('milta nayttaa', `${icon}@2x.png`)


  return (
    <div className='zone purple'>
      <p>{date}</p>
      <p>{description}</p>
      <p>Temperature: {temperature}</p>
      <img src={images[`${icon}@2x.png`]} />

    </div>
  );
};

// {temperatureConverter(weather.list[0].main.temp).toFixed(1)}

export default WeatherItem;

{
  /* <img src={images[`${weather.list[2].weather[0].icon}@2x.png`]} />
   */
}
//  {temperatureConverter(weather.list[0].main.temp).toFixed(1)} °C
