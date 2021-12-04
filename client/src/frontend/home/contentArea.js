import React from "react";

import CarasoulSlider from "./carasoulSlider";
function ContentArea(props) {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col">
            <hr className="hrCol" />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 txt-align">
            <p>
              Top in your <b>CITY</b>
            </p>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
            <form className="form-inline input-icons">
              <input
                className="select-location input-field"
                type="search"
                placeholder="Select Location"
                aria-label="Search"
              />
              <i className="fa fa-map-marker" aria-hidden="true"></i>
            </form>
          </div>
        </div>
      </div>

      <div className="my-container-2">
        <div className="container">
          <div className="row">
            <div className="col">
              <hr className="hrCol" />
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-lg-2">
              <img
                src="./frontend/assets/images/icons/event-space-icon.svg"
                alt=""
              />
              <br />
              <div className="bbb_text">
                <p>
                  <b>Event Space</b>
                </p>
              </div>
            </div>
            <div className="col-lg-10">
              <CarasoulSlider data={props.data} />
            </div>
            <div className="container">
              <div className="row">
                <div className="col">
                  <hr className="hrCol" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-2">
              <img
                src="./frontend/assets/images/icons/event-space-icon.svg"
                alt=""
              />
              <br />
              <div className="bbb_text">
                <p>
                  <b>PhotoGraphy</b>
                </p>
              </div>
            </div>
            <div className="col-lg-10"></div>
            <div className="container">
              <div className="row">
                <div className="col">
                  <hr className="hrCol" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContentArea;
