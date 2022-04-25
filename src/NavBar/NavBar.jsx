import React from "react";
import { Link } from "react-router-dom";
import NavBarDesktop from "./NavBarDesktop";

import logo from "../assets/logo.png";

import "./NavBar.css";

export default function NavBar(props) {
  const { store, setStore } = props;
  return (
    <div className="navbar">
      <div className="wrapper">
        {/* logo */}
        <Link className="link" to="/">
          <span className="navbar-logo">
            <img src={logo} alt="logo" />
            BLOCKCHAIN
          </span>
        </Link>

        {/* desktop menu */}
        <NavBarDesktop store={store} setStore={setStore} />

        {/* mobile menu */}
        {/* <NavBarMobile /> */}
      </div>
    </div>
  );
}
