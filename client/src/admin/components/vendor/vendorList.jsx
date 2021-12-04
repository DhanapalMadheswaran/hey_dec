import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import SideBar from "../../includes/sideBar";
import Header from "../../includes/header";
import Footer from "../../includes/footer";

import VendorTable from "./VendorTable";

export default function VendorList () {
  
    return (
      <div className="nk-app-root">
        <div className="nk-main ">
          <SideBar />
          <div className="nk-wrap ">
            <Header />

            <div className="nk-content ">
              <div className="container-fluid">
                <div className="nk-content-inner">
                  <VendorTable />
                </div>
              </div>
            </div>
            <Footer />
          </div>
        </div>
      </div>
    );
  
}
