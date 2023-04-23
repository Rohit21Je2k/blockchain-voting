import React, { useState, useEffect } from "react";

import person from "../assets/person.png";
import makeVote from "../util/api/makeVote.js";
import { addVoter, hasVoted } from "../util/api/localStorage";
import "./Voting.css";

export default function Voting(props) {
  const { store } = props;
  const { account, contract } = store;
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const makeVoteHandler1 = async () => {
    await contract.vote1(account);
    setSuccess("Successfully Voted");
  };

  const makeVoteHandler2 = async () => {
    await contract.vote2(account);
    setSuccess("Successfully Voted");
  };

  const handleVote = (candidate) => {
    return async () => {
      setSuccess(null);
      if (hasVoted(account)) {
        console.log(account);
        setError("You have already Voted");
        return;
      }

      try {
        const data = await makeVote(account, 1);
        setError(null);
        if (candidate == 1) {
          makeVoteHandler1();
        }
        if (candidate == 2) {
          makeVoteHandler2();
        }

        addVoter(account);
      } catch (err) {
        setError(err);
        console.log(err);
      }
    };
  };
  return (
    <div className="voting">
      <div className="wrapper">
        <h1>Make a Vote</h1>
        {/* candidates */}
        <div className="container">
          <div className="card candidate-card">
            <img src={person} alt="person" />
            <h3>Candidate 1</h3>
            <button className="btn" onClick={handleVote(1)}>
              Vote
            </button>
          </div>
          <div className="card candidate-card">
            <img src={person} alt="person" />
            <h3>Candidate 2</h3>
            <button className="btn" onClick={handleVote(2)}>
              Vote
            </button>
          </div>
        </div>
        {/* success */}
        {success && (
          <div className="card success-card">
            <h2>Success</h2>
            <p>{success}</p>
          </div>
        )}
        {/* error */}
        {error && (
          <div className="card error-card">
            <h2>Error!</h2>
            <p>{error}</p>
          </div>
        )}
      </div>
    </div>
  );
}
