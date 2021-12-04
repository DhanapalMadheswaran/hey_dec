import React, { useState, useEffect } from "react";

import axios from "axios";
import CarasoulSlider from "./carasoulSliderVenu";
import Related from "./related";
import SimilarVenu from "./similarVenu";

function OtherDetails(props) {
  const [related, setRelated] = useState([]);

  useEffect(() => {
    const { data = [] } = props;
    setRelated(data);
  }, [props, props.data]);
  return (
    <div>
      <div className="row">
        <div className="col-xs-12 col-lg-12 col-md-12 col-sm-12 ">
          <nav className="nav-fil-clr">
            <div className="nav nav-tabs nav-fill" id="nav-tab" role="tablist">
              <a
                className="nav-item nav-link"
                id="nav-facilities-tab"
                data-toggle="tab"
                href="#nav-facilities"
                role="tab"
                aria-controls="nav-home"
                aria-selected="true"
              >
                Facilities
              </a>
              <a
                className="nav-item nav-link"
                id="nav-about-tab"
                data-toggle="tab"
                href="#nav-about"
                role="tab"
                aria-controls="nav-profile"
                aria-selected="false"
              >
                About
              </a>
              <a
                className="nav-item nav-link"
                id="nav-reviews-tab"
                data-toggle="tab"
                href="#nav-reviews"
                role="tab"
                aria-controls="nav-contact"
                aria-selected="false"
              >
                Reviews
              </a>
              <a
                className="nav-item nav-link"
                id="nav-compare-tab"
                data-toggle="tab"
                href="#nav-compare"
                role="tab"
                aria-controls="nav-about"
                aria-selected="false"
              >
                Compare
              </a>
            </div>
          </nav>
        </div>
      </div>

      <div className="row">
        <div className="col-xl-7 col-lg-7 col-md-7 col-sm-12">
          <span className="tab-area-head">
            <b>Facilities</b>
          </span>
          <p className="tab-area-cont">
            <b>Languages Spoken</b>
            <br />
            <img
              src="./frontend/assets/images/icons/tamil-lang-icon.svg"
              alt="..."
            />{" "}
            Tamil &emsp;|&emsp;
            <img
              src="./frontend/assets/images/icons/hindi-lang-icon.svg"
              alt="..."
            />{" "}
            Hindi &emsp;| &emsp;
            <img
              src="./frontend/assets/images/icons/eng-lang-icon.svg"
              alt="..."
            />
            English <br />
            <br />
            <b>Amenities</b>
            <br />
            <img
              src="./frontend/assets/images/icons/elevator-icon.svg"
              alt="..."
            />
            Elevator &emsp;|&emsp;
            <img
              src="./frontend/assets/images/icons/disabled-guest-icon.svg"
              alt="..."
            />
            Facilities for Disabled guest &emsp;|&emsp;
            <br />
            <img src="./frontend/assets/images/icons/wifi-icon.svg" alt="..." />
            Wifi in Longue &emsp;|&emsp;
            <img
              src="./frontend/assets/images/icons/valet-parking-icon.svg"
              alt="..."
            />
            Valet Parking &emsp;|&emsp;
            <img src="./frontend/assets/images/icons/pet-icon.svg" alt="..." />
            Pet-Friendly <br />
            <br />
            <b>Cleanliness and Safety</b>
            <br />
            <img
              src="./frontend/assets/images/icons/temp-check-icon.svg"
              alt="..."
            />
            Temp Check &emsp;|&emsp;
            <img
              src="./frontend/assets/images/icons/trained-staff-icon.svg"
              alt="..."
            />
            Trained Staff's &emsp;|&emsp;
            <img
              src="./frontend/assets/images/icons/hand-sanitizer-icon.svg"
              alt="..."
            />
            Hand Sanitizer <br />
            <br />
            <b>Accessibility</b>
            <br />
            <img
              src="./frontend/assets/images/icons/airport-icon.svg"
              alt="..."
            />
            Airport - 9km &emsp;|&emsp;
            <img
              src="./frontend/assets/images/icons/taxi-station-icon.svg"
              alt="..."
            />
            Taxi Station - 4km &emsp;|&emsp;
            <br />
            <img
              src="./frontend/assets/images/icons/bus-station-icon.svg"
              alt="..."
            />
            Bus Stand - 5km &emsp;|&emsp;
            <img
              src="./frontend/assets/images/icons/railway-station-icon.svg"
              alt="..."
            />
            Railway Station - 12km <br />
            <br />
          </p>
        </div>
        <div className="col-xl-5 col-lg-5 col-md-5 col-sm-12">
          <div className="cnt-area">
            Popular landmark
            <hr className="hrCol" />
            <div className="row">
              <div className="col-8">
                Nariman Point
                <br />
                Marine Drive <br />
                Chhatrapati Terminus <br />
                Gateway of India <br />
                Colaba <br />
                Sri Radha Temple <br />
                Shree Siddhivinayak <br />
                Bandra-Worli Sea Link <br />
                Elephanta Caves <br />
                Juhu Beach <br />
              </div>
              <div className="col-4">
                : 420 m <br />
                : 660 m<br />
                : 1.04 km
                <br />
                : 1.57 km
                <br />
                : 2.42 km
                <br />
                : 3.52 km
                <br />
                : 9.96 km
                <br />
                : 11.55 km
                <br />
                : 12.29 km
                <br />
                : 19.71 km
                <br />
              </div>
            </div>
            <br />
            <br />
            Nearby landmark
            <hr className="hrCol" />
            <div className="row">
              <div className="col-8">
                Nariman Point
                <br />
                Marine Drive <br />
                Chhatrapati Terminus <br />
                Gateway of India <br />
                Colaba <br />
                Sri Radha Temple <br />
              </div>
              <div className="col-4">
                : 420 m <br />
                : 660 m<br />
                : 1.04 km
                <br />
                : 1.57 km
                <br />
                : 2.42 km
                <br />
                : 3.52 km
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div>
          <span className="tab-area-head">
            <b>About</b>
          </span>
          <p className="tab-area-cont">{props.about}</p>
        </div>
      </div>

      <div className="row ">
        <span className="venue-heading">Venue’s in same arena</span>
      </div>
      <br />
      <br />

      <div className="row">
        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
          <section>
            <CarasoulSlider info={related} />
          </section>
        </div>
      </div>

      <div className="btmMargin1"></div>

      <div className="row">
        <div className="col">
          <hr className="hrCol" />
        </div>
      </div>

      <div className="row">
        <div className="">
          <span className="tab-area-head">
            <b>Review</b>
          </span>
          <section className="" id="testimonial-section">
            <div className="clearfix pb-3"></div>
            <div
              id="testimonials"
              className="carousel slide"
              data-ride="carousel"
            >
              <ul className="carousel-indicators">
                <li
                  data-target="#testimonials"
                  data-slide-to="0"
                  className="active"
                ></li>
                <li data-target="#testimonials" data-slide-to="1"></li>
                <li data-target="#testimonials" data-slide-to="2"></li>
              </ul>

              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="testi-text-wrap">
                    <h2 className="testi-text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Integer imperdiet ut urna ut consectetur. Suspendisse sit
                      amet nisl nec purus luctus malesuada.{" "}
                    </h2>
                  </div>
                  <div className="testi-footer">
                    <div className="testi-ftr-wrap">
                      <img
                        src="https://www.iconexperience.com/_img/i_collection_png/128x128/plain/quotation_mark.png"
                        className="rounded quoteicon"
                        alt="Quote"
                      />
                      <div className="cust-pro-info">
                        <span className="cust_name">George P. K</span>
                        <span className="cust_pro">R.S.Puram</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="testi-text-wrap">
                    <h2 className="testi-text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Integer imperdiet ut urna ut consectetur. Suspendisse sit
                      amet nisl nec purus luctus malesuada.
                    </h2>
                  </div>
                  <div className="testi-footer">
                    <div className="testi-ftr-wrap">
                      <img
                        src="https://www.iconexperience.com/_img/i_collection_png/128x128/plain/quotation_mark.png"
                        className="rounded quoteicon"
                        alt="Quote"
                      />
                      <div className="cust-pro-info">
                        <span className="cust_name">Kumar S</span>
                        <span className="cust_pro">Gandhi Puram</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="testi-text-wrap">
                    <h2 className="testi-text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Integer imperdiet ut urna ut consectetur. Suspendisse sit
                      amet nisl nec purus luctus malesuada.{" "}
                    </h2>
                  </div>
                  <div className="testi-footer">
                    <div className="testi-ftr-wrap">
                      <img
                        src="https://www.iconexperience.com/_img/i_collection_png/128x128/plain/quotation_mark.png"
                        className="rounded quoteicon"
                        alt="Quote"
                      />
                      <div className="cust-pro-info">
                        <span className="cust_name">Rahman R</span>
                        <span className="cust_pro">Ukkadam</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <div className="row">
        <div className="col">
          <hr className="hrCol" />
        </div>
      </div>

      <div className="row">
        <div className="card1 col-xl-6 col-lg-6 col-md-6 col-sm-12">
          <div
            className="card1-header collapsed"
            data-toggle="collapse"
            data-target="#collapseOne"
            data-parent="#accordionExample"
          >
            <button
              type="button"
              className="btn btn-block btn-outline-heyEvents"
            >
              <h5>
                <b>Guest Policy</b>
                <i className="accicon fas fa-angle-down rotate-icon"></i>
              </h5>
            </button>
          </div>
          <div id="collapseOne" className="card1-body collapse">
            <br />
            <p>
              Anim pariatur cliche reprehenderit, enim eiusmod high life
              accusamus terry richardson ad squid. 3 wolf moon officia aute, non
              cupidatat skateboard dolor brunch. Food truck quinoa nesciunt
              laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
              on it squid single-origin coffee nulla assumenda shoreditch et.
              Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred
              nesciunt sapiente ea proident. Ad vegan excepteur butcher vice
              lomo. Leggings occaecat craft beer farm-to-table, raw denim
              aesthetic synth nesciunt you probably haven't heard of them
              accusamus labore sustainable VHS.{" "}
            </p>
          </div>
        </div>

        <div className="card1 col-xl-6 col-lg-6 col-md-6 col-sm-12">
          <div
            className="card1-header collapsed"
            data-toggle="collapse"
            data-target="#collapseTwo"
          >
            <button
              type="button"
              className="btn btn-block btn-outline-heyEvents"
            >
              <h5>
                <b>Cancellation Policy</b>
                <i className="accicon fas fa-angle-down rotate-icon"></i>
              </h5>
            </button>
          </div>
          <div id="collapseTwo" className="card1-body collapse">
            <br />
            <p>
              Anim pariatur cliche reprehenderit, enim eiusmod high life
              accusamus terry richardson ad squid. 3 wolf moon officia aute, non
              cupidatat skateboard dolor brunch. Food truck quinoa nesciunt
              laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
              on it squid single-origin coffee nulla assumenda shoreditch et.
              Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred
              nesciunt sapiente ea proident. Ad vegan excepteur butcher vice
              lomo. Leggings occaecat craft beer farm-to-table, raw denim
              aesthetic synth nesciunt you probably haven't heard of them
              accusamus labore sustainable VHS.{" "}
            </p>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="card1 col-xl-6 col-lg-6 col-md-6 col-sm-12">
          <div
            className="card1-header collapsed"
            data-toggle="collapse"
            data-target="#collapseThree"
          >
            <button
              type="button"
              className="btn btn-block btn-outline-heyEvents"
            >
              <h5>
                <b>Property Announcement</b>
                <i className="accicon fas fa-angle-down rotate-icon"></i>
              </h5>
            </button>
          </div>
          <div id="collapseThree" className="card1-body collapse">
            <br />
            <p>
              Anim pariatur cliche reprehenderit, enim eiusmod high life
              accusamus terry richardson ad squid. 3 wolf moon officia aute, non
              cupidatat skateboard dolor brunch. Food truck quinoa nesciunt
              laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
              on it squid single-origin coffee nulla assumenda shoreditch et.
              Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred
              nesciunt sapiente ea proident. Ad vegan excepteur butcher vice
              lomo. Leggings occaecat craft beer farm-to-table, raw denim
              aesthetic synth nesciunt you probably haven't heard of them
              accusamus labore sustainable VHS.{" "}
            </p>
          </div>
        </div>

        <div className="card1 col-xl-6 col-lg-6 col-md-6 col-sm-12">
          <div
            className="card1-header collapsed"
            data-toggle="collapse"
            data-target="#collapseFour"
          >
            <button
              type="button"
              className="btn btn-block btn-outline-heyEvents"
            >
              <h5>
                <b>Industry Experience</b>
                <i className="accicon fas fa-angle-down rotate-icon"></i>
              </h5>
            </button>
          </div>
          <div id="collapseFour" className="card1-body collapse">
            <br />
            <p>
              Anim pariatur cliche reprehenderit, enim eiusmod high life
              accusamus terry richardson ad squid. 3 wolf moon officia aute, non
              cupidatat skateboard dolor brunch. Food truck quinoa nesciunt
              laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
              on it squid single-origin coffee nulla assumenda shoreditch et.
              Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred
              nesciunt sapiente ea proident. Ad vegan excepteur butcher vice
              lomo. Leggings occaecat craft beer farm-to-table, raw denim
              aesthetic synth nesciunt you probably haven't heard of them
              accusamus labore sustainable VHS.{" "}
            </p>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col">
          <hr className="hrCol" />
        </div>
      </div>
      <div class="row ">
        <span class="venue-heading">Similar Event Space</span>
      </div>
      <br />
      <br />
      <br />
      <section>
        <SimilarVenu info={related} />
      </section>
    </div>
  );
}

export default OtherDetails;
