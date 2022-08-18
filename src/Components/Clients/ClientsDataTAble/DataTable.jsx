// import React, { useRef } from "react";
import "./DataTable.css";
// import { useState } from "react";
export default function DataTable(props) {
  console.log("datatable", props.searchClientsName);
  // const[name,setName] =  useState()
  //  const name = useRef(null)
  const showName = (e) => {
    props.setClientName(e.target.innerText);
    console.log(e.target.innerText, "EVEENT ON NAME");
    // name.current.focus();
    // setName(value)
    props.setShowClietnsDetails(true);
  };
  //  console.log("in the table jsx",props.slectOccupation)
  const clientsData = [
    {
      Sno: "001",
      Client_name: "Dev Ananad",
      Status: "Active",
      Last_transaction: "on this date",
      Last_Communication: "action",
      Actions: "active",
      AUM: "mf",
      Tags: "Businessman",
    },
    {
      Sno: "001",
      Client_name: "ashrf",
      Status: "Active",
      Last_transaction: "on this date",
      Last_Communication: "action",
      Actions: "active",
      AUM: "mf",
      Tags: "Businessman",
    },
    {
      Sno: "002",
      Client_name: "Dev Ananad",
      Status: "Active",
      Last_transaction: "on this date",
      Last_Communication: "action",
      Actions: "inctive",
      AUM: "Amf",
      Tags: "Mfd",
    },
    {
      Sno: "003",
      Client_name: "Dev",
      Status: "Active",
      Last_transaction: "on this date",
      Last_Communication: "action",
      Actions: "active",
      AUM: "mf",
      Tags: "Wealth Manager",
    },
    {
      Sno: "004",
      Client_name: "Rohit",
      Status: "Active",
      Last_transaction: "on this date",
      Last_Communication: "action",
      Actions: "active",
      AUM: "Amf",
      Tags: "LIC Agent",
    },
    {
      Sno: "005",
      Client_name: "pushkar",
      Status: "Active",
      Last_transaction: "on this date",
      Last_Communication: "action",
      Actions: "active",
      AUM: "mf",
      Tags: "CA",
    },
  ];
  return (
    <div>
      <table>
        <tr>
          <th>Sno.</th>
          <th>Client name</th>
          <th>Status</th>
          <th>Last transaction</th>
          <th>Last Communication</th>
          <th>Actions</th>
          <th>AUM</th>
          <th>Tags</th>
        </tr>
        {clientsData
          .filter((data) => {
            if (props.searchClientsName === "") {
              return (
                <>
                  <tr>
                    <td>{data.Sno}</td>
                    <td>{data.Client_name}</td>
                    <td>{data.Status}</td>
                    <td>{data.Last_transaction}</td>
                    <td>{data.Last_Communication}</td>
                    <td>{data.Actions}</td>
                    <td>{data.AUM}</td>
                    <td>{data.Tags}</td>
                  </tr>
                </>
              );
            } else if (
              data.Client_name.toLowerCase().includes(
                props.searchClientsName.toLowerCase()
              ) ||
              data.Tags.toLowerCase().includes(
                props.searchClientsName.toLowerCase()
              ) 
              // data.AUM.toLowerCase().includes(props.selectAmu.toLowerCase())
            ) {
              // console.log("inside ele if",props.lectOccupation)
              return (
                <>
                  <tr>
                    <td>{data.Sno}</td>
                    <td>{data.Client_name}</td>
                    <td>{data.Status}</td>
                    <td>{data.Last_transaction}</td>
                    <td>{data.Last_Communication}</td>
                    <td>{data.Actions}</td>
                    <td>{data.AUM}</td>
                    <td>{data.Tags}</td>
                  </tr>
                </>
              )}
            
          
          })
          .map((data) => {
            return (
              <tr>
                <td>{data.Sno}</td>
                <td onClick={showName}>{data.Client_name}</td>
                <td>{data.Status}</td>
                <td>{data.Last_transaction}</td>
                <td>{data.Last_Communication}</td>
                <td>{data.Actions}</td>
                <td>{data.AUM}</td>
                <td>{data.Tags}</td>
              </tr>
            );
          })}
      </table>
    </div>
  );
}
