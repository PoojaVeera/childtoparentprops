import React, { useState } from "react";
import Layout from "../../components/layout/layout"; //pages assignment
import Sidebar from "../../components/sidebar/sidebar";
import "./home.css";
const Page1 = () => {
  //this is for useState assignment
  const [name, output] = useState("");
  const handleChange = (events) => {
    output(events.target.value);
  };

  // this is for child to parent assignment
  const ChildToParent = (view) => {
    console.log(view);

    // const [propsdisplay, setpropview] = useState(view);
  };

  return (
    <div>
      <Layout data="homepage" color="red">
        <div className="home">
          <h3>This is home page</h3>
          <label>Please enter a name : </label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={handleChange}
            value={name}
          ></input>
          <h3>Name:{name}</h3>
          {/* <p>display:{propview}</p> */}
        </div>
      </Layout>
      <Sidebar ChildToParent={ChildToParent} />
    </div>
  );
};
export default Page1;
