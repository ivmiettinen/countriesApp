import React from 'react';

const ButtonCountry = (props) => {
  console.log('propseja', props)


  return (
    <p>
      {props.countries.name}
      <button onClick={props.handleClick} value={props.countries.name}>
        Klikkaa
      </button>
    </p>
  );
};

export default ButtonCountry;
