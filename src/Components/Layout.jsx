import React, { useState } from 'react'
import Dashboard from './Dashboard/Dashboard'
import SearchProfile from './Dashboard/SearchProfile/SearchProfile'
import Sidebar from './Dashboard/Sidebar/Sidebar'
import Clients from './Clients/Clients'
import Agent from './Ajents/Agent'
// import { Outlet } from 'react-router-dom'
// import AddNewCLients from './Clients/AddNewCLients/AddNewCLients'




export default function Layout() {
    const[searchClientsName,setSeachClientsName] =  useState("")
    const routeComponent = () => {
        if(window.location.pathname === "/dashboard"){
            return <Dashboard searchClientsName={searchClientsName}/>
        }
        else if(window.location.pathname === "/clients"){
            return <Clients searchClientsName={searchClientsName}/>
        }
        else if(window.location.pathname === "/agent"){
            return <Agent/>
        }
        
    }
    console.log("serach",searchClientsName)
  return (
    <div>
        <Sidebar/>
        <div style={{marginLeft:"19.86vw"}}>
          
        <SearchProfile  setSeachClientsName={setSeachClientsName}/>
        {/* <Outlet/> */}
        {routeComponent()}
      
        </div>
   
        </div> 
  )
}
