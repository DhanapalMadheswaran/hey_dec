import React from "react";

function Testimonials(props) {
  return (
    <div>
      <div className="container">
        <div className="my-container-3">
          <div className="row">
            <div className="col-lg-5 col-md-5 col-sm-12 text-right">
              <span>
                <b>India’s trusted</b>
              </span>
              <br />
              event booking portal
            </div>
            <div className="col-lg-2 col-md-2 col-sm-12 text-center">
              <p>
                <img src="./frontend/assets/images/icons/label.svg" />
              </p>
            </div>
            <div className="col-lg-5 col-md-5 col-sm-12 text-left">
              <span>1,00,000+</span>
              <br />
              <b>Verified vendors</b>
            </div>
          </div>
        </div>
      </div>

      <div
        className="container my-container-4"
        data-aos="fade-down"
        data-aos-delay="400"
        data-aos-duration="1000"
      >
        <div className="row">
          <div className="col-sm-12 txt-align">
            <br />
            <p>
              Happy <b>Customer's</b>
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-1 col-md-1 col-sm-1 ">
            <div className="col-6 text-left control-btn-position1">
              <a
                className="btn btn-outline-controls"
                href="#customer"
                role="button"
                data-slide="prev"
              >
                <i className="fa fa-chevron-left" aria-hidden="true"></i>
              </a>
            </div>
          </div>
          <div className="col-lg-10 col-md-10 col-sm-10 txt-align">
            <section>
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div
                      id="customer"
                      className="carousel slide"
                      data-ride="carousel"
                    >
                      <div className="carousel-inner">
                        <div className="carousel-item active">
                          <div className="row">
                            <div className="col-md-4 mb-3">
                              <div className="card1">
                                <img
                                  className="img-fluid"
                                  alt="100%x280"
                                  src="./frontend/assets/images/catering/1.jpg"
                                />
                                <div className="card-body1">
                                  <div className="card-title1">
                                    <h5>Rendevous - Vivanta</h5>
                                    <p className="card-text1">
                                      Lorem Ipsum is simply dummy text of the
                                      printing and typesetting industry.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="col-md-4 mb-3">
                              <div className="card1">
                                <img
                                  className="img-fluid"
                                  alt="100%x280"
                                  src="./frontend/assets/images/photography/2.jpg"
                                />
                                <div className="card-body1">
                                  <div className="card-title1">
                                    <h5>Rendevous - Vivanta</h5>
                                    <span className="card-text1">
                                      Lorem Ipsum is simply dummy text of the
                                      printing and typesetting industry.
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="col-md-4 mb-3">
                              <div className="card1">
                                <img
                                  className="img-fluid"
                                  alt="100%x280"
                                  src="./frontend/assets/images/stylist/3.jpg"
                                />
                                <div className="card-body1">
                                  <div className="card-title1">
                                    <h5>Rendevous - Vivanta</h5>
                                    <span className="card-text1">
                                      Lorem Ipsum is simply dummy text of the
                                      printing and typesetting industry.
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="carousel-item">
                          <div className="row">
                            <div className="col-md-4 mb-3">
                              <div className="card1">
                                <img
                                  className="img-fluid"
                                  alt="100%x280"
                                  src="./frontend/assets/images/decoration/4.jpg"
                                />
                                <div className="card-body1">
                                  <div className="card-title1">
                                    <h5>Rendevous - Vivanta</h5>
                                    <span className="card-text1">
                                      Lorem Ipsum is simply dummy text of the
                                      printing and typesetting industry.
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="col-md-4 mb-3">
                              <div className="card1">
                                <img
                                  className="img-fluid"
                                  alt="100%x280"
                                  src="./frontend/assets/images/dj-audio/5.jpg"
                                />
                                <div className="card-body1">
                                  <div className="card-title1">
                                    <h5>Rendevous - Vivanta</h5>
                                    <span className="card-text1">
                                      Lorem Ipsum is simply dummy text of the
                                      printing and typesetting industry.
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="col-md-4 mb-3">
                              <div className="card1">
                                <img
                                  className="img-fluid"
                                  alt="100%x280"
                                  src="./frontend/assets/images/event-space/6.jpg"
                                />
                                <div className="card-body1">
                                  <div className="card-title1">
                                    <h5>Rendevous - Vivanta</h5>
                                    <span className="card-text1">
                                      Lorem Ipsum is simply dummy text of the
                                      printing and typesetting industry.
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div className="col-lg-1 col-md-1 col-sm-1 ">
            <div className="col-6 text-right control-btn-position1">
              <a
                className="btn btn-outline-controls"
                href="#customer"
                role="button"
                data-slide="next"
              >
                <i className="fa fa-chevron-right" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
