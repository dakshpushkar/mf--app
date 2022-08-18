import React from "react";
import { useState } from "react";

import KycDocument from "./KycDocument";
import "./PersonalDetail.css";
export default function PersonalDetail() {
  const [fullName, setFullName] = useState();
  const [selectedOption, setSelectedOption] = useState();
  const [disableBtn, setDisableBtn] = useState(true);
  const [move, setMove] = useState(false);
  const moveKycPage = () => {
    setMove(true);
  };
  // console.log("ption", selectedOption);
  // console.log("name", fullName);
  return (
    <div>
      {move ? (
        <KycDocument />
      ) : (
        <>
          <img className="logo-img" src="/assets/Logo.png" alt="Loding...." />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <h1 className="heading-personal">Enter personal details</h1>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <input
                className="name-input"
                type="text"
                placeholder="Full name (As per PAN card)"
                onChange={(e) => setFullName(e.target.value)}
              />
              <select
                className="select-occupation"
                onChange={(e) => {
                  setSelectedOption(e.target.value);
                  setDisableBtn(false)
                }}
              >
                <option value="Select occupation">Select occupation</option>
                <option value="LIC Agent">LIC Agent</option>
                <option value="Cranberry">Cranberry</option>
              </select>
            </div>
            <button
              className={`btn-continue ${
                fullName !== "" && selectedOption !== ""
                  ? "active-btn-continue"
                  : ""
              }`}
              onClick={moveKycPage}
              disabled={disableBtn}
            >
              Continue
            </button>
            <p className="do-later-text">I’ll do later</p>
          </div>
        </>
      )}
    </div>
  );
}
