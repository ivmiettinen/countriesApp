import React from 'react';

const CountriesFilter = (props) => {


  return (
    <p>
      {props.countries.name}
      <button onClick={props.handleClick} value={props.countries.name}>
        Klikkaa
      </button>
    </p>
  );
};

export default CountriesFilter;
