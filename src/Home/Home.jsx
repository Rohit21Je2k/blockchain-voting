import React from "react";
import { Link } from "react-router-dom";

import people from "../assets/people.svg";
import "./Home.css";
export default function Home() {
  return (
    <div className="home">
      <div className="wrapper">
        <div className="col-1">
          <h1>Blockchain Voting</h1>
          <h4>The Future of Electronic Voting is near</h4>
          <Link to="/connect">
            <button className="btn">Get Started</button>
          </Link>
        </div>
        <div className="col-2">
          <img src={people} alt="people" />
        </div>
      </div>
    </div>
  );
}
