import React from 'react'

const ButtonCountry = (props) => {
    // console.log('ButtonCountry props', props)

    return (
        <p>
            {props.countries.name}
            <button className={props.className} onClick={props.onClick} value={props.countries.name}>
               {props.children}
            </button>
        </p>
    )
}

export default ButtonCountry
