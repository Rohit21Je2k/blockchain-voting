import React, { useState } from "react";
import Voting from "../Voting/Voting";
import { ethers } from "ethers";
import home_abi from "../artifacts/contracts/Storage.sol/Storage.json";
import "./Home.css";

export default function Home() {
  const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
  const [errotMsg, setErrorMsg] = useState(null);

  const [connBtnText, setConnBtnText] = useState(null);
  const [defaultAccount, setDefaultAccount] = useState(null);
  const [currentContractVal, setCurrentContractVal] = useState(null);

  // helper
  const [showVoting, setShowVoting] = useState(false);

  // ethers
  const [provider, setProvider] = useState(null);
  const [signer, setSigner] = useState(null);
  const [contract, setContract] = useState(null);

  const connectWalletHandler = () => {
    if (window.ethereum) {
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((result) => {
          accountChangeHandler(result[0]);
          setConnBtnText("Account Connected");
        });
    } else {
      setErrorMsg("Need to install MetaMask");
    }
  };

  const accountChangeHandler = (newAccount) => {
    setDefaultAccount(newAccount);
    updateEthers();
  };

  const updateEthers = () => {
    const tempProvider = new ethers.providers.Web3Provider(window.ethereum);
    setProvider(tempProvider);

    const tempSigner = tempProvider.getSigner();
    setSigner(tempSigner);

    const tempContract = new ethers.Contract(
      contractAddress,
      home_abi.abi,
      tempSigner
    );
    setContract(tempContract);
  };

  const getCurrentVal = async () => {
    try {
      const val = await contract.get();
      setCurrentContractVal(val);
    } catch (err) {
      console.log(err);
    }
  };

  const setCurrentVal = async (e) => {
    e.preventDefault();
    const val = e.target.number.value;
    console.log(val);
    contract.set(val);
  };

  // helper
  const showVotingHandler = () => {
    setShowVoting(!showVoting);
  };

  return (
    <div className="home-page">
      <h3 className="t-al-c">
        {defaultAccount ? "Account Connected" : "Connect Your Wallet"}
      </h3>
      <h3 className="t-al-c">{defaultAccount}</h3>
      <button onClick={connectWalletHandler}>Connect Wallet</button>
      <h3>{errotMsg}</h3>

      <hr />
      <button onClick={showVotingHandler}>Show Voting Section</button>
      {showVoting && <Voting contract={contract} />}
    </div>
  );
}
