import React from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import Sidebar from "../sidebar/sidebar";

const Layout = ({ children, data, color }) => {
  return (
    <div>
      <Header da={data} color={color} />
      <div>
        <Sidebar />
        {children}
      </div>
      <Footer da={data} />
    </div>
  );
};
export default Layout;
