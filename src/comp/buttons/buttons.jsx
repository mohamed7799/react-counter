import React from "react";

import { FaPlus, FaMinus } from "react-icons/fa";
import { GrPowerReset } from "react-icons/gr";
import "./buttons.scss";
const buttons = (props) => {
  return (
    <div className="btns">
      <FaPlus onClick={props.add} className=" btn btns__plus" />
      <FaMinus onClick={props.reset} className=" btn btns__reset" />
      <GrPowerReset onClick={props.sub} className=" btn btns__minus " />
    </div>
  );
};

export default buttons;
