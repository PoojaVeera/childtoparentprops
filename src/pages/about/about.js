import React from "react";
import Layout from "../../components/layout/layout";
import "./about.css";
const Page2 = () => {
  return (
    <div>
      <Layout data="about page" color="blue">
        <div className="about">
          <h1>this is about</h1>
          <p> this is page2</p>
        </div>
      </Layout>
    </div>
  );
};
export default Page2;
