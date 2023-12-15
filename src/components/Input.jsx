import React from "react";
import "./Input.css";

function Input({
  type,
  name,
  labelText,
  placeholder,
  value,
  onChange,
  checked,
}) {
  if (type === "checkbox") {
    return (
      <label className="label">
        <input
          className="checkbox"
          type={type}
          name={name}
          checked={checked}
          onChange={onChange}
        />
        {labelText}
      </label>
    );
  }

  return (
    <label className="label">
      <input
        className="input"
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        autoComplete="on"
      />
    </label>
  );
}

export default Input;
