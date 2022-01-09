import React from "react";

const options = [
  {
    value: 'sine',
    name: 'Sine'
  },
  {
    value: 'triangle',
    name: 'Triangle'
  },
  {
    value: 'square',
    name: 'Square'
  },
  {
    value: 'sawtooth',
    name: 'Sawtooth'
  },
]
const Dropdown = ({ getValue }) => {

  const handleDropdown = (e) => {
    getValue(e.target.value)
  }

  return (
    <div>
      <select
        onChange={handleDropdown}
      >
        {options.map((el, idx) => (
          <option key={idx} value={el.value}>{el.name}</option>
        ))}
      </select>
    </div>
  )
}

export default Dropdown;