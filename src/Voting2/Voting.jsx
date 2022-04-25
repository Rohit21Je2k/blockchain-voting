import React, { useState } from "react";
import { BigNumber } from "ethers";

import "./Voting.css";

export default function Voting(props) {
  const { contract } = props;

  const [showResults, setShowResults] = useState(false);
  const [candidateVotes, setCandidateVotes] = useState([0, 0]);

  const makeVoteHandler1 = () => {
    contract.vote1();
  };

  const makeVoteHandler2 = () => {
    contract.vote2();
  };

  const showResultsHandler = async () => {
    try {
      setShowResults(true);
      const results = await contract.getResults();
      const vote1 = BigNumber.from(results[0]).toNumber();
      const vote2 = BigNumber.from(results[1]).toNumber();

      setCandidateVotes([vote1, vote2]);
      console.log(vote1 + " " + vote2);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="voting-section">
      <h3 className="t-al-c">Make your vote</h3>
      <div className="voting-section-container">
        {/* candidate 1 */}
        <div className="candidate-box">
          <h4>Candidate 1</h4>
          <button onClick={makeVoteHandler1}>Vote</button>
        </div>

        {/* candidate 2 */}
        <div className="candidate-box">
          <h4>Candidate 2</h4>
          <button onClick={makeVoteHandler2}>Vote</button>
        </div>
      </div>
      <button onClick={showResultsHandler}>Show Results</button>
      {showResults && (
        <>
          <h4>Candidate 1 : {candidateVotes[0]}</h4>
          <h4>Candidate 2 : {candidateVotes[1]}</h4>
        </>
      )}
    </div>
  );
}
