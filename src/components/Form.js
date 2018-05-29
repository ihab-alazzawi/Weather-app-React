import React from 'react';

const Form = props => (
  <form onSubmit={props.getWeather}>
    <input type="text" name="city" placeholder="Search by City Name..." />
    <button>Get Weather</button>
  </form>
);

export default Form;
