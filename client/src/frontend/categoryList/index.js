import React, { useState, useEffect } from "react";
import "./catering.css";
import Header from "../includes/header";
import ListData from "./listData";
import axios from "axios";
import { getQueryParams } from "../../shared/utils";

export default function List() {
  const [formData, setFormData] = useState({});
  const [filterData, setfilterData] = useState({});
  const category = window.location.pathname.split("-").pop();

  async function fetchMyAPI(params = {}) {
    await axios
      .get(
        `http://localhost:5000/api/vendor/getAllVendorsByCategory/${category}${getQueryParams(
          params
        )}`
      )
      .then((response) => {
        setFormData(response.data.vendor);
      });
  }
  useEffect(() => {
    fetchMyAPI();
  }, [category]);

  const handleFilterData = (data) => {
    setfilterData(data);
    fetchMyAPI(data);
  };

  return (
    <div className="container">
      <title>HeyEventz-Category List</title>
      <Header />
      <ListData data={formData} filter={handleFilterData} />
    </div>
  );
}
