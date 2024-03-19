
// Layout.jsx
import React from "react";
import Header from '../header/Header'
import Footer from '../footer/Footer'
import Routers from "../../routers/Routers";
import Sidebar from "../../admin/component/Sidebar";
import AdminRouters from "../../routers/AdminRouters";
import './layout.css'

const Layout = () => {
  return (
    <>
      <div>
        <Header />
        <div>
          <Routers />
        </div>
        {/* <Footer /> */}
      </div>

      {/* admin email va passport to'g'ri bolgandagina bu ishlasin */}
      
        <div className="App">
          <Sidebar />
          <div className="content">
            <AdminRouters />
          </div>
        </div>
    </>
  );
};

export default Layout; 
