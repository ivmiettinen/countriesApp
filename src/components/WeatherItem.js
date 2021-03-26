import React from 'react';

const WeatherItem = ({ temperature, icon, description, date }) => {
  console.log('Item propsit', temperature);
  console.log('icon', icon);
  return (
    <div className='zone purple'>
     <p>{date}</p>   
     <p>{description}</p> 
     <p>Temperature: {temperature}</p> 
     <p>icon: {icon}</p> 
      
      </div>
  );
};

export default WeatherItem;
