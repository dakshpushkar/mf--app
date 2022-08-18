import React from "react";
import { useState } from "react";
import "./CreatePassword.css";
import PersonalDetail from "./PersonalDetail";
export default function CreatePassword() {
  const [createPassword, setCreatePassword] = useState("");
  const [reEnterPass, setReEnPss] = useState("");
  const [valid, setValid] = useState(false);
  console.log(valid);
  const handleContinue = () => {
    setValid(true);
  };

  return (
    <div style={{display:"flex",flexDirection:"column"}}>
  
      {valid ? (
        <PersonalDetail />
      ) : (
        <>
               <img className="logo-img" src="/assets/Logo.png" alt="Loding...." />
          <h1 className="heading-set-pss">Set up your password</h1>
          <div
            style={{
              width: "342px",
              height: "72px",
              // marginLeft: "5vw",
              marginTop: "2.22vw",
            }}
          >
            <input
              value={createPassword}
              className="password-input"
              type="password"
              placeholder="Create password"
              onChange={(e) => {
                setCreatePassword(e.target.value);
              }}
            />
            <input
              value={reEnterPass}
              className="password-input"
              type="password"
              placeholder="Re-type password"
              onChange={(e) => {
                setReEnPss(e.target.value);
              }}
            />
          </div>
          
            <p className="suggest-para">
              Your password should have minimum 8 digit with any special
              character
            </p>
      <div>
          <button
            className={`continue-btn ${
              createPassword.length === 8 && reEnterPass.length === 8
                ? "active-continue-btn"
                : ""
            }`}
            onClick={handleContinue}
          >
            Continue
          </button>
          <p className="do-later">I’ll do later</p>
          </div>
        </>
      )}
     
    </div>
  );
}
