import React from "react";
import { useRef, useState } from "react";
// import KycDocumnet from "../"
// mf-app/src/Components/SignUpPage/KycDocument.jsx
// import KycDocument from "../Component/SignUpPage/KycDocument"
// import KycDocument from "../../SignUpPage/KycDocument"
import { Controller, useFormContext } from "react-hook-form";

export default function AgreementUpload(props) {
  const { control } = useFormContext();
  const [agreementDoc, setAgreementDoc] = useState();
  const inputFile = useRef(null);
  const uploadFunction = () => {
    inputFile.current.click();
  };
  // const handleImageUpload = e => {
  //   const [file] = e.target.files;
  //   if (file) {
  //     const reader = new FileReader();
  //     const { current } = uploadedImage;
  //     current.file = file;
  //     reader.onload = e => {
  //       current.src = e.target.result;
  //     };
  //     reader.readAsDataURL(file);
  //   }
  // };

  const handleFileUpload = (e) => {
    if (e.target.files) {
      const fileArray = Array.from(e.target.files).map((file) =>
        URL.createObjectURL(file)
      );
      setAgreementDoc(fileArray);
      Array.from(e.target.files).map((file) => URL.revokeObjectURL(file));
      //   setUploadDocument(true);
      //   setBtnDisable(false)
    }
  };
  if (agreementDoc) {
    props.setFillDetails(true);
  }

  return (
    <div style={{ marginLeft: "1.66vw" }}>
      <p className="agreement-para">
        Download the <span className="agreement-text">agreement</span> and
        upload the signed copy
      </p>

      <div className="document-upload-container" onClick={uploadFunction}>
        <input
          type="file"
          accept="image/*"
          ref={inputFile}
          style={{ display: "none" }}
          //  {...field}
          onChange={handleFileUpload}
        />
        <img src="assets/upload.png" style={{ width: "2.66vw" }} alt="" />
      </div>

      {/* <div></div> */}

      <div
        className={`doc-container ${
          agreementDoc ? "doc-container-visible" : ""
        }`}
      >
        <img
          src="assets/Approved.png"
          className="approved-icon"
          style={{ width: "3.30vw", height: "3.30vw" }}
          alt=""
        />

        <div className="successfully-upload-conatiner">
          <img
            src={agreementDoc}
            alt="loding..."
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      </div>
    </div>
  );
}
