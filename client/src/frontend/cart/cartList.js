/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from "react";
import CarasoulSlider from "./carasoulSlider";

export default function CartList(props) {
  const [formData, setformData] = useState();
  useEffect(() => {
    let { data = [] } = props;
    setformData(data);
  }, [props]);
  return (
    <div>
      <div className="row">
        <div className="col-sm-6 col-md-6 col-lg-6">
          <div className="add-txt">
            <p>
              Start <b>Adding</b> Your Vendors
            </p>
          </div>
        </div>
        <div className="col-sm-6 col-md-6 col-lg-6">
          <div className="add-txt">
            <p>
              You Might <b>Like</b> These!
            </p>
          </div>
        </div>
      </div>

      <div className="container my-container-2">
        <div className="row">
          <div className="col-lg-2 col-md-2 col-sm-2 plus-box">
            <button type="button" className="btn btn-light">
              <i className="fas fa-plus"></i>
            </button>
            <p>
              <img
                src="./frontend/assets/images/icons/event-space-icon.svg"
                alt="event-icon"
              />
              <span>Add Event Space</span>
            </p>
          </div>
          <div className="col-lg-10 col-md-10 col-sm-12">
            <section>
              <div className="">
                <div className="row">
                  <div className="col-12">
                    <CarasoulSlider data={formData} />
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-sm-8 col-md-8 col-lg-8  wishlist-line">
          <hr className="hrCol" />
        </div>
        <div className="col-sm-4 col-md-4 col-lg-4 wishlist-icon">
          <div className="row">
            <div className="col-2">
              <img
                className="info-img"
                src="./frontend/assets/images/icons/info-icon.svg"
              />
            </div>
            <div className="col-10">
              <p className="info-txt">
                <span>
                  Following Services will <br />
                  only be added to your <br />
                  wishlist
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-sm-6 col-md-6 col-lg-6">
          <div className="add-txt">
            <p>
              Start <b>Adding</b> Your Vendors
            </p>
          </div>
        </div>
        <div className="col-sm-6 col-md-6 col-lg-6">
          <div className="add-txt">
            <p>
              You Might <b>Like</b> These!
            </p>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-2 col-md-2 col-sm-2 plus-box">
            <button type="button" className="btn btn-light">
              <i className="fas fa-plus"></i>
            </button>
            <p>
              {" "}
              <img src="./frontend/assets/images/icons/decoration-icon.svg" />{" "}
              <span>Add decoration</span>
            </p>
          </div>
          <div className="col-lg-10 col-md-10 col-sm-12">
            <section>
              <div className="">
                <div className="row">
                  <div className="col-12">
                    <div
                      id="decor"
                      className="carousel slide"
                      data-ride="carousel"
                    >
                      <div className="carousel-inner">
                        <div className="carousel-item active">
                          <div className="row">
                            <div className="col-md-4 mb-3">
                              <div className="detail-box-review-flag4">
                                <img src="./frontend/assets/images/icons/review-bg-icon.svg" />
                                <span>
                                  <img src="./frontend/assets/images/icons/star-fill-white.svg" />
                                  4.6
                                </span>
                                50 Reviews
                              </div>
                              <div className="box1">
                                <div className="slide-img">
                                  <img
                                    alt=""
                                    src="./frontend/assets/images/decoration/2.jpg"
                                  />
                                </div>
                                <div className="detail-box">
                                  <div className="type4">
                                    Rege Decors-Contemprary 302 <br />
                                    <b>peelamedu</b>
                                    <img
                                      className="line-img"
                                      src="./frontend/assets/images/divide-line1.svg"
                                    />
                                    <div className="decor-rate">
                                      <span>
                                        <b>@2,20,000</b>
                                        <br />
                                        25 x 14ft
                                      </span>
                                      &emsp; &emsp; &nbsp;
                                    </div>
                                  </div>
                                </div>
                                <div className="detail-box-border"></div>
                              </div>
                            </div>
                            <div className="col-md-4 mb-3">
                              <div className="detail-box-review-flag4">
                                <img src="./frontend/assets/images/icons/review-bg-icon1.svg" />
                                <span>
                                  <img src="./frontend/assets/images/icons/star-fill-white.svg" />
                                  3.6
                                </span>
                                30 Reviews
                              </div>
                              <div className="box1">
                                <div className="slide-img">
                                  <img
                                    alt=""
                                    src="./frontend/assets/images/decoration/3.jpg"
                                  />
                                </div>
                                <div className="detail-box">
                                  <div className="type4">
                                    Mg Decors- Floral 121 <br />
                                    <b>Gandhipuram</b>
                                    <img
                                      className="line-img"
                                      src="./frontend/assets/images/divide-line1.svg"
                                    />
                                    <div className="decor-rate">
                                      <span>
                                        <b>@1,51,0000</b>
                                        <br />
                                        10 x 10ft
                                      </span>
                                      &emsp; &emsp; &nbsp;
                                    </div>
                                  </div>
                                </div>
                                <div className="detail-box-border"></div>
                              </div>
                            </div>
                            <div className="col-md-4 mb-3">
                              <div className="detail-box-review-flag4">
                                <img src="./frontend/assets/images/icons/review-bg-icon.svg" />
                                <span>
                                  <img src="./frontend/assets/images/icons/star-fill-white.svg" />
                                  4.0
                                </span>
                                35 Reviews
                              </div>
                              <div className="box1">
                                <div className="slide-img">
                                  <img
                                    alt=""
                                    src="./frontend/assets/images/decoration/4.jpg"
                                  />
                                </div>
                                <div className="detail-box">
                                  <div className="type4">
                                    Mark1 Trends <br />
                                    <b>Saibaba Colony</b>
                                    <img
                                      className="line-img"
                                      src="./frontend/assets/images/divide-line1.svg"
                                    />
                                    <div className="decor-rate">
                                      <span>
                                        <b>@1,90,000</b>
                                        <br />
                                        10 x 10ft
                                      </span>
                                      &emsp; &emsp; &nbsp;
                                    </div>
                                  </div>
                                </div>
                                <div className="detail-box-border"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="carousel-item">
                          <div className="row">
                            <div className="col-md-4 mb-3">
                              <div className="detail-box-review-flag4">
                                <img src="./frontend/assets/images/icons/review-bg-icon1.svg" />
                                <span>
                                  <img src="./frontend/assets/images/icons/star-fill-white.svg" />
                                  3.6
                                </span>
                                30 Reviews
                              </div>
                              <div className="box1">
                                <div className="slide-img">
                                  <img
                                    alt=""
                                    src="./frontend/assets/images/decoration/5.jpg"
                                  />
                                </div>
                                <div className="detail-box">
                                  <div className="type4">
                                    Rege Decors-Contemprary 302 <br />
                                    <b>peelamedu</b>
                                    <img
                                      className="line-img"
                                      src="./frontend/assets/images/divide-line1.svg"
                                    />
                                    <div className="decor-rate">
                                      <span>
                                        <b>@2,20,000</b>
                                        <br />
                                        25 x 14ft
                                      </span>
                                      &emsp; &emsp; &nbsp;
                                    </div>
                                  </div>
                                </div>
                                <div className="detail-box-border"></div>
                              </div>
                            </div>
                            <div className="col-md-4 mb-3">
                              <div className="detail-box-review-flag4">
                                <img src="./frontend/assets/images/icons/review-bg-icon.svg" />
                                <span>
                                  <img src="./frontend/assets/images/icons/star-fill-white.svg" />
                                  4.1
                                </span>
                                38 Reviews
                              </div>
                              <div className="box1">
                                <div className="slide-img">
                                  <img
                                    alt=""
                                    src="./frontend/assets/images/decoration/6.jpg"
                                  />
                                </div>
                                <div className="detail-box">
                                  <div className="type4">
                                    Mg Decors- Floral 121 <br />
                                    <b>Gandhipuram</b>
                                    <img
                                      className="line-img"
                                      src="./frontend/assets/images/divide-line1.svg"
                                    />
                                    <div className="decor-rate">
                                      <span>
                                        <b>@1,51,0000</b>
                                        <br />
                                        10 x 10ft
                                      </span>
                                      &emsp; &emsp; &nbsp;
                                    </div>
                                  </div>
                                </div>
                                <div className="detail-box-border"></div>
                              </div>
                            </div>
                            <div className="col-md-4 mb-3">
                              <div className="detail-box-review-flag4">
                                <img src="./frontend/assets/images/icons/review-bg-icon1.svg" />
                                <span>
                                  <img src="./frontend/assets/images/icons/star-fill-white.svg" />
                                  3.6
                                </span>
                                30 Reviews
                              </div>
                              <div className="box1">
                                <div className="slide-img">
                                  <img
                                    alt=""
                                    src="./frontend/assets/images/decoration/9.jpg"
                                  />
                                </div>
                                <div className="detail-box">
                                  <div className="type4">
                                    Mark1 Trends <br />
                                    <b>Saibaba Colony</b>
                                    <img
                                      className="line-img"
                                      src="./frontend/assets/images/divide-line1.svg"
                                    />
                                    <div className="decor-rate">
                                      <span>
                                        <b>@1,90,000</b>
                                        <br />
                                        10 x 10ft
                                      </span>
                                      &emsp; &emsp; &nbsp;
                                    </div>
                                  </div>
                                </div>
                                <div className="detail-box-border"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 text-left">
                    <a
                      className="btn btn-outline-controls"
                      href="#decor"
                      role="button"
                      data-slide="prev"
                    >
                      <i className="fa fa-chevron-left" aria-hidden="true"></i>
                    </a>
                    <br />
                  </div>
                  <div className="col-6 text-right">
                    <a
                      className="btn btn-outline-controls"
                      href="#decor"
                      role="button"
                      data-slide="next"
                    >
                      <i className="fa fa-chevron-right" aria-hidden="true"></i>
                    </a>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-sm-3 col-md-3 col-lg-3">
          <div className="row flx-area">
            <p>
              <img src="./frontend/assets/images/icons/photography-icon.svg" />
              <span>Photography</span>
            </p>
            <img
              className="divide-line"
              src="./frontend/assets/images/icons/divider-line.svg"
            />
          </div>
        </div>

        <div className="col-sm-3 col-md-3 col-lg-3">
          <div className="row flx-area1">
            <p>
              <img src="./frontend/assets/images/icons/stylist-icon.svg" />
              <span>Stylist</span>
            </p>
            <img
              className="divide-line"
              src="./frontend/assets/images/icons/divider-line.svg"
            />
          </div>
        </div>

        <div className="col-sm-3 col-md-3 col-lg-3">
          <div className="row flx-area2">
            <p>
              <img src="./frontend/assets/images/icons/dj-audio-icon.svg" />
              <span>DJ / Music</span>
            </p>
          </div>
        </div>
        <div className="col-sm-3 col-md-3 col-lg-3">
          <p className="soon-txt">
            Coming <br />
            <span>Soon!</span>
          </p>
        </div>
      </div>
    </div>
  );
}
