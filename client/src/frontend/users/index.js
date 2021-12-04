import React from "react";
import Header from "../includes/header";
import Footer from "../includes/footer";
import CustomerHeader from "./header";
import Profile from "./profile";

export default function Orders() {
  return (
    <div className="container">
      <Header />
      <CustomerHeader />
      <Profile />
      <Footer />
    </div>
  );
}
