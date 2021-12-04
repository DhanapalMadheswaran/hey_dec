import React, { Component } from "react";
import SideBar from "./sideBar";
import Header from "./header";
import Footer from "./footer";
import ContentArea from "./contentArea";
import "./dashlite.css";
import "./style.css";
export default class BaseLayout extends Component {
  render() {
    return (
      <div className="nk-body bg-lighter npc-general has-sidebar">
        <div className="nk-app-root">
          <div className="nk-main ">
            <SideBar />
            <div className="nk-wrap ">
              {/* <Header />
            <ContentArea /> */}
              <Footer />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
