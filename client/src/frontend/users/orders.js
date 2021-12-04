import React, { useState, useEffect } from "react";
import Header from "../includes/header";
import UserHeader from "./header";
import OrdersList from "./orderList";

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
    <div>
      <Header />
      <UserHeader />
      <OrdersList data={formData} />
    </div>
  );
}
