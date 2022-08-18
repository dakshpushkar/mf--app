import React from "react";
import { useState } from "react";
import "./login.css";
// import SignUpCompo from "../SignUpPage/SignUp";
// import SendOtp from "./SendOtp";
import { Link } from "react-router-dom";
import LoginLeftPart from "./LoginLeftPart";
import SendOtp from "./SendOtp";
// import "antd/dist/antd.min.css";
import {notification,message } from "antd";
export default function Login() {
  const [mobileNumber, setMobileNumber] = useState("");
  const [password, setPassword] = useState("");
  // const[userOtp,setUserOtp] =  useState("")
  const[loginBtnDisable,setLoginBtnDisale]= useState(true)
  // const [SignUp, setSignUp] = useState(false);
  const [sendOtp, setSendOtp] = useState(false);
  // const handleSignUp = () => {
  //   setSignUp(true);
  // };
  const otpRequest = (e) => {
    // e.preventDefault()
    if(mobileNumber.length===10){
      openNotificationWithIcon("success")
       setSendOtp(true);
    }
  
    // setSendOtp(true);
    // {sendOtp}
  };
  const success = () => {
    
    message.success('Login successfully');
  };
  const openNotificationWithIcon = (type) => {
    notification[type]({
      message: "OTP send Successfully",
      duration:1,
      closeIcon:<></>
    });
  };
  return (
    <div
     style={{display:"flex"}}
    >
   <LoginLeftPart/>

      <div
        className="login-container"
        style={{
          display: "flex",
          flexDirection: "column",
          marginLeft:"5vw"
          // justifyContent: "center",
        }}
      >
        <img className="logo-img" src="/assets/Logo.png" alt="Loding...." />
               <h4 className="login-text">Log in</h4>   
               {sendOtp ? <SendOtp mobileNumber={mobileNumber} />:
               <form>
              <div className="login-input-container">
                {/* <span>+91-</span> */}
                {/* {sendOtp ? <SendOtp/> :<> */}
 
                <input
                  className="phone-input"
                  type="number"
                  value={mobileNumber}
                  placeholder="Mobile no"
                  required
                  onChange={(event) => {
                    if (event.target.value.length === 11) return false;
                    setMobileNumber(event?.target.value);
                    setLoginBtnDisale(false)
                  }}
                />
          
            
                <br />
                <input
                  value={password}
                  className="password-input"
                  type="password"
                  placeholder="Password"
                  onChange={(e) => {
                    if (e.target.value.length === 7) return false;
                    setPassword(e.target.value);
                  }}
                />
              
              </div>
               <div
               style={{
                 width: "16.54vw",
                 marginLeft: "15vw",
                 gap: "0.55vw",
                 display: "flex",
                 flexDirection: "row",
                 marginTop: "0.69vw",
                 // marginLeft:"19vmin"
               }}
             >
               <h6 className="or-text">or</h6>
               <button className="reqst-otp-btn" type="submit" onClick={(e)=>otpRequest(e)}>
                 Request for OTP
               </button>
              
             </div>
            
             </form>}
          
            <button
            disabled={loginBtnDisable}
              className={`login-btn ${
                mobileNumber.length === 10 && password.length === 6 
                  ? "active-login-btn"
                  : ""
              }`}
              onClick={success}
            >
              Login
            </button>
      
           <div style={{display:"flex",alignItems:"baseline",gap:"2.2vw" ,minWidth:"250px"}}>
            <p className="Forget-text">Forget password?</p>
               <Link to ="/signup"  style={{
                // width:"25.30vw",
                whiteSpace:"nowrap",
                display: "flex",
                // flexDirection: "row",
                // marginLeft: "10.5vw",
                // marginTop: "-2.1vw",
                gap: "3.2px",
              }}>
              <p className="new-on-text">New on Kuants?</p>
       
              <h6 className="Sign-up-btn">
                Sign up
              </h6>
              </Link>
            
              </div>
       
      
      </div>
     
    </div>
  );
}
