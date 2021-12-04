import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function Profile() {
  const profile = JSON.parse(localStorage?.getItem?.("profile"));
  return (
    <div>
      <div className="card">
        <img
          src="https://www.w3schools.com/w3images/team2.jpg"
          alt="John"
          style={{ width: "100%" }}
        />
        <h1>{profile.name}</h1>
        <p className="title">{profile.email}</p>

        <p>
          <button>Contact</button>
        </p>
      </div>
    </div>
  );
}
