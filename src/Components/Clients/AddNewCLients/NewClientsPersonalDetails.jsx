import React from "react";
import { useState } from "react";
import Filters from "../Filter/Filters";
import NewclientKyc from "./NewclientKyc";
import "./AddNewClients.css";
export default function NewClientsPersonalDetails() {
  const Selectclienttype = ["Select client type"];
  const [continueToKyc, setcContinueToKyc] = useState(false);
  const [name, setName] = useState();
  const [motherName, setMotherName] = useState();
  const [gender, setGender] = useState();
  const [occupation, setOccupation] = useState();

  console.log(gender, "this is gender");
  const continuehandle = () => {
    setcContinueToKyc(true);
  };
  return (
    <div>
      {continueToKyc ? (
        <NewclientKyc />
      ) : (
        <>
          <p className="basic-detail-text">Personal details</p>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              //   gap: "35px",
              marginTop: "2.22vw",
              paddingBottom: "50px",
            }}
          >
            <input
              style={{ marginTop: "1.25vw" }}
              className="gmail-number-text-pss-input"
              placeholder="Client name"
              type="text"
              onChange={(e) => setName(e.target.value)}
            />
            <input
              style={{ marginTop: "2.91vw" }}
              className="gmail-number-text-pss-input"
              placeholder="Mother’s name"
              type="text"
              onChange={(e) => setMotherName(e.target.value)}
            />
            <div style={{ marginTop: "0.83vw" }}>
              <Filters options={Selectclienttype} />
            </div>

            <div style={{ marginTop: "2.22vw" }}>
              <p className="gender-occupation-text">Gender</p>
              <div
                className="radio-inputs"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.25vw",
                  marginTop: "1.45vw",
                }}
                onChange={(e) => setGender(e.target.value)}
              >
                <label style={{ display: "flex", gap: "0.55vw" }}>
                  <input
                    type="radio"
                    value="Male"
                    name="gender"
                    style={{ height: "1.25vw", width: "1.25vw" }}
                  />{" "}
                  Male
                </label>
                <label style={{ display: "flex", gap: "0.55vw" }}>
                  <input
                    type="radio"
                    value="Female"
                    name="gender"
                    style={{ height: "1.25vw", width: "1.25vw" }}
                  />{" "}
                  Female
                </label>
                <label style={{ display: "flex", gap: "0.55vw" }}>
                  <input
                    type="radio"
                    value="Other"
                    name="gender"
                    style={{ height: "1.25vw", width: "1.25vw" }}
                  />{" "}
                  Other
                </label>
              </div>
            </div>
            <div style={{ marginTop: "2.29vw" }}>
              <p className="gender-occupation-text">Occupation</p>
              <div
                className="radio-inputs"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.25vw",
                  marginTop: "1.45vw",
                }}
                onChange={(e) => setOccupation(e.target.value)}
              >
                <label style={{ display: "flex", gap: "0.55vw" }}>
                  <input
                    type="radio"
                    value="Govt. employee"
                    name="Occupation"
                    required
                    style={{ height: "1.25vw", width: "1.25vw" }}
                  />{" "}
                  Govt. employee{" "}
                </label>
                <label style={{ display: "flex", gap: "0.55vw" }}>
                  <input
                    type="radio"
                    value="Private"
                    name="Occupation"
                    style={{ height: "1.25vw", width: "1.25vw" }}
                  />{" "}
                  Private{" "}
                </label>
                <label style={{ display: "flex", gap: "0.55vw" }}>
                  <input
                    type="radio"
                    value="Other"
                    name="Occupation"
                    style={{ height: "1.25vw", width: "1.25vw" }}
                  />{" "}
                  Other{" "}
                </label>
              </div>
            </div>
            <button
              disabled={gender  && motherName && occupation && name ? false:true}
              className={`continue-btn ${
                gender  && motherName && occupation && name
                  ? "active-btn-continue"
                  : ""
              }`}
              style={{ marginLeft: "unset" }}
              onClick={continuehandle}
            >
              Continue
            </button>
            {/* <p className="do-later-text">I’ll do later</p> */}
          </div>
        </>
      )}
    </div>
  );
}
