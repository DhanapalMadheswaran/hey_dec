import React from "react";
import Header from "./header";
import CartData from "./detailsData";
import Footer from "../includes/footer";

export default function CartDetails() {
  return (
    <div className="container">
      <title>HeyEventz-Cart</title>
      <Header />
      <CartData />
      <Footer />
    </div>
  );
}
