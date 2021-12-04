import React, { useState, useEffect } from "react";

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import { Link } from "react-router-dom";

const options = {
  items: 3,
  loop: false,
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
  const [formData, setFormData] = useState([]);

  useEffect(() => {
    if (props.data?.length >= 0) {
      setFormData(props.data);
    }
  }, [props.data]);

  return (
    <div>
      {formData.length > 0 ? (
        <OwlCarousel
          className="slider-items owl-carousel"
          {...options}
          id="slider_cat"
        >
          {formData?.map((slide, i) => (
            <div
              class="col-xl-4 col-lg-4 col-md-4 col-sm-12"
              key={`slide-${i}`}
            >
              <div className="box1">
                {/* <div className="border1"></div> */}
                <div className="slide-img">
                  <Link to={`/venu-selection-${slide._id}`}>
                    <img alt="" src={slide.image[0]?.url} />
                  </Link>
                </div>
                <div className="detail-box">
                  <div className="type">
                    Rendevous - Vivanta
                    <br />
                    <h5>
                      <Link to={`/venu-selection-${slide._id}`}>
                        {" "}
                        <b>Race Course</b>
                      </Link>
                    </h5>
                    <img
                      src="./frontend/assets/images/divide-line.svg"
                      alt=""
                    />
                    <h3>
                      <b>@1,900</b>
                    </h3>
                  </div>
                  <Link to={`/venu-selection-${slide._id}`} className="price">
                    <h3>$45</h3>
                  </Link>
                </div>
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
