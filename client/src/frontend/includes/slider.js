import React, { useState, useEffect } from "react";

function Slider(props) {
  const [formData, setformData] = useState([]);

  useEffect(() => {
    if (props.data?.length >= 0) {
      setformData(props.data);
    }
  }, [props.data]);
  return (
    <div>
      <div className="">
        <div className="row">
          <div
            className="col-xl-6 col-lg-6 col-md-6 col-sm-12"
            data-aos="fade-right"
            data-aos-delay="400"
            data-aos-duration="800"
          >
            <div className="">
              <svg className="my-body" width="auto" height="100" viewBox="">
                <path id="path">
                  <animate
                    attributeName="d"
                    from="m0,50 h0"
                    to="m0,100 h1100"
                    dur="2.0s"
                    begin="0s"
                    repeatCount="indefinite"
                  />
                </path>
                <text
                  fill="#801c17"
                  fontSize="74"
                  fontFamily="Montserrat-Bold, Montserrat"
                  fontWeight="700"
                >
                  <textPath>Hello</textPath>
                </text>
              </svg>
              <div className="">
                <input
                  type="text"
                  className="helo-place-holder"
                  name=""
                  id=""
                  aria-describedby=""
                  placeholder="Enter Your Name Here"
                />
              </div>
            </div>
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 data-toggle">
              <div className="plan-area">Let's plan this</div>
              <div className="flex-container scrlbar ">
                {props?.category.map((slide, i) => (
                  <div>
                    <img src={slide.image.url} alt="..." />
                    <br />
                    {slide.name}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div
            className="col-xl-6 col-lg-6 col-md-6 col-sm-12"
            data-aos="fade-left"
            data-aos-delay="400"
            data-aos-duration="800"
          >
            <div className="">
              <div
                id="carousel"
                className="carousel slide"
                data-ride="carousel"
              >
                <div className="carousel-inner banner-position">
                  {formData.map((slide, i) => (
                    <div
                      className={
                        i === 0 ? "carousel-item active" : "carousel-item "
                      }
                      key={`slide-${i}`}
                    >
                      <img
                        className="d-block w-100"
                        src={slide.image.url}
                        alt="First slide"
                      />
                      <div className="carousel-caption d-none d-md-block">
                        <h2 className="h2-text">{slide.sliderText}</h2>
                        <button type="button" className="btn btn-outline-light">
                          Visit Now
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slider;
