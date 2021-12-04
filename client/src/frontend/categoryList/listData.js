import React, { useEffect, useState } from "react";
import Slider from "@material-ui/core/Slider";
import { Rating } from "react-simple-star-rating";

import { Link } from "react-router-dom";
function ListData(props) {
  const { data = [] } = props;
  const [value, setValue] = useState([10, 10000]);
  const [rating, setRating] = useState(5);

  const [search, setSearch] = useState("");
  const [list, setList] = useState(data);

  const clearFilter = () => {
    setSearch("");
    setRating(5);
    setList(data);
  };

  const filterArray = (e) => {
    let data = {
      search_text: search,
      ratting: rating,
      minimum_price: value[0],
      maximum_price: value[1],
      ...e,
    };

    props.filter(data);
  };

  useEffect(() => {
    setList(data);
  }, [data]);
  const handleOnChange = (e) => {
    setSearch(e);
    filterArray({ search_text: e });
  };
  // Catch Rating value
  const handleRating = (rate) => {
    setRating(rate);
    filterArray({ ratting: rate });
  };
  const rangeSelector = (event, newValue) => {
    setValue(newValue);
    filterArray({ minimum_price: newValue[0], maximum_price: newValue[1] });
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-xl-12 col-lg-12 col-ms-12 col-sm-12 head-txt-stylist">
            Select your Catering
          </div>
          <div className="btmMargin2"></div>

          <div className="col-xl-12 col-lg-12 col-ms-12 col-sm-12 ">
            <div className="row">
              <div className="col-xl-3 col-lg-3 col-ms-3 col-sm-12">
                <form className="form-inline input-icons">
                  <input
                    className="search input-field"
                    type="search"
                    onChange={(e) => {
                      handleOnChange(e.target.value);
                    }}
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <i className="fa fa-map-marker" aria-hidden="true"></i>
                </form>
              </div>
              <div
                className="col-xl-4 col-lg-4 col-ms-4 col-sm-12 dropdown"
                id="rate-txt"
              >
                Rating &emsp;
                <Rating onClick={handleRating} ratingValue={rating} />
                &emsp;
              </div>
              <div
                className="col-xl-5 col-lg-5 col-ms-5 col-sm-12"
                id="rate-txt"
              >
                Price{" "}
                <div
                  style={{
                    margin: "-25px -25px -67px 64px",
                    display: "block",
                    width: "fit-content",
                  }}
                >
                  <Slider
                    min={0}
                    max={200000}
                    value={value}
                    onChange={rangeSelector}
                    valueLabelDisplay="auto"
                  />
                  Your Price between: Rs.{value[0]} - Rs.{value[1]}
                </div>
              </div>
            </div>
          </div>
          <div className="btmMargin2"></div>
        </div>
      </div>
      <div className="btmMargin2"></div>
      <div className="container ">
        {list.length > 0 ? (
          <div className="row">
            {list.map((slide, i) => (
              <div
                className="col-xl-3 col-lg-3 col-md-3 col-sm-12"
                key={`slide-${i}`}
              >
                <div className="box2">
                  <div className="slide-img1">
                    <img alt="" src="./frontend/assets/images/catering/1.jpg" />
                  </div>
                  <div className="detail-box1">
                    <div className="type1">
                      <h3>{slide.name}</h3>
                      <span className="star-fnt-size">
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                      </span>

                      <img src="./frontend/assets/images/divide-line1.svg" />
                      <h3>
                        Starting <b>@{slide.price}/-</b>
                      </h3>
                      <h5>Platinum | Gold | Silver</h5>
                      <br />
                    </div>
                  </div>
                  <Link to={`/venu-selection-${slide._id}`}>
                    <div class="detail-box-border"></div>{" "}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <h4>Data Not Found</h4>
        )}
      </div>
    </>
  );
}

export default ListData;
