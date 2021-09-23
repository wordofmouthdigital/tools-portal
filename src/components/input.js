import React from 'react'

export const Input = ({ value, handleChange, type, label, placeholder }) => (
  <>
    <label>{ label }</label>
    <input
      value={ value }
      onChange={ (e) => handleChange(e.target.value) } 
      type={ type }
      placeholder={ label }
    />
  </>
);
