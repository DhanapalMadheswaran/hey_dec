import React from "react";
import { Link } from "react-router-dom";
import "./css/style.css";
import "./css/responsive.css";
import Toast from "../../components/toast";
import { useHistory } from "react-router-dom";
function NavBar(props) {
  let profile = JSON.parse(localStorage?.getItem?.("profile"));

  const history = useHistory();
  const Logout = () => {
    localStorage.removeItem("profile");
    Toast("success", "🦄 Successfully Logged Out");
    history.push(`/user-login`);
  };
  return (
    <div>
      <div className="topMargin"></div>
      <div
        className="container top-menus"
        data-aos="fade-down"
        data-aos-delay="400"
        data-aos-duration="800"
      >
        <div className="row">
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
            <nav className="navbar navbar-expand-lg navbar-light bg-white">
              <div>
                <Link className="navbar-brand" to={"/"}>
                  <img src="./frontend/assets/images/logo.svg" alt="..." />
                </Link>
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
                className="collapse navbar-collapse"
                id="navbarTogglerDemo01"
              >
                <ul className="navbar-nav mr-auto">
                  {props?.menu.map((slide, i) => (
                    <li className="nav-item">
                      <Link
                        className="nav-link"
                        to={`/category-list-${slide.name}`}
                      >
                        {slide.name}
                      </Link>
                    </li>
                  ))}
                  <div className="nav-div-align">
                    <ul className="navbar-nav">
                      <form className="form-inline">
                        <input
                          className="list-your-business"
                          type="search"
                          placeholder="List your business"
                          aria-label="Search"
                        />
                      </form>
                      {profile?.name ? (
                        <div>
                          <li className="nav-item active">
                            <a className="nav-link" href="#!" onClick={Logout}>
                              Logout
                            </a>
                          </li>
                          {profile?.role === "3" ? (
                            <li className="nav-item ">
                              <Link
                                className="nav-link"
                                to="/eventVendorprofile"
                              >
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
                        </div>
                      ) : (
                        <li className="nav-item active"></li>
                      )}
                    </ul>
                  </div>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
      <div className="flex-container-logo logo-placement">
        <div className="logo-clr">
          <img src="./frontend/assets/images/overlay-logo.svg" alt="..." />
        </div>
      </div>
    </div>
  );
}

export default NavBar;
