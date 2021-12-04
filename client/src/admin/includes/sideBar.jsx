import React from "react";

import { Link } from "react-router-dom";

export default function SideBar() {
  return (
    <div
      className="nk-sidebar nk-sidebar-fixed is-dark "
      data-content="sidebarMenu"
    >
      <div className="nk-sidebar-element nk-sidebar-head">
        <div className="nk-menu-trigger">
          <a
            href="#!"
            className="nk-nav-toggle nk-quick-nav-icon d-xl-none"
            data-target="sidebarMenu"
          >
            <em className="icon ni ni-arrow-left"></em>
          </a>
          <a
            href="#!"
            className="nk-nav-compact nk-quick-nav-icon d-none d-xl-inline-flex"
            data-target="sidebarMenu"
          >
            <em className="icon ni ni-menu"></em>
          </a>
        </div>
        <div className="nk-sidebar-brand">
          <a href="html/index.html" className="logo-link nk-sidebar-logo">
            <img
              className="logo-light logo-img"
              src="./images/logo.png"
              alt="logo"
            />
            <img
              className="logo-dark logo-img"
              src="./images/logo-dark.png"
              alt="logo-dark"
            />
          </a>
        </div>
      </div>
      <div className="nk-sidebar-element nk-sidebar-body">
        <div className="nk-sidebar-content">
          <div className="nk-sidebar-menu" data-simplebar>
            <ul className="nk-menu">
              <li className="nk-menu-item">
                <Link to="/dashboard" className="nk-menu-link dash-list">
                  <span className="nk-menu-icon">
                    <em className="icon ni ni-dashlite"></em>
                  </span>
                  <span className="nk-menu-text"> Dashboard</span>
                </Link>
              </li>

              <li className="nk-menu-item">
                <Link to="/category" className="nk-menu-link dash-list">
                  <span className="nk-menu-icon">
                    <em className="icon ni ni-bitcoin-cash"></em>
                  </span>
                  <span className="nk-menu-text"> Category</span>
                </Link>
              </li>
              <li className="nk-menu-item">
                <Link to="/slider" className="nk-menu-link dash-list">
                  <span className="nk-menu-icon">
                    <em className="icon ni ni-layers"></em>
                  </span>
                  <span className="nk-menu-text"> Slider</span>
                </Link>
              </li>
              <li className="nk-menu-item">
                <Link to="/banner" className="nk-menu-link dash-list">
                  <span className="nk-menu-icon">
                    <em className="icon ni ni-layers"></em>
                  </span>
                  <span className="nk-menu-text"> Banner</span>
                </Link>
              </li>
              <li className="nk-menu-item">
                <Link to="/add_slots" className="nk-menu-link dash-list">
                  <span className="nk-menu-icon">
                    <em className="icon ni ni-layers"></em>
                  </span>
                  <span className="nk-menu-text"> Add Slots</span>
                </Link>
              </li>

              <li className="dropdown user-dropdown nk-menu-item">
                <a href="/#" className="dropdown-toggle" data-toggle="dropdown">
                  <span class="nk-menu-icon">
                    <em class="icon ni ni-tile-thumb vendor-icon"></em>
                  </span>
                  <span class="nk-menu-heading">Vendor Master</span>
                </a>
                <ul className="nk-menu-sub">
                  <div className="dropdown-menu dropdown-menu-md dropdown-menu-right dropdown-menu-s1 drop-align">
                    <div className="dropdown-inner">
                      <ul className="link-list add-vendor">
                        <li className="nk-menu-item">
                          <Link
                            to="/addvendor"
                            className="nk-menu-link dash-list"
                          >
                            <span className="nk-menu-icon">
                              <em className="icon ni ni-layers"></em>
                            </span>
                            <span className="nk-menu-text"> Add Vendor</span>
                          </Link>
                        </li>
                        <li className="nk-menu-item">
                          <Link
                            to="/vendorList"
                            className="nk-menu-link dash-list"
                          >
                            <span className="nk-menu-icon">
                              <em className="icon ni ni-layers"></em>
                            </span>
                            <span className="nk-menu-text">Vendor List</span>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
