import React, { useState, useRef } from "react";
import PropTypes from 'prop-types';

const Slider = ({ getValue, name, min, max, reduce = false }) => {
  const [value, setValue] = useState(0.1);
  const minValRef = useRef(null);

  const handleSlider = (e) => {
    const value = reduce ? 10 : 1
    setValue(e.target.value)
    getValue(e.target.value / 10)
    e.target.value = value.toString();
  }

  return (
    <div>
      <label htmlFor="slider">
        {name}:
        <input
          id="slider"
          type={'range'}
          min={min}
          max={max}
          value={value}
          ref={minValRef}
          onChange={handleSlider}
        />
      </label>
    </div>
  )
}

Slider.propTypes = {
  getvalue: PropTypes.func,
  name: PropTypes.string.isRequired,
  min: PropTypes.string.isRequired,
  max: PropTypes.string.isRequired,
  reduce: PropTypes.bool
}

export default Slider;