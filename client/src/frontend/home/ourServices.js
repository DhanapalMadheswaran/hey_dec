import React from "react";

function OurServices(props) {
  return (
    <div>
      <div
        className="container"
        data-aos="fade-up"
        data-aos-delay="400"
        data-aos-duration="800"
      >
        <div className="row">
          <div className="col-sm-12 txt-align">
            <p>
              Our <b>Services</b>
            </p>
          </div>
        </div>
        <div className="flex-container1">
          <div>
            <img
              src="../frontend/assets/images/services/franchise.jpg"
              className="pull-left"
              alt="dite lg"
            />
            <div>
              <h3>
                <b>Franchise</b>
              </h3>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
          </div>

          <div>
            <img
              src="../frontend/assets/images/services/intimate-wedding.jpg"
              className="pull-right"
              alt="site loho"
            />
            <div>
              <h3>
                <b>Intimate Wedding</b>
              </h3>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
          </div>

          <div>
            <img
              src="../frontend/assets/images/services/gift-shop.jpg"
              className="pull-left"
            />
            <div>
              <h3>
                <b>Gift Shop</b>
              </h3>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
          </div>

          <div>
            <img
              src="../frontend/assets/images/services/date-planner.jpg"
              className="pull-right"
            />
            <div>
              <h3>
                <b>Instant Planner</b>
              </h3>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
          </div>

          <div>
            <img
              src="../frontend/assets/images/services/discounts.jpg"
              className="pull-left"
            />
            <div>
              <h3>
                <b>Discounts</b>
              </h3>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
          </div>

          <div>
            <img
              src="../frontend/assets/images/services/match-making.jpg"
              className="pull-right"
            />
            <div>
              <h3>
                <b>Matchmaking</b>
              </h3>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurServices;
