import React from 'react'
import "../Dashboard.css"
// import Dashboard from '../Dashboard'
// import SearchProfile from '../SearchProfile/SearchProfile'
import SidebarMenu from './SidebarMenu'
export default function Sidebar() {
    
   
  return (
    <div>
        <div className="sideBar-container" style={{ widh: "19.44vw" }}>
        <img className="logo-png" src="assets/Logo.png" alt="" style={{width:"9.30vw"}} />
        <p className="organization-name">Kuants Wealth Private Limited</p>
        <div >
          <SidebarMenu/>
        </div>
      </div>
   
    
    </div>
  )
}
