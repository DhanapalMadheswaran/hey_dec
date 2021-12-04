import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <div className="nk-footer">
        <div className="container-fluid">
          <div className="nk-footer-wrap">
            <div className="nk-footer-copyright">
              {" "}
              &copy; 2021 Heyevents. Template by{" "}
              <a href="/#" target="_blank">
                Cookies Technologies
              </a>
            </div>
            <div className="nk-footer-links">
              <ul className="nav nav-sm">
                <li className="nav-item">
                  <a className="nav-link" href="/#">
                    Terms
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/#">
                    Privacy
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/#">
                    Help
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
