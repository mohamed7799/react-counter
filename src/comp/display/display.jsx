import React from "react";
import "./display.scss";
const display = (props) => {
  return (
    <p style={{ color: props.color }} className="display">
      {props.value}
    </p>
  );
};

export default display;
