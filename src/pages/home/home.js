import React from "react";
import Layout from "../../components/layout/layout";
import Sidebar from "../../components/sidebar/sidebar";
import "./home.css";
const Page1 = () => {
  function childToParent(display) {
    alert(display);
  }
  return (
    <div>
      <Layout data="homepage" color="red">
        <div className="home">
          <p>this is home page</p>
        </div>
      </Layout>
      <Sidebar childToParent={childToParent} />
    </div>
  );
};
export default Page1;
