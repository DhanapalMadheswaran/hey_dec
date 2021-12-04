import React, { useState } from "react";

function EditMenuModal({ handleSubmit }) {
  const [input, setInput] = useState({});
  const buttonClick = (e) => {
    setInput({
      value: e,
    });
  };
  return (
    <>
      <div className="form-group " style={{ border: "1px solid #fff" }}>
        <div class="col-lg-5 col-md-5">
          <div class="popup-p1">
            <p>Edit Menu</p>
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

        <div class="container-popup">
          <div class="popup-prop">
            <div class="popup-1">
              <div class="row">
                <div class="col-lg-6 col-md-6">
                  <p>Veg</p>
                </div>
                <div class="col-lg-6 col-md-6">
                  <span>
                    Customization Dedected,
                    <br /> We will fetch Your price soon
                  </span>
                </div>
              </div>
            </div>
            <hr />

            <div class="start">
              <p>
                Starters<i class="fas fa-mug-hot"></i>
              </p>
              <span>*Select 2 Choices</span>
            </div>

            <div class="lunch-checkbox">
              <div class="row">
                <div class="col-6">
                  <div class="check">
                    {" "}
                    <input type="checkbox" class="screenshots" />
                    <label for="javascript" class="check_label">
                      Cheese Nuggets
                    </label>
                  </div>
                  <div class="check">
                    {" "}
                    <input type="checkbox" class="screenshots" />
                    <label for="RAW" class="check_label">
                      Chilly Paneer
                    </label>
                  </div>
                </div>

                <div class="col-6">
                  <div class="check">
                    {" "}
                    <input type="checkbox" class="screenshots" />
                    <label for="javascript" class="check_label">
                      Cheese Nuggets
                    </label>
                  </div>
                  <div class="check">
                    {" "}
                    <input type="checkbox" class="screenshots" />
                    <label for="RAW" class="check_label">
                      Chilly Paneer
                    </label>
                  </div>
                </div>
              </div>
              <hr />
            </div>

            <div class="start">
              <p>
                Soups<i class="fas fa-mug-hot"></i>
              </p>
              <span>*Select 3 Choices</span>
            </div>

            <div class="lunch-checkbox">
              <div class="row">
                <div class="col-6">
                  <div class="check">
                    {" "}
                    <input type="checkbox" class="screenshots" />
                    <label for="javascript" class="check_label">
                      Cream Of Mushroom
                    </label>
                  </div>
                  <div class="check">
                    {" "}
                    <input type="checkbox" class="screenshots" />
                    <label for="RAW" class="check_label">
                      Cream Of Tomato
                    </label>
                  </div>
                  <div class="check">
                    {" "}
                    <input type="checkbox" class="screenshots" />
                    <label for="RAW" class="check_label">
                      Veg Machow Soup
                    </label>
                  </div>
                </div>

                <div class="col-6">
                  <div class="check">
                    {" "}
                    <input type="checkbox" class="screenshots" />
                    <label for="javascript" class="check_label">
                      Cream Of Mushroom
                    </label>
                  </div>
                  <div class="check">
                    {" "}
                    <input type="checkbox" class="screenshots" />
                    <label for="RAW" class="check_label">
                      Cream Of Tomato
                    </label>
                  </div>
                  <div class="check">
                    {" "}
                    <input type="checkbox" class="screenshots" />
                    <label for="RAW" class="check_label">
                      Veg Machow Soup
                    </label>
                  </div>
                </div>
              </div>
              <hr />
            </div>

            <div class="start">
              <p>
                Salads<i class="fas fa-mug-hot"></i>
              </p>
              <span>*Select 3 Choices</span>
            </div>

            <div class="lunch-checkbox">
              <div class="row">
                <div class="col-6">
                  <div class="check">
                    {" "}
                    <input type="checkbox" class="screenshots" />
                    <label for="javascript" class="check_label">
                      Fresh Basil
                    </label>
                  </div>
                  <div class="check">
                    {" "}
                    <input type="checkbox" class="screenshots" />
                    <label for="RAW" class="check_label">
                      Woldrof Salad
                    </label>
                  </div>
                  <div class="check">
                    {" "}
                    <input type="checkbox" class="screenshots" />
                    <label for="RAW" class="check_label">
                      Channa Chat
                    </label>
                  </div>
                </div>

                <div class="col-6">
                  <div class="check">
                    {" "}
                    <input type="checkbox" class="screenshots" />
                    <label for="javascript" class="check_label">
                      Fresh Basil
                    </label>
                  </div>
                  <div class="check">
                    {" "}
                    <input type="checkbox" class="screenshots" />
                    <label for="RAW" class="check_label">
                      Woldrof Salad
                    </label>
                  </div>
                  <div class="check">
                    {" "}
                    <input type="checkbox" class="screenshots" />
                    <label for="RAW" class="check_label">
                      Channa Chat
                    </label>
                  </div>
                </div>
              </div>
              <hr />
            </div>

            <div class="start">
              <p>
                VegCourse<i class="fas fa-mug-hot"></i>
              </p>
              <span>*Select 5 Choices</span>
            </div>

            <div class="lunch-checkbox">
              <div class="row">
                <div class="col-6">
                  <div class="check">
                    {" "}
                    <input type="checkbox" class="screenshots" />
                    <label for="javascript" class="check_label">
                      Panner Palak
                    </label>
                  </div>
                  <div class="check">
                    {" "}
                    <input type="checkbox" class="screenshots" />
                    <label for="RAW" class="check_label">
                      Vegetable Korma
                    </label>
                  </div>
                  <div class="check">
                    {" "}
                    <input type="checkbox" class="screenshots" />
                    <label for="RAW" class="check_label">
                      Pakoda Kara Kozhambu
                    </label>
                  </div>
                  <div class="check">
                    {" "}
                    <input type="checkbox" class="screenshots" />
                    <label for="RAW" class="check_label">
                      Kari kari mandi
                    </label>
                  </div>
                  <div class="check">
                    {" "}
                    <input type="checkbox" class="screenshots" />
                    <label for="RAW" class="check_label">
                      Avial
                    </label>
                  </div>
                </div>

                <div class="col-6">
                  <div class="check">
                    {" "}
                    <input type="checkbox" class="screenshots" />
                    <label for="javascript" class="check_label">
                      Panner Palak
                    </label>
                  </div>
                  <div class="check">
                    {" "}
                    <input type="checkbox" class="screenshots" />
                    <label for="RAW" class="check_label">
                      Vegetable Korma
                    </label>
                  </div>
                  <div class="check">
                    {" "}
                    <input type="checkbox" class="screenshots" />
                    <label for="RAW" class="check_label">
                      Pakoda Kara Kozhambu
                    </label>
                  </div>
                  <div class="check">
                    {" "}
                    <input type="checkbox" class="screenshots" />
                    <label for="RAW" class="check_label">
                      Kari kari mandi
                    </label>
                  </div>
                  <div class="check">
                    {" "}
                    <input type="checkbox" class="screenshots" />
                    <label for="RAW" class="check_label">
                      Avial
                    </label>
                  </div>
                </div>
              </div>
              <hr />
            </div>

            <div class="start">
              <p>
                IndianBreads<i class="fas fa-mug-hot"></i>
              </p>
              <span>*Select 3 Choices</span>
            </div>

            <div class="lunch-checkbox">
              <div class="row">
                <div class="col-6">
                  <div class="check">
                    {" "}
                    <input type="checkbox" class="screenshots" />
                    <label for="javascript" class="check_label">
                      Butter Naan
                    </label>
                  </div>
                  <div class="check">
                    {" "}
                    <input type="checkbox" class="screenshots" />
                    <label for="RAW" class="check_label">
                      Garlic Kulcha
                    </label>
                  </div>
                  <div class="check">
                    {" "}
                    <input type="checkbox" class="screenshots" />
                    <label for="RAW" class="check_label">
                      Missi Roti
                    </label>
                  </div>
                </div>

                <div class="col-6">
                  <div class="check">
                    {" "}
                    <input type="checkbox" class="screenshots" />
                    <label for="javascript" class="check_label">
                      Butter Naan
                    </label>
                  </div>
                  <div class="check">
                    {" "}
                    <input type="checkbox" class="screenshots" />
                    <label for="RAW" class="check_label">
                      Garlic Kulcha
                    </label>
                  </div>
                  <div class="check">
                    {" "}
                    <input type="checkbox" class="screenshots" />
                    <label for="RAW" class="check_label">
                      Missi Roti
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div class="Popup-footer">
              <div class="col-2 justify-content-start m-0 p-0">
                {" "}
                <button
                  type="button"
                  class="btn btn-outline-light box-shadow--16dp"
                  data-dismiss="modal"
                >
                  Confirm
                </button>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>

      <button>Confirm</button>
    </>
  );
}

export default EditMenuModal;
