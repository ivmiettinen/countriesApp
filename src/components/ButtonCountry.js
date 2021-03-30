import React from 'react'

const ButtonCountry = (props) => {
    // console.log('ButtonCountry props', props)

    return (
        <p>
            {props.countries.name}
            <button onClick={props.handleClick} value={props.countries.name}>
                Pick
            </button>
        </p>
    )
}

export default ButtonCountry
