import React, { useState } from "react";
// import { useState } from "react";
// import NewClientsPersonalDetails from "./NewClientsPersonalDetails";
// import "antd/dist/antd.css";
import { notification } from "antd";
export default function OtpVerifiactionCompo(props) {
  const [otp, setOtp] = useState("");
  // const [disable, setDisable] = useState(true);
  const submitHandle = () => {
    props.setSubmit(true);
  };

  const openNotificationWithIcon = (type) => {
    notification[type]({
      message: "OTP send successfully",
      duration: 1,
      closeIcon: <></>,
    });
  };
  return (
    <>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <input
          className="gmail-number-text-pss-input"
          type="gmail"
          value={props.email}
          placeholder="Email"
        />
        <input
          value={props.phoneNumber}
          className="gmail-number-text-pss-input"
          type="number"
          placeholder="Phone number"
        />
        <input
          className="gmail-number-text-pss-input"
          type="number"
          placeholder="OTP"
          value={otp}
          onChange={(e) => {
            if (e.target.value.length === 7) return false;
            setOtp(e.target.value);
            if(e.target.value.length===6){
              // setDisable(false);
            }
        
          }}
        />
        <p
          className="conde-notsend-text"
          style={{ marginTop: "8px", marginLeft: "10VW" }}
        >
          Code not received?
          <span
            className="resend-text"
            onClick={() => openNotificationWithIcon("success")}
          >
            Resend
          </span>
        </p>
        <button
          disabled={otp.length === 6 ? false:true}
          className={`reqst-btn ${otp.length === 6 ? "reqst-btn-active" : ""}`}
          style={{ marginLeft: "0px" }}
          onClick={submitHandle}
        >
          Submit
        </button>
      </div>
    </>
  );
}
