import React from "react";
import "./header.css";
const Header = (props) => {
  return (
    <div className="hh">
      <h1>this is header</h1>
      <h3 style={{ color: props.color }}>{props.da}</h3>
    </div>
  );
};
export default Header;
