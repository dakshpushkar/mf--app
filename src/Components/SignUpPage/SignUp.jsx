import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import LoginLeftPart from "../login_Page/LoginLeftPart";
import Otp from "./Otp";

import "antd/dist/antd.css";  
import {notification } from "antd";
export default function SignUp() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [sendOtp, setSendOtp] = useState(false);
  const [disable, setDisable] = useState(false);
  const openNotificationWithIcon = (type) => {
    notification[type]({
      message: "OTP send Successfully",
      duration:1,
      closeIcon:<></>
    });
  };
  const sendOtpButton = () => {
    openNotificationWithIcon("success")
    setSendOtp(true);

  };

  useEffect(() => {
    setDisable(phoneNumber.length !== 10);
  }, [phoneNumber])
  return (
    <div  style={{
      display: "flex",
      flexDirection: "row",
      // height: "900px",
    }}>
      <LoginLeftPart/>

      {sendOtp ? (
        <Otp phoneNumber={phoneNumber} />
      ) : (
        <div style={{display:"flex",flexDirection:"column",marginLeft:"5vw"}}>
        <img className="logo-img" src="/assets/Logo.png" alt="Loding...." />
        <h1 className="sign_up_text">Sign up</h1>
          <input
            className="number-input"
            type="number"
            value={phoneNumber}
            placeholder="Mobile no."
            onChange={(event) => {
              if (event.target.value.length === 11) return false; //limits to 10 digit entry
              setPhoneNumber(event.target.value);
              if(phoneNumber.length ===9){
                setDisable(true)
              }
            }}
          />
          <button
          disabled={disable}
            onClick={sendOtpButton}
            className={`reqst-btn ${
              phoneNumber.length === 10 ? "reqst-btn-active" : ""
            }`}
          >
            Request for OTP
          </button>
        </div>
      )}
    </div>
  );
}
