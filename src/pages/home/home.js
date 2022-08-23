import React, { useState } from "react";
import Layout from "../../components/layout/layout"; //pages assignment
import Sidebar from "../../components/sidebar/sidebar";
import "./home.css";
const Page1 = () => {
  //this is for useState assignment
  const [name, output] = useState("");
  const handleChange = (events) => {
    output(events.target.value);
    console.log("value is", events.target.value);
  };

  // this is for child to parent assignment
  const ChildToParent = (view) => {
    console.log(view);
    // const [propsdisplay, setpropview] = useState(view);
    const propsdisplay = view;
    console.log("this is from inside propsdisplay" + propsdisplay);
  };

  return (
    <div>
      <Layout data="homepage" color="red">
        <div className="home">
          <label>please enter a name </label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={handleChange}
            value={name}
          ></input>
          <h3>Name:{name}</h3>
          {/* <p>display:{propview}</p> */}
          <p>this is home page</p>
        </div>
      </Layout>
      <Sidebar ChildToParent={ChildToParent} />
    </div>
  );
};
export default Page1;
