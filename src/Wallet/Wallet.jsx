import React, { useState, useEffect } from "react";

import getUser from "../util/api/getUser";
import VoterDetailsCard from "../VoterDetailsCard/VoterDetailsCard";

import "./Wallet.css";
export default function Wallet(props) {
  const { store } = props;
  const { account } = store;

  const [details, setDetails] = useState({});

  useEffect(async () => {
    const data = await getUser(account);
    console.log(account);
    console.log(data);
    setDetails(data);
  }, []);

  return (
    <div className="wallet">
      <div className="wrapper">
        {!details.name ? (
          <h1>Loading</h1>
        ) : (
          <>
            <h1>My Wallet</h1>
            <h2>You are connected with the wallet address given below</h2>
            <VoterDetailsCard details={details} />
          </>
        )}
      </div>
    </div>
  );
}
