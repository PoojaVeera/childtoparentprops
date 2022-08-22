import React from "react";
import "./sidebar.css";
import { Link } from "react-router-dom";
import pooh from "../../assets/pooh.jpg";

const Sidebar = ({ childToParent }) => {
  const info = "data in child";

  return (
    <div className="ss">
      <img src={pooh} alt="pooh"></img>
      <p>this is sidebar </p>
      <ul className="pp">
        <li>
          <Link to="/">home</Link>
        </li>
        <li>
          <Link to="/about">about</Link>
        </li>
        <li>
          <Link to="/submit">submit</Link>
        </li>
      </ul>
      <p>this is Child</p>
      <button onClick={() => childToParent(info)}>click me</button>
    </div>
  );
};

export default Sidebar;
