import React from "react";

export default function Select({
  label,
  id,
  onChange,
  name,
  value,
  error,
  options,
  placeholder,
}) {
  return (
    <div className="input-container">
      <label htmlFor={id}>{label}</label>
      <select id={id} name={name} value={value} onChange={onChange}>
        <option value="" defaultValue={placeholder}>
          {placeholder}
        </option>

        {options.map((op,i) => {
          return <option value={op} key={i}>{op}</option>;
        })}
      </select>
      <p className="error">{error}</p>
    </div>
  );
}
