import React from "react";
import "../button.css";

const Button = (props) => {
  return (
    <div className="button">
      <button type={props.type}>{props.value}</button>
    </div>
  );
};

export default Button;
