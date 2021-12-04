import React from "react";
import { Link } from "react-router-dom";

export default function VendorHeader() {
  let profile = JSON.parse(localStorage?.getItem?.("profile"));
  return (
    <div className="row">
      <div className="col-xl-12 col-lg-12 col-ms-12 col-sm-12">
        <div className="profile-tabs">
          <nav className="nav-fil-clr">
            <div className="nav nav-tabs nav-fill" id="nav-tab" role="tablist">
              <Link className="nav-item nav-link" to="eventVendorprofile">
                Profile
              </Link>
              <Link
                className="nav-item nav-link"
                to={`/vendorOrders-${profile?.userId}`}
              >
                Orders
              </Link>
              <Link
                className="nav-item nav-link"
                to={`/whishlist-${profile?.userId}`}
              >
                Whishist
              </Link>
              <a
                className="nav-item nav-link"
                id="nav-policies-tab"
                data-toggle="tab"
                href="#!"
                role="tab"
                aria-controls="nav-policies"
                aria-selected="false"
              >
                Policies
              </a>
            </div>
          </nav>
        </div>
        <div className="profile-tabs">
          <nav className="nav-fil-clr">
            <div className="nav nav-tabs nav-fill" id="nav-tab" role="tablist">
              <Link
                className="nav-item nav-link"
                to={`/eventVendorAddSlots-${profile?.userId}`}
              >
                Slots
              </Link>
              <a
                className="nav-item nav-link"
                id="nav-business-tab"
                data-toggle="tab"
                href="#!"
                role="tab"
                aria-controls="nav-business"
                aria-selected="false"
              >
                Business Manager
              </a>
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
              <a
                className="nav-item nav-link"
                id="nav-mamber-tab"
                data-toggle="tab"
                href="#!"
                role="tab"
                aria-controls="nav-member"
                aria-selected="false"
              >
                Membership
              </a>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}
