import React from "react";

function Footer(props) {
  return (
    <div
      className="fluid-container"
      data-aos="fade-down"
      data-aos-duration="800"
    >
      <div className="foot-container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 ">
            <img
              className="foot-logo"
              src="../frontend/assets/images/foot-logo.jpg"
              alt="site logo"
            />
            <br />
            <img
              className="social-icons"
              src="../frontend/assets/images/icons/social-media-icons.svg"
              alt="site Logo"
            />
          </div>
          <div className="col-lg-3 col-md-3 col-sm-12">
            <ul className="list-inline foot-items">
              <li>About</li>
              <li>Contact us</li>
              <li>Privacy policy</li>
              <li>Cookie policy</li>
              <li>User agreement</li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-12 ">
            <ul className="list-inline foot-items">
              <li>FAQ's</li>
              <li>Get App</li>
              <li>Payment security</li>
            </ul>
          </div>
          <div className="col-sm-12 text-center foot-copy">
            HeyEvents@2021. All rights reserved
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
