import React, { useState, useEffect } from "react";
import ContentArea from "./contentArea";
import NavBar from "../includes/header";
import Footer from "../includes/footer";
import OtherDetails from "./otherDetails";
import "../../admin/components/vendor/vendor.css";
import axios from "axios";

function VenuSelection(props) {
  const [formData, setFormData] = useState({});
  const [related, setRelated] = useState([]);
  const lastItem = window.location.pathname.split("-").pop();

  useEffect(() => {
    async function fetchMyAPI() {
      await axios
        .get(`http://localhost:5000/api/vendor/getById/${lastItem}`)
        .then((response) => {
          setRelated(response.data.related);
          setFormData(response.data.vendor[0]);
        });
    }

    fetchMyAPI();
  }, [lastItem]);

  return (
    <div className="container">
      <title>Hey-Eventz-Venu Selection</title>
      <NavBar />
      <ContentArea data={formData} />
      <OtherDetails data={related} about={formData.about} />
      <Footer />
    </div>
  );
}

export default VenuSelection;
