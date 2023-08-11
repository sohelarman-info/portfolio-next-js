import React from "react";
import Menubar from "../Menubar/Menubar";
import Footer from "../Footer/Footer";
import Copyright from "../Footer/Copyright";

const Layout = ({ children }) => {
  return (
    <div>
      <Menubar />
      {children}
      <Footer />
      <Copyright />
    </div>
  );
};

export default Layout;
