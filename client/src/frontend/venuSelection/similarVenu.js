import React from "react";

import "./venue-selection.css";

function SimilarVenu(props) {
  const { info = [] } = props;
  return (
    <div class="row">
      <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
        <section>
          <div className="-inner">
            <div className="-item ">
              {info.length > 0 ? (
                <div className="row">
                  {info?.map((slide, i) => (
                    <div className="col-md-4 mb-3" key={`slide-${i}`}>
                      <div className="detail-box-review-flag">
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
                            src={slide.image[0]?.url}
                            className="imgrelated"
                          />
                        </div>

                        <div className="detail-box">
                          <div className="type">
                            Rendevous - Vivanta
                            <br />
                            <b>Race Course</b>
                            <img src="./frontend/assets/images/divide-line1.svg" />
                            <span>
                              <b>@1,900</b>
                            </span>
                            &emsp; &emsp; &nbsp;
                            <img src="./frontend/assets/images/icons/ac-color-icon.svg" />
                            &nbsp;<span>Non Ac</span>
                            <br />
                            <span>per Plate</span>&emsp; &emsp; &emsp; &nbsp;
                            <img src="./frontend/assets/images/icons/users-color-icon.svg" />
                            &nbsp;<span>300 Capacity</span>
                          </div>
                        </div>
                        <div className="detail-box-border"></div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <h4>Data Not Found</h4>
              )}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default SimilarVenu;
