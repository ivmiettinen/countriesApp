import React from 'react'

const WeatherItem = ({
    temperature,
    icon,
    description,
    date,
    images,
    today,
}) => {
    return (
        <table className='zone purple' key={today}>
            <thead>
                <tr>
                    <th>{date}</th>
                </tr>

                <tr>
                    <th>{temperature}°c</th>
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
    )
}

export default WeatherItem
