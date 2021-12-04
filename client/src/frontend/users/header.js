import React from "react";
import { Link } from "react-router-dom";

export default function UserHeader() {
  let profile = JSON.parse(localStorage?.getItem?.("profile"));
  return (
    <div className="row">
      <div className="col-xl-12 col-lg-12 col-ms-12 col-sm-12">
        <div className="profile-tabs">
          <nav className="nav-fil-clr">
            <div className="nav nav-tabs nav-fill" id="nav-tab" role="tablist">
              <Link className="nav-item nav-link" to="userProfile">
                Profile
              </Link>
              <Link
                className="nav-item nav-link"
                to={`/userOrders-${profile?.userId}`}
              >
                Orders
              </Link>
              <Link
                className="nav-item nav-link"
                to={`/whishlist-${profile?.userId}`}
              >
                Whishist
              </Link>
            </div>
          </nav>
        </div>
        <div className="profile-tabs">
          <nav className="nav-fil-clr">
            <div className="nav nav-tabs nav-fill" id="nav-tab" role="tablist">
              <a
                className="nav-item nav-link"
                id="nav-reviews-tab"
                data-toggle="tab"
                href="#!"
                role="tab"
                aria-controls="nav-reviews"
                aria-selected="false"
              >
                Reviews
              </a>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}
