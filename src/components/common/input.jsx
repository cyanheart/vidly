import React from "react";
const Input = ({ name, label, error, ...props }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        {...props}
        name={name}
        id={name}
        className="form-control"
        placeholder={name}
        autoComplete="off"
      />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Input;
