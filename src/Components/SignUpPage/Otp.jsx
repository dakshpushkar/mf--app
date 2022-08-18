import React from "react";
import { useState } from "react";
import CreatePassword from "./CreatePassword";
import "./otp.css";
import "./SignUp.css";
// import "antd/dist/antd.min.css";  
import {notification } from "antd";
export default function Otp(props) {
  const [otp, setOtp] = useState("");
  const [signUp, setSignUp] = useState(false);
  const [disable, setDisable] = useState(true);
  const openNotificationWithIcon = (type) => {
    notification[type]({
      message: "OTP send Successfully",
      duration:1,
      closeIcon:<></>
    });
  };
  const handelSignUp = () => {
    setSignUp(true);
  };
  return (
    <div style={{display:"flex",flexDirection:"column" ,marginLeft:"5vw"}}>
          
        

      {signUp ? (
        <CreatePassword />
      ) : (
        <>
  <img className="logo-img" src="/assets/Logo.png" alt="Loding...." />
        <h1 className="sign_up_text">Sign up</h1>
          <input
            className="number-input"
            type="number"
            value={props.phoneNumber}
          />
          <input
            className="number-input"
            type="number"
            value={otp}
            onChange={(event) => {
              if (event.target.value.length === 7) return false; //limit only 6 digit
              setOtp(event.target.value);
              if(otp.length===5){
                setDisable(false)
              }
            }}
            placeholder="Enter OTP"
          />
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              marginLeft: "11vw",
              gap: "3px",
              // width: "400px",
            }}
          >
            <p
             className="codeNot-send-text"
            
            >
              Code not received?
            </p>
            <p
            
            className ="resend-text-btn"
            onClick={()=> openNotificationWithIcon("success")}
            >
              Resend
            </p>
          </div>
          <button
          disabled={disable}
            className={`sign-up-btn ${
              otp.length === 6 ? "active-sign-up-btn" : ""
            }`}
            type="buttton"
            onClick={handelSignUp}
          >
            Sign up
          </button>
        </>
      )}
    </div>
  );
}
