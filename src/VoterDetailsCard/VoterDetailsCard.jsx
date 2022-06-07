import React from "react";

import person from "../assets/person.png";

import "./VoterDetailsCard.css";
export default function VoterDetailsCard(props) {
  const { details } = props;
  return (
    <div className="card voter-card">
      <img src={person} alt="person" />
      <div className="details">
        <p>Name : {details.name}</p>
        <p>Account : {details.address} </p>
        <p>Age : {details.age} </p>
        <p>Department : {details.department} </p>
        <p>Designation : {details.designation} </p>
      </div>
    </div>
  );
}
