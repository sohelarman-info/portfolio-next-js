import React from "react";
import Menubar from "../Menubar/Menubar";
import Footer from "../Footer/Footer";

const Layout = ({ children }) => {
  return (
    <div>
      <Menubar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
