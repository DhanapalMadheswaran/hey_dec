import React from "react";

// import "./carasoul.css";
import OwlCarousel from "react-owl-carousel";

import { Link } from "react-router-dom";
const options = {
  items: 3,
  loop: true,
  margin: 30,
  nav: true,
  smartSpeed: 900,
  autoplay: true,
  autoplayHoverPause: true,
  navText: [
    "<div className='nav-btn prev-slide'></div>",
    "<div className='nav-btn next-slide'></div>",
  ],

  responsive: {
    0: {
      items: 1,
    },
    400: {
      items: 2,
    },
    600: {
      items: 3,
    },
  },
};
function CarasoulSlider(props) {
  let { data = [] } = props;
  return (
    <div>
      {data.length > 0 ? (
        <OwlCarousel {...options}>
          {data?.map((slide, i) => (
            <div className="col-md-4 mb-3" key={`slide-${i}`}>
              <div className="detail-box-review-flag4">
                <span>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  4.6
                </span>
                <br />
                <p>50 Reviews</p>
              </div>
              <div className="box1">
                <div className="slide-img">
                  <img alt="" src={slide.image[0]?.url} />
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
                <Link to={`/venu-selection-${slide._id}`}>
                  <div className="detail-box-border"></div>{" "}
                </Link>
              </div>
            </div>
          ))}
        </OwlCarousel>
      ) : (
        <h4>Data Not Found</h4>
      )}
    </div>
  );
}

export default CarasoulSlider;
