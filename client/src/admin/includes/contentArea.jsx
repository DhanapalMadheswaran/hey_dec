import React, { Component } from "react";

export default class ContentArea extends Component {
  render() {
    return (
      <div className="nk-content ">
        <div className="container-fluid">
          <div className="nk-content-inner">
            <div className="nk-content-body">
              <div className="nk-block-head nk-block-head-sm">
                <div className="nk-block-between">
                  <div className="nk-block-head-content">
                    <h3 className="nk-block-title page-title">
                      Sales Overview
                    </h3>
                    <div className="nk-block-des text-soft">
                      <p>Welcome to DashLite Dashboard Template.</p>
                    </div>
                  </div>
                  <div className="nk-block-head-content">
                    <div className="toggle-wrap nk-block-tools-toggle">
                      <a
                        href="/#"
                        className="btn btn-icon btn-trigger toggle-expand mr-n1"
                        data-target="pageMenu"
                      >
                        <em className="icon ni ni-more-v"></em>
                      </a>
                      <div
                        className="toggle-expand-content"
                        data-content="pageMenu"
                      >
                        <ul className="nk-block-tools g-3">
                          <li>
                            <div className="dropdown">
                              <a
                                href="/#"
                                className="dropdown-toggle btn btn-white btn-dim btn-outline-light"
                                data-toggle="dropdown"
                              >
                                <em className="d-none d-sm-inline icon ni ni-calender-date"></em>
                                <span>
                                  <span className="d-none d-md-inline">
                                    Last
                                  </span>{" "}
                                  30 Days
                                </span>
                                <em className="dd-indc icon ni ni-chevron-right"></em>
                              </a>
                              <div className="dropdown-menu dropdown-menu-right">
                                <ul className="link-list-opt no-bdr">
                                  <li>
                                    <a href="/#">
                                      <span>Last 30 Days</span>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="/#">
                                      <span>Last 6 Months</span>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="/#">
                                      <span>Last 1 Years</span>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </li>
                          <li className="nk-block-tools-opt">
                            <a href="/#" className="btn btn-primary">
                              <em className="icon ni ni-reports"></em>
                              <span>Reports</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* .nk-block-head */}
              <div className="nk-block">
                <div className="row g-gs">
                  <div className="col-xxl-6">
                    <div className="row g-gs">
                      <div className="col-lg-6 col-xxl-12">
                        <div className="card card-bordered">
                          <div className="card-inner">
                            <div className="card-title-group align-start mb-2">
                              <div className="card-title">
                                <h6 className="title">Sales Revenue</h6>
                                <p>
                                  In last 30 days revenue from subscription.
                                </p>
                              </div>
                              <div className="card-tools">
                                <em
                                  className="card-hint icon ni ni-help-fill"
                                  data-toggle="tooltip"
                                  data-placement="left"
                                  title="Revenue from subscription"
                                ></em>
                              </div>
                            </div>
                            <div className="align-end gy-3 gx-5 flex-wrap flex-md-nowrap flex-lg-wrap flex-xxl-nowrap">
                              <div className="nk-sale-data-group flex-md-nowrap g-4">
                                <div className="nk-sale-data">
                                  <span className="amount">
                                    14,299.59{" "}
                                    <span className="change down text-danger">
                                      <em className="icon ni ni-arrow-long-down"></em>
                                      16.93%
                                    </span>
                                  </span>
                                  <span className="sub-title">This Month</span>
                                </div>
                                <div className="nk-sale-data">
                                  <span className="amount">
                                    7,299.59{" "}
                                    <span className="change up text-success">
                                      <em className="icon ni ni-arrow-long-up"></em>
                                      4.26%
                                    </span>
                                  </span>
                                  <span className="sub-title">This Week</span>
                                </div>
                              </div>
                              <div className="nk-sales-ck sales-revenue">
                                <canvas
                                  className="sales-bar-chart"
                                  id="salesRevenue"
                                ></canvas>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-xxl-12">
                        <div className="row g-gs">
                          <div className="col-sm-6 col-lg-12 col-xxl-6">
                            <div className="card card-bordered">
                              <div className="card-inner">
                                <div className="card-title-group align-start mb-2">
                                  <div className="card-title">
                                    <h6 className="title">
                                      Active Subscriptions
                                    </h6>
                                  </div>
                                  <div className="card-tools">
                                    <em
                                      className="card-hint icon ni ni-help-fill"
                                      data-toggle="tooltip"
                                      data-placement="left"
                                      title="Total active subscription"
                                    ></em>
                                  </div>
                                </div>
                                <div className="align-end flex-sm-wrap g-4 flex-md-nowrap">
                                  <div className="nk-sale-data">
                                    <span className="amount">9.69K</span>
                                    <span className="sub-title">
                                      <span className="change down text-danger">
                                        <em className="icon ni ni-arrow-long-down"></em>
                                        1.93%
                                      </span>
                                      since last month
                                    </span>
                                  </div>
                                  <div className="nk-sales-ck">
                                    <canvas
                                      className="sales-bar-chart"
                                      id="activeSubscription"
                                    ></canvas>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-6 col-lg-12 col-xxl-6">
                            <div className="card card-bordered">
                              <div className="card-inner">
                                <div className="card-title-group align-start mb-2">
                                  <div className="card-title">
                                    <h6 className="title">Avg Subscriptions</h6>
                                  </div>
                                  <div className="card-tools">
                                    <em
                                      className="card-hint icon ni ni-help-fill"
                                      data-toggle="tooltip"
                                      data-placement="left"
                                      title="Daily Avg. subscription"
                                    ></em>
                                  </div>
                                </div>
                                <div className="align-end flex-sm-wrap g-4 flex-md-nowrap">
                                  <div className="nk-sale-data">
                                    <span className="amount">346.2</span>
                                    <span className="sub-title">
                                      <span className="change up text-success">
                                        <em className="icon ni ni-arrow-long-up"></em>
                                        2.45%
                                      </span>
                                      since last week
                                    </span>
                                  </div>
                                  <div className="nk-sales-ck">
                                    <canvas
                                      className="sales-bar-chart"
                                      id="totalSubscription"
                                    ></canvas>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-6">
                    <div className="card card-bordered h-100">
                      <div className="card-inner">
                        <div className="card-title-group align-start gx-3 mb-3">
                          <div className="card-title">
                            <h6 className="title">Sales Overview</h6>
                            <p>
                              In 30 days sales of product subscription.{" "}
                              <a href="/#">See Details</a>
                            </p>
                          </div>
                          <div className="card-tools">
                            <div className="dropdown">
                              <a
                                href="/#"
                                className="btn btn-primary btn-dim d-none d-sm-inline-flex"
                                data-toggle="dropdown"
                              >
                                <em className="icon ni ni-download-cloud"></em>
                                <span>
                                  <span className="d-none d-md-inline">
                                    Download
                                  </span>{" "}
                                  Report
                                </span>
                              </a>
                              <a
                                href="/#"
                                className="btn btn-icon btn-primary btn-dim d-sm-none"
                                data-toggle="dropdown"
                              >
                                <em className="icon ni ni-download-cloud"></em>
                              </a>
                              <div className="dropdown-menu dropdown-menu-right">
                                <ul className="link-list-opt no-bdr">
                                  <li>
                                    <a href="/#">
                                      <span>Download Mini Version</span>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="/#">
                                      <span>Download Full Version</span>
                                    </a>
                                  </li>
                                  <li className="divider"></li>
                                  <li>
                                    <a href="/#">
                                      <em className="icon ni ni-opt-alt"></em>
                                      <span>More Options</span>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="nk-sale-data-group align-center justify-between gy-3 gx-5">
                          <div className="nk-sale-data">
                            <span className="amount">$82,944.60</span>
                          </div>
                          <div className="nk-sale-data">
                            <span className="amount sm">
                              1,937 <small>Subscribers</small>
                            </span>
                          </div>
                        </div>
                        <div className="nk-sales-ck large pt-4">
                          <canvas
                            className="sales-overview-chart"
                            id="salesOverview"
                          ></canvas>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-8">
                    <div className="card card-bordered card-full">
                      <div className="card-inner">
                        <div className="card-title-group">
                          <div className="card-title">
                            <h6 className="title">
                              <span className="mr-2">Transaction</span>{" "}
                              <a href="/#" className="link d-none d-sm-inline">
                                See History
                              </a>
                            </h6>
                          </div>
                          <div className="card-tools">
                            <ul className="card-tools-nav">
                              <li>
                                <a href="/#">
                                  <span>Paid</span>
                                </a>
                              </li>
                              <li>
                                <a href="/#">
                                  <span>Pending</span>
                                </a>
                              </li>
                              <li className="active">
                                <a href="/#">
                                  <span>All</span>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="card-inner p-0 border-top">
                        <div className="nk-tb-list nk-tb-orders">
                          <div className="nk-tb-item nk-tb-head">
                            <div className="nk-tb-col">
                              <span>Order No.</span>
                            </div>
                            <div className="nk-tb-col tb-col-sm">
                              <span>Customer</span>
                            </div>
                            <div className="nk-tb-col tb-col-md">
                              <span>Date</span>
                            </div>
                            <div className="nk-tb-col tb-col-lg">
                              <span>Ref</span>
                            </div>
                            <div className="nk-tb-col">
                              <span>Amount</span>
                            </div>
                            <div className="nk-tb-col">
                              <span className="d-none d-sm-inline">Status</span>
                            </div>
                            <div className="nk-tb-col">
                              <span>&nbsp;</span>
                            </div>
                          </div>
                          <div className="nk-tb-item">
                            <div className="nk-tb-col">
                              <span className="tb-lead">
                                <a href="/#">#95954</a>
                              </span>
                            </div>
                            <div className="nk-tb-col tb-col-sm">
                              <div className="user-card">
                                <div className="user-avatar user-avatar-sm bg-purple">
                                  <span>AB</span>
                                </div>
                                <div className="user-name">
                                  <span className="tb-lead">
                                    Abu Bin Ishtiyak
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="nk-tb-col tb-col-md">
                              <span className="tb-sub">02/11/2020</span>
                            </div>
                            <div className="nk-tb-col tb-col-lg">
                              <span className="tb-sub text-primary">
                                SUB-2309232
                              </span>
                            </div>
                            <div className="nk-tb-col">
                              <span className="tb-sub tb-amount">
                                4,596.75 <span>USD</span>
                              </span>
                            </div>
                            <div className="nk-tb-col">
                              <span className="badge badge-dot badge-dot-xs badge-success">
                                Paid
                              </span>
                            </div>
                            <div className="nk-tb-col nk-tb-col-action">
                              <div className="dropdown">
                                <a
                                  href="/#"
                                  className="text-soft dropdown-toggle btn btn-icon btn-trigger"
                                  data-toggle="dropdown"
                                >
                                  <em className="icon ni ni-more-h"></em>
                                </a>
                                <div className="dropdown-menu dropdown-menu-right dropdown-menu-xs">
                                  <ul className="link-list-plain">
                                    <li>
                                      <a href="/#">View</a>
                                    </li>
                                    <li>
                                      <a href="/#">Invoice</a>
                                    </li>
                                    <li>
                                      <a href="/#">Print</a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="nk-tb-item">
                            <div className="nk-tb-col">
                              <span className="tb-lead">
                                <a href="/#">#95850</a>
                              </span>
                            </div>
                            <div className="nk-tb-col tb-col-sm">
                              <div className="user-card">
                                <div className="user-avatar user-avatar-sm bg-azure">
                                  <span>DE</span>
                                </div>
                                <div className="user-name">
                                  <span className="tb-lead">
                                    Desiree Edwards
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="nk-tb-col tb-col-md">
                              <span className="tb-sub">02/02/2020</span>
                            </div>
                            <div className="nk-tb-col tb-col-lg">
                              <span className="tb-sub text-primary">
                                SUB-2309154
                              </span>
                            </div>
                            <div className="nk-tb-col">
                              <span className="tb-sub tb-amount">
                                596.75 <span>USD</span>
                              </span>
                            </div>
                            <div className="nk-tb-col">
                              <span className="badge badge-dot badge-dot-xs badge-danger">
                                Canceled
                              </span>
                            </div>
                            <div className="nk-tb-col nk-tb-col-action">
                              <div className="dropdown">
                                <a
                                  href="/#"
                                  className="text-soft dropdown-toggle btn btn-icon btn-trigger"
                                  data-toggle="dropdown"
                                >
                                  <em className="icon ni ni-more-h"></em>
                                </a>
                                <div className="dropdown-menu dropdown-menu-right dropdown-menu-xs">
                                  <ul className="link-list-plain">
                                    <li>
                                      <a href="/#">View</a>
                                    </li>
                                    <li>
                                      <a href="/#">Remove</a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="nk-tb-item">
                            <div className="nk-tb-col">
                              <span className="tb-lead">
                                <a href="/#">#95812</a>
                              </span>
                            </div>
                            <div className="nk-tb-col tb-col-sm">
                              <div className="user-card">
                                <div className="user-avatar user-avatar-sm bg-warning">
                                  <img src="./images/avatar/b-sm.jpg" alt="" />
                                </div>
                                <div className="user-name">
                                  <span className="tb-lead">
                                    Blanca Schultz
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="nk-tb-col tb-col-md">
                              <span className="tb-sub">02/01/2020</span>
                            </div>
                            <div className="nk-tb-col tb-col-lg">
                              <span className="tb-sub text-primary">
                                SUB-2309143
                              </span>
                            </div>
                            <div className="nk-tb-col">
                              <span className="tb-sub tb-amount">
                                199.99 <span>USD</span>
                              </span>
                            </div>
                            <div className="nk-tb-col">
                              <span className="badge badge-dot badge-dot-xs badge-success">
                                Paid
                              </span>
                            </div>
                            <div className="nk-tb-col nk-tb-col-action">
                              <div className="dropdown">
                                <a
                                  href="/#"
                                  className="text-soft dropdown-toggle btn btn-icon btn-trigger"
                                  data-toggle="dropdown"
                                >
                                  <em className="icon ni ni-more-h"></em>
                                </a>
                                <div className="dropdown-menu dropdown-menu-right dropdown-menu-xs">
                                  <ul className="link-list-plain">
                                    <li>
                                      <a href="/#">View</a>
                                    </li>
                                    <li>
                                      <a href="/#">Invoice</a>
                                    </li>
                                    <li>
                                      <a href="/#">Print</a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="nk-tb-item">
                            <div className="nk-tb-col">
                              <span className="tb-lead">
                                <a href="/#">#95256</a>
                              </span>
                            </div>
                            <div className="nk-tb-col tb-col-sm">
                              <div className="user-card">
                                <div className="user-avatar user-avatar-sm bg-purple">
                                  <span>NL</span>
                                </div>
                                <div className="user-name">
                                  <span className="tb-lead">
                                    Naomi Lawrence
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="nk-tb-col tb-col-md">
                              <span className="tb-sub">01/29/2020</span>
                            </div>
                            <div className="nk-tb-col tb-col-lg">
                              <span className="tb-sub text-primary">
                                SUB-2305684
                              </span>
                            </div>
                            <div className="nk-tb-col">
                              <span className="tb-sub tb-amount">
                                1099.99 <span>USD</span>
                              </span>
                            </div>
                            <div className="nk-tb-col">
                              <span className="badge badge-dot badge-dot-xs badge-success">
                                Paid
                              </span>
                            </div>
                            <div className="nk-tb-col nk-tb-col-action">
                              <div className="dropdown">
                                <a
                                  href="/#"
                                  className="text-soft dropdown-toggle btn btn-icon btn-trigger"
                                  data-toggle="dropdown"
                                >
                                  <em className="icon ni ni-more-h"></em>
                                </a>
                                <div className="dropdown-menu dropdown-menu-right dropdown-menu-xs">
                                  <ul className="link-list-plain">
                                    <li>
                                      <a href="/#">View</a>
                                    </li>
                                    <li>
                                      <a href="/#">Invoice</a>
                                    </li>
                                    <li>
                                      <a href="/#">Print</a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="nk-tb-item">
                            <div className="nk-tb-col">
                              <span className="tb-lead">
                                <a href="/#">#95135</a>
                              </span>
                            </div>
                            <div className="nk-tb-col tb-col-sm">
                              <div className="user-card">
                                <div className="user-avatar user-avatar-sm bg-success">
                                  <span>CH</span>
                                </div>
                                <div className="user-name">
                                  <span className="tb-lead">
                                    Cassandra Hogan
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="nk-tb-col tb-col-md">
                              <span className="tb-sub">01/29/2020</span>
                            </div>
                            <div className="nk-tb-col tb-col-lg">
                              <span className="tb-sub text-primary">
                                SUB-2305564
                              </span>
                            </div>
                            <div className="nk-tb-col">
                              <span className="tb-sub tb-amount">
                                1099.99 <span>USD</span>
                              </span>
                            </div>
                            <div className="nk-tb-col">
                              <span className="badge badge-dot badge-dot-xs badge-warning">
                                Due
                              </span>
                            </div>
                            <div className="nk-tb-col nk-tb-col-action">
                              <div className="dropdown">
                                <a
                                  href="/#"
                                  className="text-soft dropdown-toggle btn btn-icon btn-trigger"
                                  data-toggle="dropdown"
                                >
                                  <em className="icon ni ni-more-h"></em>
                                </a>
                                <div className="dropdown-menu dropdown-menu-right dropdown-menu-xs">
                                  <ul className="link-list-plain">
                                    <li>
                                      <a href="/#">View</a>
                                    </li>
                                    <li>
                                      <a href="/#">Invoice</a>
                                    </li>
                                    <li>
                                      <a href="/#">Notify</a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="card-inner-sm border-top text-center d-sm-none">
                        <a href="/#" className="btn btn-link btn-block">
                          See History
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-xxl-4">
                    <div className="card card-bordered card-full">
                      <div className="card-inner border-bottom">
                        <div className="card-title-group">
                          <div className="card-title">
                            <h6 className="title">Recent Activities</h6>
                          </div>
                          <div className="card-tools">
                            <ul className="card-tools-nav">
                              <li>
                                <a href="/#">
                                  <span>Cancel</span>
                                </a>
                              </li>
                              <li className="active">
                                <a href="/#">
                                  <span>All</span>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <ul className="nk-activity">
                        <li className="nk-activity-item">
                          <div className="nk-activity-media user-avatar bg-success">
                            <img src="./images/avatar/c-sm.jpg" alt="" />
                          </div>
                          <div className="nk-activity-data">
                            <div className="label">
                              Keith Jensen requested to Widthdrawl.
                            </div>
                            <span className="time">2 hours ago</span>
                          </div>
                        </li>
                        <li className="nk-activity-item">
                          <div className="nk-activity-media user-avatar bg-warning">
                            HS
                          </div>
                          <div className="nk-activity-data">
                            <div className="label">
                              Harry Simpson placed a Order.
                            </div>
                            <span className="time">2 hours ago</span>
                          </div>
                        </li>
                        <li className="nk-activity-item">
                          <div className="nk-activity-media user-avatar bg-azure">
                            SM
                          </div>
                          <div className="nk-activity-data">
                            <div className="label">
                              Stephanie Marshall got a huge bonus.
                            </div>
                            <span className="time">2 hours ago</span>
                          </div>
                        </li>
                        <li className="nk-activity-item">
                          <div className="nk-activity-media user-avatar bg-purple">
                            <img src="./images/avatar/d-sm.jpg" alt="" />
                          </div>
                          <div className="nk-activity-data">
                            <div className="label">
                              Nicholas Carr deposited funds.
                            </div>
                            <span className="time">2 hours ago</span>
                          </div>
                        </li>
                        <li className="nk-activity-item">
                          <div className="nk-activity-media user-avatar bg-pink">
                            TM
                          </div>
                          <div className="nk-activity-data">
                            <div className="label">
                              Timothy Moreno placed a Order.
                            </div>
                            <span className="time">2 hours ago</span>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-6 col-xxl-4">
                    <div className="card card-bordered card-full">
                      <div className="card-inner-group">
                        <div className="card-inner">
                          <div className="card-title-group">
                            <div className="card-title">
                              <h6 className="title">New Users</h6>
                            </div>
                            <div className="card-tools">
                              <a
                                href="html/user-list-regular.html"
                                className="link"
                              >
                                View All
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="card-inner card-inner-md">
                          <div className="user-card">
                            <div className="user-avatar bg-primary-dim">
                              <span>AB</span>
                            </div>
                            <div className="user-info">
                              <span className="lead-text">
                                Abu Bin Ishtiyak
                              </span>
                              <span className="sub-text">info@softnio.com</span>
                            </div>
                            <div className="user-action">
                              <div className="drodown">
                                <a
                                  href="/#"
                                  className="dropdown-toggle btn btn-icon btn-trigger mr-n1"
                                  data-toggle="dropdown"
                                  aria-expanded="false"
                                >
                                  <em className="icon ni ni-more-h"></em>
                                </a>
                                <div className="dropdown-menu dropdown-menu-right">
                                  <ul className="link-list-opt no-bdr">
                                    <li>
                                      <a href="/#">
                                        <em className="icon ni ni-setting"></em>
                                        <span>Action Settings</span>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="/#">
                                        <em className="icon ni ni-notify"></em>
                                        <span>Push Notification</span>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="card-inner card-inner-md">
                          <div className="user-card">
                            <div className="user-avatar bg-pink-dim">
                              <span>SW</span>
                            </div>
                            <div className="user-info">
                              <span className="lead-text">Sharon Walker</span>
                              <span className="sub-text">
                                sharon-90@example.com
                              </span>
                            </div>
                            <div className="user-action">
                              <div className="drodown">
                                <a
                                  href="/#"
                                  className="dropdown-toggle btn btn-icon btn-trigger mr-n1"
                                  data-toggle="dropdown"
                                  aria-expanded="false"
                                >
                                  <em className="icon ni ni-more-h"></em>
                                </a>
                                <div className="dropdown-menu dropdown-menu-right">
                                  <ul className="link-list-opt no-bdr">
                                    <li>
                                      <a href="/#">
                                        <em className="icon ni ni-setting"></em>
                                        <span>Action Settings</span>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="/#">
                                        <em className="icon ni ni-notify"></em>
                                        <span>Push Notification</span>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="card-inner card-inner-md">
                          <div className="user-card">
                            <div className="user-avatar bg-warning-dim">
                              <span>GO</span>
                            </div>
                            <div className="user-info">
                              <span className="lead-text">Gloria Oliver</span>
                              <span className="sub-text">
                                gloria_72@example.com
                              </span>
                            </div>
                            <div className="user-action">
                              <div className="drodown">
                                <a
                                  href="/#"
                                  className="dropdown-toggle btn btn-icon btn-trigger mr-n1"
                                  data-toggle="dropdown"
                                  aria-expanded="false"
                                >
                                  <em className="icon ni ni-more-h"></em>
                                </a>
                                <div className="dropdown-menu dropdown-menu-right">
                                  <ul className="link-list-opt no-bdr">
                                    <li>
                                      <a href="/#">
                                        <em className="icon ni ni-setting"></em>
                                        <span>Action Settings</span>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="/#">
                                        <em className="icon ni ni-notify"></em>
                                        <span>Push Notification</span>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="card-inner card-inner-md">
                          <div className="user-card">
                            <div className="user-avatar bg-success-dim">
                              <span>PS</span>
                            </div>
                            <div className="user-info">
                              <span className="lead-text">
                                Phillip Sullivan
                              </span>
                              <span className="sub-text">
                                phillip-85@example.com
                              </span>
                            </div>
                            <div className="user-action">
                              <div className="drodown">
                                <a
                                  href="/#"
                                  className="dropdown-toggle btn btn-icon btn-trigger mr-n1"
                                  data-toggle="dropdown"
                                  aria-expanded="false"
                                >
                                  <em className="icon ni ni-more-h"></em>
                                </a>
                                <div className="dropdown-menu dropdown-menu-right">
                                  <ul className="link-list-opt no-bdr">
                                    <li>
                                      <a href="/#">
                                        <em className="icon ni ni-setting"></em>
                                        <span>Action Settings</span>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="/#">
                                        <em className="icon ni ni-notify"></em>
                                        <span>Push Notification</span>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-xxl-4">
                    <div className="card card-bordered h-100">
                      <div className="card-inner border-bottom">
                        <div className="card-title-group">
                          <div className="card-title">
                            <h6 className="title">Support Requests</h6>
                          </div>
                          <div className="card-tools">
                            <a href="/#" className="link">
                              All Tickets
                            </a>
                          </div>
                        </div>
                      </div>
                      <ul className="nk-support">
                        <li className="nk-support-item">
                          <div className="user-avatar">
                            <img src="./images/avatar/a-sm.jpg" alt="" />
                          </div>
                          <div className="nk-support-content">
                            <div className="title">
                              <span>Vincent Lopez</span>
                              <span className="badge badge-dot badge-dot-xs badge-warning ml-1">
                                Pending
                              </span>
                            </div>
                            <p>Thanks for contact us with your issues...</p>
                            <span className="time">6 min ago</span>
                          </div>
                        </li>
                        <li className="nk-support-item">
                          <div className="user-avatar bg-purple-dim">
                            <span>DM</span>
                          </div>
                          <div className="nk-support-content">
                            <div className="title">
                              <span>Daniel Moore</span>
                              <span className="badge badge-dot badge-dot-xs badge-info ml-1">
                                Open
                              </span>
                            </div>
                            <p>Thanks for contact us with your issues...</p>
                            <span className="time">2 Hours ago</span>
                          </div>
                        </li>
                        <li className="nk-support-item">
                          <div className="user-avatar">
                            <img src="./images/avatar/b-sm.jpg" alt="" />
                          </div>
                          <div className="nk-support-content">
                            <div className="title">
                              <span>Larry Henry</span>
                              <span className="badge badge-dot badge-dot-xs badge-success ml-1">
                                Solved
                              </span>
                            </div>
                            <p>Thanks for contact us with your issues...</p>
                            <span className="time">3 Hours ago</span>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-6 col-xxl-4">
                    <div className="card card-bordered h-100">
                      <div className="card-inner border-bottom">
                        <div className="card-title-group">
                          <div className="card-title">
                            <h6 className="title">Notifications</h6>
                          </div>
                          <div className="card-tools">
                            <a href="/#" className="link">
                              View All
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="card-inner">
                        <div className="timeline">
                          <h6 className="timeline-head">November, 2019</h6>
                          <ul className="timeline-list">
                            <li className="timeline-item">
                              <div className="timeline-status bg-primary is-outline"></div>
                              <div className="timeline-date">
                                13 Nov{" "}
                                <em className="icon ni ni-alarm-alt"></em>
                              </div>
                              <div className="timeline-data">
                                <h6 className="timeline-title">
                                  Submited KYC Application
                                </h6>
                                <div className="timeline-des">
                                  <p>Re-submitted KYC Application form.</p>
                                  <span className="time">09:30am</span>
                                </div>
                              </div>
                            </li>
                            <li className="timeline-item">
                              <div className="timeline-status bg-primary"></div>
                              <div className="timeline-date">
                                13 Nov{" "}
                                <em className="icon ni ni-alarm-alt"></em>
                              </div>
                              <div className="timeline-data">
                                <h6 className="timeline-title">
                                  Submited KYC Application
                                </h6>
                                <div className="timeline-des">
                                  <p>Re-submitted KYC Application form.</p>
                                  <span className="time">09:30am</span>
                                </div>
                              </div>
                            </li>
                            <li className="timeline-item">
                              <div className="timeline-status bg-pink"></div>
                              <div className="timeline-date">
                                13 Nov{" "}
                                <em className="icon ni ni-alarm-alt"></em>
                              </div>
                              <div className="timeline-data">
                                <h6 className="timeline-title">
                                  Submited KYC Application
                                </h6>
                                <div className="timeline-des">
                                  <p>Re-submitted KYC Application form.</p>
                                  <span className="time">09:30am</span>
                                </div>
                              </div>
                            </li>
                          </ul>
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
    );
  }
}
