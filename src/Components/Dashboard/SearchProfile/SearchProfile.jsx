import React, { useState } from "react";

export default function SearchProfile(props) {
  // const[text,setText] =  useState()
  const searchHandel=(e)=>{
    // setText(e.target.value)
     props.setSeachClientsName(e.target.value)
  }
  return (
    <div>
      <div
        style={{
          display: "flex",
          // justifyContent: "space-between",
          marginLeft: "3.33vw",
          gap: "4.15vw",
        }}
      >
        <input
          type="text"
          placeholder="Search"
          className="search-bar"
          onChange={searchHandel}
        />
        <div
          className="profile-container"
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "0.48vw",
            alignItems: "center",
            marginTop: "28px",
          }}
        >
          <p className="client-name">Amit Choudhary</p>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "1.11vw",
              // marginTop: "1.94vw",
            }}
          >
            <div className="profile-img"></div>
            <div className="profile-img"></div>
            <div className="profile-img"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
