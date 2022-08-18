import React from "react";
import AboutCLient from "./AboutCLient";
import ClientChart from "./ClientChart";
import "./ClientDetails.css";
import DiversificationPieChart from "./DiversificationPieChart";
import TransactionTable from "./TransactionTable";

// const shiftSize = 7;
export default function ClientDetails(props) {
  const clientData = [
    {
      clientInfoHeading: "Client name",

      clientInfoHeadingData: `${props.clientsName}`,
    },
    {
      clientInfoHeading: "Status",

      clientInfoHeadingData: "KYC pending",
    },
    {
      clientInfoHeading: "Sagment",

      clientInfoHeadingData: "New investor",
    },
    {
      clientInfoHeading: "Risk profile",

      clientInfoHeadingData: "New investor",
    },
  ];
  const clientContactData = [
    {
      clientContact: "Mobile",
      clientContactData: "+91-8003837722",
    },
    {
      clientContact: "Email",
      clientContactData: "Ayush@kuants.in",
    },
    {
      clientContact: "Age",
      clientContactData: "28 yrs",
    },
  ];
  const portfolioSummary = [
    {
      portFolioHeading: "Total AUM",
      portFolioData: "₹4,40,500.00",
    },
    {
      portFolioHeading: "Monthly SIP",
      portFolioData: "₹₹10,500.00",
    },
    {
      portFolioHeading: "Total returns",
      portFolioData: "₹4,40,500.00",
    },
    {
      portFolioHeading: "Last Transaction",
      portFolioData: "28 July 2022",
    },
    {
      portFolioHeading: "Total SIPs",
      portFolioData: "₹4,40,500.00",
    },
    {
      portFolioHeading: "Total lumpsum investments",
      portFolioData: "₹4,40,500.00",
    },
    {
      portFolioHeading: "Taxable income from investments",
      portFolioData: "₹4,40,500.00",
    },
  ];

  return (
    <div>
      <div style={{ marginLeft: "3.33vw", marginTop: "2.22vw" }}>
        <div style={{ display: "flex", gap: "0.3vw" ,alignItems:"baseline" }}>
          <p className="clients-text">Clients </p>
          <p className="client-name">/ {props.clientsName}</p>
        </div>
        <h1 className="client-detail-heading">Client details</h1>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", gap: "10.88vw" }}>
            {clientData.map((data) => {
              return (
                <AboutCLient
                  clientInfoHeading={data.clientInfoHeading}
                  clientInfoHeadingData={data.clientInfoHeadingData}
                />
              );
            })}
          </div>
          <div
            style={{
              display: "flex",
              gap: "6.88vw",
              marginTop: "2.22vw",
              gap: "7.77vw",
            }}
          >
            {clientContactData.map((data) => {
              return (
                <AboutCLient
                  clientInfoHeading={data.clientContact}
                  clientInfoHeadingData={data.clientContactData}
                />
              );
            })}
          </div>
        </div>
        <div>
          <ClientChart />
        </div>
        <div style={{ display: "flex", marginTop: "8.17vw" }}>
          <div>
            <p className="portfolio-diversi-heading">Portfolio summary</p>
            <div
            className="portfolio-sumry-data-container"
            >
              {portfolioSummary.map((data) => {
                return (
                  <>
                    <AboutCLient
                      clientInfoHeading={data.portFolioHeading}
                      clientInfoHeadingData={data.portFolioData}
                    />
                  </>
                );
              })}
            </div>
          </div>
          <div>
            <p className="portfolio-diversi-heading">Diversification</p>
            <div style={{width:"22.83vw"}}>
              <DiversificationPieChart />
            </div>
          </div>
        </div>
        <div className="transaction-container" style={{marginTop:"5.27vw"}}>
        <p className="transaction-text">Transactions</p> 
          <div className="transaction-table">
            <TransactionTable />
          </div>
        </div>
        <div className="recommendation-container">
            <p className="recommendation-heading">Recommendations</p>
           <ul>
            <li>Reduce Equity Exposure</li>
            <li>Invest in Technology Funds</li>
           </ul>

        </div>
      </div>
    </div>
  );
}
