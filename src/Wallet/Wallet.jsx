import React from "react";

import "./Wallet.css";
export default function Wallet(props) {
  const { store } = props;
  const { account } = store;
  return (
    <div className="wallet">
      <div className="wrapper">
        <h1>My Wallet</h1>
        <h2>You are connected with the wallet address given below</h2>
        <p className="card">{account}</p>
      </div>
    </div>
  );
}
