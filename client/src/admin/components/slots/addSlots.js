import React from "react";
import SideBar from "../../includes/sideBar";
import Header from "../../includes/header";
import Footer from "../../includes/footer";
import AddSlotsForm from "./addSlotsForm";
function AddSlots() {
  return (
    <div className="nk-app-root">
      <div className="nk-main ">
        <SideBar />
        <div className="nk-wrap ">
          <Header />

          <div className="nk-content ">
            <div className="container-fluid">
              <div className="nk-content-inner">
                <AddSlotsForm />
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default AddSlots;
