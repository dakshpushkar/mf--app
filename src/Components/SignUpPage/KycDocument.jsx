import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import "./KycDocument.css";
export default function KycDocument() {
  const [image, setImage] = useState([]);
  const [uploadDocument, setUploadDocument] = useState(false);
  const[bothDocumentCorrect,setBothCorrect] =  useState(false)
  const[btnDisable,setBtnDisable] = useState(true)
  const inputFile = useRef(null);
  const uploadFunction = () => {
    inputFile.current.click();
  };

  const handleFileUpload = (e) => {
    if (e.target.files) {
      const fileArray = Array.from(e.target.files).map((file) =>
        URL.createObjectURL(file)
      );
      setImage(fileArray);
      Array.from(e.target.files).map((file) => URL.revokeObjectURL(file));
      setUploadDocument(true);
      setBtnDisable(false)
    }
   
  };

const handelVerifyTrue=()=>{
    
  
        setBothCorrect(true)
  
       


}
const urlPath =  window.location.pathname
  return (
    <div style={{display:"flex",flexDirection:"column",}}>
        <img className={`logo ${urlPath === "/clients/addnewclients" ? "hide-logo":"logo"}`} src="/assets/Logo.png" alt="Loding...." />
      <h1 className="heading-upload">Upload KYC document</h1>
      <p className="upload-para">Upload the both side of Aadhar card</p>
      <div className={`document-upload-container ${bothDocumentCorrect?"hide-document-upload-container":""}`} onClick={uploadFunction}>
        <input
          multiple
          type="file"
          accept="image/*"
          ref={inputFile}
          style={{ display: "none" }}
          onChange={handleFileUpload}
        />
        <img src="assets/upload.png" style={{width:"2.66vw",}} alt="" />
      </div>
      {uploadDocument ? (
        <div
          style={{ display: "flex", width: "fit-content",}}
        >
          <img
            src="assets/Approved.png"
            className="approved-icon"
            style={{width:"3.30vw",height:"3.30vw"}}
            alt=""
          />
          <div className="successfully-upload-conatiner">
            <img
              src={image[0]}
              alt="loding..."
              style={{ width: "100%", height: "100%" }}
            />
          </div>
          <img
            src="assets/Rejected.png"
            className="reject-icon"
          style={{width:"3.30vw",height:"3.30vw"}}
            alt=""
          />
          <div className="unsuccessfully-upload-conatiner">
            <img
              src={image[1]}
              alt="loding"
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        </div>
      ) : (
        ""
      )}

      <button
      disabled={btnDisable}
      // style={{marginLeft:"5vw"}}
        className={`btn-continue ${
          image.length === 2  ? "active-btn-continue" : ""
        }`}
        onClick={handelVerifyTrue}
      >
        Continue
      </button>
      <Link to="/dashboard" className={urlPath ===  "/clients/addnewclients" ?"hide-skip-text":"" }>
      <p className={`skip-text ${urlPath === "/clients/addnewclients" ? "hide-skip-text":"skip-text"}`}>Skip & Submit</p>
      </Link>
    </div>
  );
}


