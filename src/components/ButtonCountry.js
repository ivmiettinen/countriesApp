import React from 'react'

const ButtonCountry = (props) => {
    // console.log('ButtonCountry props', props)

    return (
        <p>
            {props.countries.name}
            <button className='pick-btn' onClick={props.handleClick} value={props.countries.name}>
                Pick
            </button>
        </p>
    )
}

export default ButtonCountry
