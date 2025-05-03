import React from "react";
import Home from "../pages/Home";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <Outlet>
        <Home />
      </Outlet>
      <Footer />
    </div>
  );
};

export default Layout;
