import React from "react";

function Banner(props) {
  const { banner = [] } = props;
  return (
    <div>
      {banner.length > 0 && (
        <section>
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                <div className="txt-align">
                  <p>
                    INSTANT <b>Wedding's</b>
                  </p>
                </div>
                <div className="row">
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                    <div className="img-overlay-text">
                      {props?.banner?.[0].bannerText}
                      <h4>@1,99,000</h4>
                    </div>
                    <img
                      className="img-wid-1"
                      src={props?.banner?.[0].image.url}
                      alt={props?.banner?.[0].bannerText}
                    />
                  </div>

                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                    <div className="img-overlay-text">
                      {props?.banner[1].bannerText}
                      <h4>@3,49,000</h4>
                    </div>
                    <img
                      className="img-wid-1"
                      src={props?.banner[1].image.url}
                      alt={props?.banner[1].bannerText}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                    <div className="img-overlay-text">
                      {props?.banner[2].bannerText}
                      <h4>@11,99,000</h4>
                    </div>
                    <img
                      className="img-wid-2"
                      src={props?.banner[2].image.url}
                      alt={props?.banner[2].bannerText}
                    />
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                <div className="txt-align">
                  <p>
                    Plan a <b>SURPRISE</b> party
                  </p>
                </div>
                <div className="row">
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                    <div className="img-overlay-text">
                      <button type="button" className="btn btn-heyEvents">
                        Visit Shop
                      </button>
                    </div>
                    <img
                      className="img-wid-3"
                      src={props?.banner[3].image.url}
                      alt="SURPRISE party"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="btmMargin"></div>
          </div>
        </section>
      )}
    </div>
  );
}

export default Banner;
