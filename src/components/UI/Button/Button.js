import React from "react";
import "./button.css";

const Button = (props) => {
  return (
    <button className="button" type={props.type} onClick={props.onClick}>{props.value}</button>

  );
};

export default Button;
