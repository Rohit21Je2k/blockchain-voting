import React from "react";
import { ethers } from "ethers";
import contract_abi from "../artifacts/contracts/Storage.sol/Storage.json";

import wallet from "../assets/wallet.svg";
import "./Connect.css";

export default function Connect(props) {
  const { store, setStore } = props;
  const { contractAddress } = store;

  const connectWalletHandler = () => {
    if (window.ethereum) {
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((result) => {
          updateEthers(result[0]);
          alert("Wallet Connected");
        });
    } else {
      alert("Need to install MetaMask");
    }
  };

  const updateEthers = (newAccount) => {
    const tempProvider = new ethers.providers.Web3Provider(window.ethereum);

    const tempSigner = tempProvider.getSigner();

    const tempContract = new ethers.Contract(
      contractAddress,
      contract_abi.abi,
      tempSigner
    );

    setStore((prevStore) => {
      prevStore.account = newAccount;
      prevStore.contract = tempContract;

      return { ...prevStore };
    });
  };
  return (
    <div className="connect">
      <div className="wrapper">
        <div className="col-1">
          <h2>Connect Your Wallet</h2>
          <h5>
            To vote, you first need to connect your Ethereum wallet using
            metamask
          </h5>
          <button onClick={connectWalletHandler} className="btn">
            Click Here to Connect
          </button>
        </div>
        <div className="col-2">
          <img className="img" src={wallet} alt="wallet" />
        </div>
      </div>
    </div>
  );
}
