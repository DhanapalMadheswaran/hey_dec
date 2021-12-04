import React, { useState, useEffect } from "react";
import Header from "./header";
import CartList from "./cartList";
import axios from "axios";
export default function Cart() {
  const [formData, setformData] = useState();
  const getVendor = async () => {
    await axios
      .get("http://localhost:5000/api/vendor/getLatest")
      .then((res) => {
        setformData(res.data);
      });
  };
  useEffect(() => {
    getVendor();
    return () => {
      setformData([]);
    };
  }, []);
  return (
    <div className="container">
      <title>HeyEventz-Cart</title>
      <Header />
      <CartList data={formData} />
    </div>
  );
}
