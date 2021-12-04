import React, { useEffect, useState } from "react";
import NavBar from "../includes/navBar";
import Footer1 from "../includes/footer";
import Slider from "../includes/slider";
import ContentArea from "./contentArea";
import Testimonials from "../includes/testimonials";
import OurServices from "./ourServices";
import axios from "axios";
import Banner from "./banner";

export default function Main() {
  const [categoryData, setCategoryData] = useState([]);
  const [sliderData, setSliderData] = useState([]);
  const [bannerData, setBannerData] = useState([]);
  const [vendorData, setVendorData] = useState([]);

  const getVendor = async () => {
    await axios
      .get("http://localhost:5000/api/vendor/getLatest")
      .then((res) => {
        setVendorData(res.data);
      });
  };

  const getCategory = async () => {
    await axios.get("http://localhost:5000/api/items/").then((res) => {
      setCategoryData(res.data);
    });
  };

  const getBanner = async () => {
    let res = await axios.get("http://localhost:5000/api/banner/");

    setBannerData(res.data);
  };

  useEffect(() => {
    getSlider();
    getBanner();
    getCategory();
    getVendor();
    return () => {
      setSliderData([]);
      setBannerData([]);
      setCategoryData([]);
      setVendorData([]);
    };
  }, []);

  const getSlider = async () => {
    let res = await axios.get("http://localhost:5000/api/slider/");

    setSliderData(res.data);
  };
  return (
    <div className="container">
      <NavBar menu={categoryData} />
      <Slider data={sliderData} category={categoryData} />
      <Banner banner={bannerData} />
      <ContentArea data={vendorData} />
      <Testimonials />
      <OurServices />
      <Footer1 />
    </div>
  );
}
