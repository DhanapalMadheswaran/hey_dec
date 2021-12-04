import React, { useState, useEffect } from "react";
import Header from "../includes/header";
import Footer from "../includes/footer";
import VendorHeader from "../eventVendors/header";
import CustomerHeader from "./customer_header";
import OrdersList from "./ordersList";
import OrderService from "../../services/OrderService";
export default function Orders() {
  const [formData, setformData] = useState();
  let orderService = new OrderService();
  const userId = window.location.pathname.split("-").pop();

  const getOrderData = async () => {
    try {
      const data = await orderService.getAll(userId);

      setformData(data.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getOrderData();
  }, []);

  return (
    <div className="container">
      <Header />
      <VendorHeader />

      <OrdersList data={formData} />
      <Footer />
    </div>
  );
}
