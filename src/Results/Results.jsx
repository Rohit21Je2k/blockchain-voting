import React, { useState, useEffect } from "react";
import { BigNumber } from "ethers";

import Loader from "../Loader/Loader";
import person from "../assets/person.png";
import "./Results.css";
export default function Results(props) {
  const { store } = props;
  const { contract, account } = store;
  const [votes, setVotes] = useState([0, 0]);
  const [update, setUpdate] = useState(true);
  const [loading, setLoading] = useState(true);
  useEffect(async () => {
    if (!contract) {
      return;
    }
    setLoading(true);
    const results = await contract.getResults();
    const vote1 = BigNumber.from(results[0]).toNumber();
    const vote2 = BigNumber.from(results[1]).toNumber();
    setVotes([vote1, vote2]);
    setLoading(false);
  }, [account, contract, update]);

  const updateResults = () => {
    setUpdate(!update);
  };
  return (
    <div className="results">
      <div className="wrapper">
        <h1>Results</h1>
        {loading ? (
          <Loader />
        ) : (
          <>
            <div className="container">
              <div className="card candidate-card">
                <img src={person} alt="person" />
                <h3>Candidate 1</h3>
                <button className="btn">Votes : {votes[0]}</button>
              </div>
              <div className="card candidate-card">
                <img src={person} alt="person" />
                <h3>Candidate 2</h3>
                <button className="btn">Votes : {votes[1]}</button>
              </div>
            </div>
            <button onClick={updateResults} className="btn update">
              Update Results
            </button>
          </>
        )}
      </div>
    </div>
  );
}
