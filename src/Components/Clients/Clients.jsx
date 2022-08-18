import React from "react";
import DataTable from "./ClientsDataTAble/DataTable";
import Filters from "./Filter/Filters";
import "./Clients.css";
// import 'antd/dist/antd.min.css'
import { useState } from "react";
import {Link} from "react-router-dom"
import AddNewCLients from "./AddNewCLients/AddNewCLients";
import ClientDetails from "./ClientnDetails/ClientDetails";
import { BasicTable } from "./ClientsDataTAble/BasicTable";
// import Sidebar from '../Dashboard/Sidebar/Sidebar'
export default function Clients(props) {
  const [newClients, setNewclients] = useState(false);
  const[showClientsDetails,setShowClietnsDetails] =  useState(false)
  const[clientsName,setClientName] =  useState()
  const[slectOccupation,setSelectOccupation] =  useState("")
  const[selectLastTransaction,setSelectLastTransaction] =  useState()
  const[selectAmu,setSelectedAmu] =  useState()
  console.log("option Pushakr",slectOccupation)
  // console.log("option Pushakr",selectLastTransaction)
  // console.log("option Pushakr",selectAmu)
  const Selectclientstatus = [
    "Select occupation",
    "CA",
    "LIC Agent",
    "Businessman",
    "Wealth Manager",
    "MFD",
    "Others",
  ];
  const Lasttransaction = ["Last transaction", "Active", "inactive"];
  const AUM = ["AUM", "Mf", "AmF"];
  // const SelectSegment = ["Select segment", "new", "old"];
  const addNewCLients = () => {
    setNewclients(true);
  };
  return (
    <div>
       
      {showClientsDetails ?<ClientDetails clientsName={clientsName}/>:<>  
      {newClients ? (
        <AddNewCLients />
        
      ) : (
        <>
     
          <p className="heading">Filters</p>
          <div style={{ display: "flex", marginLeft: "3.40vw", gap: "10.66vw" }}>
            <Filters options={Selectclientstatus} setSelectOptn={setSelectOccupation}/>
            <Filters options={Lasttransaction} setSelectOptn={setSelectLastTransaction} />
            <Filters options={AUM} setSelectOptn={setSelectedAmu}/>
            {/* <Filters options={SelectSegment} /> */}
          </div>
       
          <div >
          <div
            style={{
              display: "flex",
              justifyContent:"space-between",
              // gap: "56.73vw",
              width:"75.33vw",
              minWidth:"1027px",
              marginTop: "3.33vw",
              marginLeft: "3.33vw",
            }}
          >
            <p className="cients-text">Clients</p>
            <Link to="addnewclients">
            <button className="add-new-clients-btn" onClick={addNewCLients}>
              + Add new client
            </button>
            </Link>
           
          </div>
         
            <div className="clietns-data-table">
              {/* <BasicTable/> */}
            <DataTable selectAmu={selectAmu} searchClientsName={props.searchClientsName === "" ?
             slectOccupation === "" ? "" : slectOccupation
             : props.searchClientsName
             } setClientName={setClientName} setShowClietnsDetails={setShowClietnsDetails} selectLastTransaction={selectLastTransaction}/>

            </div>
          
          </div>
        </>
      )}
    
    </>}
 
    </div>
  );
}
