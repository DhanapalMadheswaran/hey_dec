import React, { Component } from "react";
export default class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {},
    };
  }

  componentDidMount() {
    const storedData = JSON.parse(localStorage.getItem("profileData"));

    this.setState({ ...this.state.user, user: storedData });

    if (!storedData) {
      window.location.href = "/login";
    }
  }

  logout = (e) => {
    localStorage.clear();
    window.location.href = "/login";
  };

  render() {
    let profile = this.state.user;
    return (
      <div className="nk-header nk-header-fixed is-light">
        <div className="container-fluid">
          <div className="nk-header-wrap">
            <div className="nk-menu-trigger d-xl-none ml-n1">
              <a
                href="/#"
                className="nk-nav-toggle nk-quick-nav-icon"
                data-target="sidebarMenu"
              >
                <em className="icon ni ni-menu"></em>
              </a>
            </div>
            <div className="nk-header-brand d-xl-none">
              <a href="/#" className="logo-link">
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

            <div className="nk-header-tools">
              <ul className="nk-quick-nav">
                <li className="dropdown user-dropdown">
                  <a
                    href="/#"
                    className="dropdown-toggle"
                    data-toggle="dropdown"
                  >
                    <div className="user-toggle">
                      <div className="user-avatar sm">
                        <em className="icon ni ni-user-alt"></em>
                      </div>
                      <div className="user-info d-none d-md-block">
                        <div className="user-status"></div>
                        <div className="user-name dropdown-indicator">
                          {profile.name}
                        </div>
                      </div>
                    </div>
                  </a>
                  <div className="dropdown-menu dropdown-menu-md dropdown-menu-right dropdown-menu-s1">
                    <div className="dropdown-inner user-card-wrap bg-lighter d-none d-md-block">
                      <div className="user-card">
                        <div className="user-avatar">
                          <span>AB</span>
                        </div>
                        <div className="user-info">
                          <span className="lead-text"> {profile.name}</span>
                          <span className="sub-text"> {profile.email}</span>
                        </div>
                      </div>
                    </div>
                    <div className="dropdown-inner">
                      <ul className="link-list">
                        <li>
                          <a href="/#">
                            <em className="icon ni ni-setting-alt"></em>
                            <span>Account Setting</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="dropdown-inner">
                      <ul className="link-list">
                        <li>
                          <a href="#!">
                            <em
                              className="icon ni ni-signout"
                              onClick={this.logout}
                            ></em>
                            <span>Sign out</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li className="dropdown notification-dropdown mr-n1">
                  <a
                    href="/#"
                    className="dropdown-toggle nk-quick-nav-icon"
                    data-toggle="dropdown"
                  >
                    <div className="icon-status icon-status-info">
                      <em className="icon ni ni-bell"></em>
                    </div>
                  </a>
                  <div className="dropdown-menu dropdown-menu-xl dropdown-menu-right dropdown-menu-s1">
                    <div className="dropdown-head">
                      <span className="sub-title nk-dropdown-title">
                        Notifications
                      </span>
                      <a href="/#">Mark All as Read</a>
                    </div>
                    <div className="dropdown-body">
                      <div className="nk-notification">
                        <div className="nk-notification-item dropdown-inner">
                          <div className="nk-notification-icon">
                            <em className="icon icon-circle bg-warning-dim ni ni-curve-down-right"></em>
                          </div>
                          <div className="nk-notification-content">
                            <div className="nk-notification-text">
                              You have requested to <span>Widthdrawl</span>
                            </div>
                            <div className="nk-notification-time">
                              2 hrs ago
                            </div>
                          </div>
                        </div>
                        <div className="nk-notification-item dropdown-inner">
                          <div className="nk-notification-icon">
                            <em className="icon icon-circle bg-success-dim ni ni-curve-down-left"></em>
                          </div>
                          <div className="nk-notification-content">
                            <div className="nk-notification-text">
                              Your <span>Deposit Order</span> is placed
                            </div>
                            <div className="nk-notification-time">
                              2 hrs ago
                            </div>
                          </div>
                        </div>
                        <div className="nk-notification-item dropdown-inner">
                          <div className="nk-notification-icon">
                            <em className="icon icon-circle bg-warning-dim ni ni-curve-down-right"></em>
                          </div>
                          <div className="nk-notification-content">
                            <div className="nk-notification-text">
                              You have requested to <span>Widthdrawl</span>
                            </div>
                            <div className="nk-notification-time">
                              2 hrs ago
                            </div>
                          </div>
                        </div>
                        <div className="nk-notification-item dropdown-inner">
                          <div className="nk-notification-icon">
                            <em className="icon icon-circle bg-success-dim ni ni-curve-down-left"></em>
                          </div>
                          <div className="nk-notification-content">
                            <div className="nk-notification-text">
                              Your <span>Deposit Order</span> is placed
                            </div>
                            <div className="nk-notification-time">
                              2 hrs ago
                            </div>
                          </div>
                        </div>
                        <div className="nk-notification-item dropdown-inner">
                          <div className="nk-notification-icon">
                            <em className="icon icon-circle bg-warning-dim ni ni-curve-down-right"></em>
                          </div>
                          <div className="nk-notification-content">
                            <div className="nk-notification-text">
                              You have requested to <span>Widthdrawl</span>
                            </div>
                            <div className="nk-notification-time">
                              2 hrs ago
                            </div>
                          </div>
                        </div>
                        <div className="nk-notification-item dropdown-inner">
                          <div className="nk-notification-icon">
                            <em className="icon icon-circle bg-success-dim ni ni-curve-down-left"></em>
                          </div>
                          <div className="nk-notification-content">
                            <div className="nk-notification-text">
                              Your <span>Deposit Order</span> is placed
                            </div>
                            <div className="nk-notification-time">
                              2 hrs ago
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="dropdown-foot center">
                      <a href="/#">View All</a>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
