import React from "react";
import './Input.css';

const Input = ({ id, label, data, setData, type = "text", error }) => (
  <label htmlFor={id} className="form__label">
    {label}
    <input
      type={type}
      name={id}
      id={id}
      value={data[id]}
      onChange={(event) => setData({ ...data, [id]: event.target.value })}
      className="form__input"
      style={{borderColor: error && 'red'}}
      min="0"
    />
  </label>
);

export default Input;
