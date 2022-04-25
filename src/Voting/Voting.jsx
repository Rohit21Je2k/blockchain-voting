import React from "react";

import person from "../assets/person.png";
import "./Voting.css";

export default function Voting(props) {
  const { store } = props;
  const { account, contract } = store;

  const makeVoteHandler1 = () => {
    contract.vote1(account);
  };

  const makeVoteHandler2 = () => {
    contract.vote2(account);
  };

  return (
    <div className="voting">
      <div className="wrapper">
        <h1>Make a Vote</h1>
        <div className="container">
          <div className="card candidate-card">
            <img src={person} alt="person" />
            <h3>Candidate 1</h3>
            <button className="btn" onClick={makeVoteHandler1}>
              Vote
            </button>
          </div>
          <div className="card candidate-card">
            <img src={person} alt="person" />
            <h3>Candidate 2</h3>
            <button className="btn" onClick={makeVoteHandler2}>
              Vote
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
