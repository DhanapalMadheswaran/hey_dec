import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import HeaderContentCart from "./headerContentCart";
import HeaderContentDetails from "./headerContentDetails";
import TimeInput from "material-ui-time-picker";

export default function Header(props) {
  const [value, onChange] = useState(new Date());

  const lastItem = window.location.pathname;
  return (
    <div>
      <div className="row">
        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
          <div className="row">
            <div className="col-sm-6 col-md-6 col-lg-6">
              <div className="topMargin"></div>
              <nav className="navbar4 navbar-expand-lg navbar-light bg-white">
                <div>
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
                    <li className="nav-item4">
                      <a className="nav-link" href="index.html">
                        Home
                      </a>
                    </li>
                    <li className="nav-item4">
                      <a className="nav-link" href="venue-selection.html">
                        Venue
                      </a>
                    </li>
                    <li className="nav-item4">
                      <a className="nav-link" href="decor.html">
                        Decor
                      </a>
                    </li>
                    <li className="nav-item4">
                      <a className="nav-link" href="photography.html">
                        Photography
                      </a>
                    </li>
                    <li className="nav-item4">
                      <a className="nav-link" href="detail.html">
                        Detail
                      </a>
                    </li>
                    <li className="nav-item4">
                      <a className="nav-link" href="catering.html">
                        Caterers
                      </a>
                    </li>
                    <li className="nav-item4">
                      <a className="nav-link" href="#!">
                        <i className="fa fa-play" aria-hidden="true"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </nav>

              <div className="head-txt">
                Rachal Amada!
                <br />
                Let's get it Done..
              </div>

              <div className="plan-area1">Enter Your Wedding Budget</div>
              <div className="text-box4">
                <i className="fas fa-rupee-sign"></i>
                <input
                  type="text"
                  className="helo-place-holder"
                  name=""
                  id=""
                  aria-describedby=""
                  placeholder="2,00,000"
                />
              </div>
              {lastItem === "/cart" ? (
                <HeaderContentCart />
              ) : (
                <HeaderContentDetails />
              )}
            </div>

            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 select-sec">
              <div className="menu-btn">
                <i className="fas fa-bars"></i>
              </div>
              <div className="">
                <div className="organize-box">
                  <div className="organize-txt">
                    <p>Organize Your Event</p>
                  </div>
                </div>
                <div className="calender-txt">
                  <p>Select Your Wedding Date & Time</p>
                </div>

                <Calendar
                  id="datepicker"
                  className="calendar"
                  style={{ color: "#fff" }}
                  onChange={onChange}
                  value={value}
                />

                <div className="content">
                  <TimeInput
                    mode="12h"
                    placeholder="Pick your Time"
                    label="Alarm clock"
                  />
                  <i class="fa fa-clock"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col">
            <hr className="hrCol" />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xl-12 col-lg-12 col-ms-12 col-sm-12">
          <div className="row">
            <div className="col-sm-4 col-md-4 col-lg-4">
              <div className="count-txt">
                <p>
                  Enter <b>Guest</b> Count
                </p>

                <div className="count-num">
                  <img
                    src="./frontend/assets/images/icons/guests-icon.svg"
                    alt="guest-icon"
                  />
                  <form>
                    <div className="value-button" id="decrease">
                      -
                    </div>
                    <input type="number" id="number" />
                    <div className="value-button" id="increase">
                      +
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-sm-1 col-md-1 col-lg-1 divide">
              <img
                className="divide-line"
                src="./frontend/assets/images/icons/divider-line.svg"
                alt="divide-line"
              />
            </div>
            <div className="col-sm-7 col-md-7 col-lg-7">
              <div className="banner-txt">
                Rachel, Your Wedding is
                <br />
                just a few taps away
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
