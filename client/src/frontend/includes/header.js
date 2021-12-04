import React from "react";
import "./css/style.css";
import "./css/responsive.css";
import { Link } from "react-router-dom";
import Toast from "../../components/toast";
import { useHistory } from "react-router-dom";

function Header(props) {
  let profile = JSON.parse(localStorage.getItem("profile"));

  const history = useHistory();
  const Logout = () => {
    localStorage.removeItem("profile");
    Toast("success", "🦄 Successfully Logged Out");
    history.push(`/user-login`);
  };
  return (
    <div>
      <div className="topMargin"></div>
      <div className="container">
        <div className="row">
          <nav className="navbar navbar-expand-lg navbar-light bg-white">
            <Link className="navbar-brand" to={"/"}>
              <img src="./frontend/assets/images/logo.svg" alt="..." />
            </Link>

            <div
              className="col-xl-8 col-lg-8 col-md-8 col-sm-12 nav-alignment collapse navbar-collapse"
              id="navbarTogglerDemo01"
            >
              <ul className="navbar-nav mr-auto ">
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="venue-selection.html">
                    Venue
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="decor.html">
                    Decor
                  </a>
                </li>
                <li className="nav-item active">
                  <a className="nav-link" href="#!">
                    Caterers
                  </a>
                </li>
                {profile?.name ? (
                  <>
                    <li className="nav-item ">
                      <a className="nav-link" href="#!" onClick={Logout}>
                        Logout
                      </a>
                    </li>
                    {profile.role === "3" ? (
                      <li className="nav-item ">
                        <Link className="nav-link" to="/eventVendorprofile">
                          Profile22
                        </Link>
                      </li>
                    ) : (
                      <li className="nav-item ">
                        <Link className="nav-link" to="/userProfile">
                          User Profile
                        </Link>
                      </li>
                    )}
                  </>
                ) : (
                  <li className="nav-item ">
                    <Link className="nav-link" to="/user-login">
                      Login
                    </Link>
                  </li>
                )}
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

export default Header;
