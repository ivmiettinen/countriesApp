import React from 'react';

const WeatherItem = ({ temperature, icon, description, date, images }) => {
  return (
    <table className='zone purple' key={date}>
      <thead>
        <tr>
          <th>{date}</th>
        </tr>

        <tr className='temperature'>
          <th className='temperature1'>{temperature}°c</th>
        </tr>
        <tr>
          <th className='weatherItemPic'>
            <img
              className='img'
              src={images[`${icon}@2x.png`]}
              title={description}
              alt='weatherPicture'
            />
          </th>
        </tr>
      </thead>
    </table>
  );
};

export default WeatherItem;
