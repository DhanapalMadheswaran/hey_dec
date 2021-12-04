import React, { useEffect } from "react";
import "./order.css";
export default function OrdersList(props) {
  let profile = JSON.parse(localStorage?.getItem?.("profile"));
  const { data = [] } = props;
  useEffect(() => {}, [data]);
  return (
    <div>
      <div className="container mt-4">
        <div className="row">
          <div className="col-lg-12 my-lg-0 my-1">
            <div id="main-content" className="bg-white border">
              <div className="d-flex flex-column">
                <div className="h5">Hello {profile?.name},</div>
                <div>Logged in as: {profile?.email}</div>
              </div>
              <div className="d-flex my-4 flex-wrap">
                <div className="box me-4 my-1 bg-light">
                  {" "}
                  <img
                    src="https://www.freepnglogos.com/uploads/box-png/cardboard-box-brown-vector-graphic-pixabay-2.png"
                    alt=""
                  />
                  <div className="d-flex align-items-center mt-2">
                    <div className="tag">Orders placed: </div>
                    <div className="ms-auto number">{data.length}</div>
                  </div>
                </div>
                <div className="box me-4 my-1 bg-light">
                  {" "}
                  <img
                    src="https://www.freepnglogos.com/uploads/shopping-cart-png/shopping-cart-campus-recreation-university-nebraska-lincoln-30.png"
                    alt=""
                  />
                  <div className="d-flex align-items-center mt-2">
                    <div className="tag">Items in Cart</div>
                    <div className="ms-auto number">10</div>
                  </div>
                </div>
                <div className="box me-4 my-1 bg-light">
                  {" "}
                  <img
                    src="https://www.freepnglogos.com/uploads/love-png/love-png-heart-symbol-wikipedia-11.png"
                    alt=""
                  />
                  <div className="d-flex align-items-center mt-2">
                    <div className="tag">Wishlist</div>
                    <div className="ms-auto number">10</div>
                  </div>
                </div>
              </div>
              <div className="text-uppercase">My recent orders</div>
              {data.length > 0 ? (
                <div>
                  {data?.map((row, i) => (
                    <div className="order my-3 bg-light">
                      <div className="row">
                        <div className="col-lg-4">
                          <div className="d-flex flex-column justify-content-between order-summary">
                            <div className="d-flex align-items-center">
                              <div className="text-uppercase">{row._id}</div>
                              <div className="blue-label ms-auto text-uppercase">
                                {row.payment_status}
                              </div>
                            </div>
                            <div className="fs-8">Session: {row.session}</div>
                            <div className="fs-8">
                              Event Date: {row.event_date}{" "}
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-8">
                          <div className="d-sm-flex align-items-sm-start justify-content-sm-between">
                            <div className="status">Status : {row.status}</div>
                            <div className="btn btn-primary text-uppercase">
                              order info
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <h4>Data Not Found</h4>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
