import React, { useState } from "react";
function BreakfastPremiumMenus({ handleSubmit }) {
  const buttonClick = (e) => {};
  return (
    <>
      <div className="form-group " style={{ border: "1px solid #fff" }}>
        <div class="col-lg-5 col-md-5">
          <div class="popup-p1">
            <p>BreakFast</p>
          </div>
        </div>

        <div class="topMargin"></div>

        <div class="menu-list-type">
          <p>Your Platinum menu includes</p>
          <hr />
          <h6>2 Starters | 3 soups | 3 salads | 5 veg Course</h6>
          <h6>3 Indian Bread| 3 non veg Course</h6>
          <h6>3 Rice Items | 3 Dessart</h6>
        </div>

        <div class="menu-list-tabs">
          <label for="tab_2">
            <div class="content-menu">
              <div class="menu-bg-color">
                <div class="platinum-title">
                  <h3>Platinum</h3>
                  <hr />
                </div>

                <div class="head-price">
                  <div class="row">
                    <div class="col-6">
                      <h3>
                        800/-
                        <br />
                        <span>Per head</span>
                      </h3>
                    </div>
                    <div class="col-6 edit-btn">
                      <button
                        class="tablinks btn btn-outline-light"
                        onClick={(e) => handleSubmit("editMenu")}
                      >
                        Edit Menu{" "}
                      </button>
                    </div>
                  </div>
                </div>

                <hr class="menu-hr" />
                <div class="row">
                  <div class="col-6">
                    <div class="platinum-menu">
                      <p>
                        Starters<i class="fas fa-mug-hot"></i>
                      </p>
                    </div>
                    <div class="menu-item">
                      <h6>Cheese Nuggets</h6>
                      <h6>Chilly Paneer</h6>
                    </div>
                  </div>
                  <div class="col-6">
                    <div class="platinum-menu">
                      <p>
                        Soups<i class="fas fa-mug-hot"></i>
                      </p>
                    </div>
                    <div class="menu-item">
                      <h6>Cream of Mushroom</h6>
                      <h6>Cream of Tomato</h6>
                      <h6>Veg Machow soup</h6>
                    </div>
                  </div>
                </div>

                <hr class="menu-hr" />
                <div class="row">
                  <div class="col-6">
                    <div class="platinum-menu">
                      <p>
                        Salads<i class="fas fa-mug-hot"></i>
                      </p>
                    </div>
                    <div class="menu-item">
                      <h6>Fresh Basil</h6>
                      <h6>Worldof Salad</h6>
                      <h6>Channa Chat</h6>
                    </div>
                  </div>
                  <div class="col-6">
                    <div class="platinum-menu">
                      <p>
                        Veg Course<i class="fas fa-mug-hot"></i>
                      </p>
                    </div>
                    <div class="menu-item">
                      <h6>Paneer Palak</h6>
                      <h6>Vegetable Korma</h6>
                      <h6>Pakoda Kara Kozhambu</h6>
                      <h6>Kari Kari Mandi</h6>
                      <h6>Avial</h6>
                    </div>
                  </div>
                </div>

                <hr class="menu-hr" />

                <div class="platinum-menu">
                  <p>
                    Indian Breads<i class="fas fa-mug-hot"></i>
                  </p>
                </div>
                <div class="menu-item">
                  <h6>Butter Naan</h6>
                  <h6>Garlic Kulcha</h6>
                  <h6>Missi Roti</h6>
                </div>
                <div class="topMargin"></div>
              </div>
            </div>
          </label>
        </div>
      </div>

      <button>Confirm</button>
    </>
  );
}

export default BreakfastPremiumMenus;
