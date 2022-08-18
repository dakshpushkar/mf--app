import React, { useState } from 'react'
import "./SendOtp.css"
// import { ReactNotifications } from 'react-notifications-component'
// import 'react-notifications-component/dist/theme.css'
// import "antd/dist/antd.css";111
import {notification } from "antd";
export default function SendOtp(props) {
 const[userOtp,setUserOtp] =  useState()
 const openNotificationWithIcon = (type) => {
  notification[type]({
    message: "OTP send Successfully",
    duration:1,
    closeIcon:<></>
  });
};
  return (
    <div>
        <div className="login-input-container">
                  {/* <span>+91-</span> */}
                  <input
                    className="phone-input"
                    type="number"
                   value={props.mobileNumber}
                    placeholder="Mobile no"
                  
                  />
                  <br />
                  <input
              
                    className="password-input"
                    type="password"
                    placeholder="Password"
                   
                  />
                  <input
                
                    className="password-input"
                    type="number"
                    placeholder="OTP"
                    value={userOtp}
                    onChange={(e)=>{
                      if(e.target.value.length === 7)return false
                   setUserOtp(e.target.value)
                    }}
                   
                  />
                </div>
                <div style={{display:"flex",marginLeft:"11.38vw",gap:"3px"}}>
                  <p className='code-not-send-text'>Code not received?</p>
                  <p className='resend-text' onClick={() => openNotificationWithIcon("success")}>Resend</p>
                </div>
    </div>
  )
}
