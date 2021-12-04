import React from "react";
//import "./venue-selection.css";

function NavBar(props) {
  return (
    <div>
      <div className="topMargin"></div>
      <div className="container">
        <div className="row">
          <nav className="navbar navbar-expand-lg navbar-light bg-white">
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
              <a className="navbar-brand" href="index.html">
                <img src="./frontend/assets/images/logo.svg" alt="site Logo" />
              </a>
              <button
                className="navbar-toggler "
                type="button"
                data-toggle="collapse"
                data-target="#navbarTogglerDemo01"
                aria-controls="navbarTogglerDemo01"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
            </div>

            <div
              className="col-xl-8 col-lg-8 col-md-8 col-sm-12 nav-alignment collapse navbar-collapse"
              id="navbarTogglerDemo01"
            >
              <ul className="navbar-nav mr-auto ">
                <li className="nav-item">
                  <a className="nav-link" href="index.html">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="#">
                    Venue
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="decor.html">
                    Decor
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="catering.html">
                    Caterers
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <i className="fa fa-play" aria-hidden="true"></i>
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>

        <div className="row">
          <div className="col">
            <hr className="hrCol" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
