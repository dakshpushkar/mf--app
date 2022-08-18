// import React, { useState } from "react";
import ActiveLeadsTable from "./ActiveLeads/ActiveLeadsTable";
import DataCard from "./Card/DataCard";
import "./Dashboard.css";
import ImageSlider from "./OfferSlider/Slider";
import { PieChart } from "react-minimal-pie-chart";
import { Link } from "@material-ui/core";
export default function Dashboard(props) {
  console.log("dash", props);
  const data = [
    { title: "Active", value: 40, color: "#6D42DA" },
    { title: "Inactive", value: 55, color: "#5985FC" },
  ];
  return (
    <div>
      <div className="dashboard-main-container">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "1.66vw",
            marginTop: "32px",
            marginLeft: "3.33vw",
          }}
        >
          <DataCard abc={"53"} heading={"Active Clients"} />
          <DataCard abc={"5690 K"} heading={"Total AUM"} />
          <DataCard abc={"₹410 K"} heading={"Total Income"} />
        </div>
        <div
          style={{
            display: "flex",
            gap: "1.66vw",
            marginLeft: "3.33vw",
            marginTop: "48px",
          }}
        ></div>
        <div style={{ display: "flex", gap: "1.66vw", marginLeft: "3.33vw" }}>
          <div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <p className="active-lead-text">Active leads</p>
              <p className="view-all-text">View all</p>
            </div>
            <div className="active-leads-content">
              <ActiveLeadsTable searchClientsName={props.searchClientsName} />
            </div>
          </div>
          <div>
            <p className="abc-text">ABC</p>
            <div className="graph-container">
              <PieChart
                animate
                animationDuration={500}
                animationEasing="ease-out"
                center={[50, 40]}
                data={data}
                lengthAngle={360}
                lineWidth={40}
                paddingAngle={0}
                radius={35}
                // rounded
                startAngle={33.41}
                // viewBoxSize={[110, 100]}
                labelPosition={5}
                labelStyle={{
                  fontSize: "20px",
                  fontColor: "FFFFFA",
                  fontWeight: "800",
                }}
                // {<span>Active </span>}
              />
              <div
                style={{
                  display: "flex",
                  marginTop: "-3.8vw",
                  gap: "2.77vw",
                  justifyContent: "center",
                }}
              >
                <div style={{ display: "flex", gap: "12px" }}>
                  <div
                    style={{
                      width: "0.97vw",
                      height: "0.97vw",
                      borderRadius: "50%",
                      backgroundColor: "#6D42DA",
                      marginTop: "0.2vw",
                    }}
                  ></div>
                  <p className="active-inactive-text">Active</p>
                </div>
                <div style={{ display: "flex", gap: "0.83vw" }}>
                  <div
                    style={{
                      width: "0.97vw",
                      height: "0.97vw",
                      borderRadius: "50%",
                      backgroundColor: "#5985FC",
                      marginTop: "0.2vw",
                    }}
                  ></div>
                  <p className="active-inactive-text">Inactive </p>
                </div>
              </div>
              <p className="total-clients-text">
                Total Clients <span>130 </span>
              </p>
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            marginLeft: "3.33vw",
            gap: "1.66vw",
            marginTop: "50px",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <p className="offer-text">Offers</p>
            <div style={{ marginTop: "16px" }}>
              <ImageSlider />
            </div>
          </div>
          <div
            style={{
              display: "flex",
              //   marginTop: "16px",
              flexDirection: "column",
            }}
          >
            <p className="my-site-text">My site</p>
            <div style={{ marginTop: "16px" }}>
              <DataCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
