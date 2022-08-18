import React from "react";
import { useState } from "react";
import "./AddNewClients.css";
import NewClientsPersonalDetails from "./NewClientsPersonalDetails";
import OtpVerifiactionCompo from "./OtpVerifiactionCompo";
import "antd/dist/antd.css"
import { notification } from "antd"
export default function AddNewCLients() {
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState([]);
  const [requestOtp, setRequestOtp] = useState(false);
  const [submit, setSubmit] = useState(false);
  const[disable,setDisable ] = useState(true)
  // const[message,setMessage] =  useState('')
  const [error, setError] = useState(null);
  const rqstForOtp = () => {
    openNotificationWithIcon("success")
    setRequestOtp(true);
  };
  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }
  const handleChange = event => {
    if (!isValidEmail(event.target.value)) {
      setError('Email is invalid');
    } else {
      setError(null);
        // setDisable(false)
      
    }

    setEmail(event.target.value)
       
  };
const openNotificationWithIcon=(type)=>{
  notification[type]({
    message:"OTP send successfully",
    duration:1,
    closeIcon:<></>
  })
}
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        marginLeft: "3.33vw",
        marginTop: "2.77vw",
        // gap: "50px",
      }}
    >
     
          <p className="new-client-text">New Client</p>
          {submit ? (
            <NewClientsPersonalDetails />
          ) : (
            <>
              <p className="basic-detail-text">Basic details</p>
              {requestOtp ? (
        <OtpVerifiactionCompo phoneNumber={phone} email={email} setSubmit={setSubmit} />
      ) : (
        <>
        <form style={{display:"flex",flexDirection:"column"}}>
              <input
               required
                className="gmail-number-text-pss-input"
                value={email}
               
                type="email"
                placeholder="Email"
                onChange={handleChange}
              />
                    {error && <p style={{color: 'red'}}>{error}</p>}
              <input
                className="gmail-number-text-pss-input"
                type="number"
                placeholder="Phone number"
                value={phone}
                onChange={(event) => {
                  if (event.target.value.length === 11) return false;
                  setPhone(event.target.value);
                  // setDisable(false)
                }}
              />

              <button
              disabled={phone.length === 10? false:true}
              type="submit"
                className={`reqst-btn ${phone.length === 10 && email !== ""? "reqst-btn-active":""}`}
                style={{ marginLeft: "0px" }}
                onClick={(e)=>rqstForOtp(e)}
              >
                Request for OTP
              </button>
              </form>
            </>
          )}
        </>
      )}
    </div>
  );
}
