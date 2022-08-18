import React from "react";
import "../Dashboard.css"
import { Link } from "react-router-dom";

export default function SidebarMenu() {
  const [item, setItem] = React.useState("Dashboard");
  return (
    <div className="sideBar-options-contianer">
      <Link
        className={`${item === "Dashboard" && window.location.pathname === "/dashboard" ? "sideBar-active-option" : ""}`}
        to="/dashboard"
        onClick={() => setItem("Dashboard")}
      >
        Dashboard
      </Link>

      <Link
        className={`${item === "Clients" || window.location.pathname === "/clients"? "sideBar-active-option" : ""}`}
        to="/clients"
        onClick={() => setItem("Clients")}
      >
        Clients
      </Link>
      <Link
        to="/marketing"
        className={`${item === "Marketing" ? "sideBar-active-option" : ""}`}
        // onClick={() => setItem("Marketing")}
      >
        Marketing
      </Link>
      <Link
        to="/transactions"
        className={`${item === "Transactions" ? "sideBar-active-option" : ""}`}
        // onClick={() => setItem("Transactions")}
      >
        Transactions
      </Link>
      <Link
        to="/genie"
        className={`${item === "Genie" ? "sideBar-active-option" : ""}`}
        // onClick={() => setItem("Genie")}
      >
        Genie
      </Link>
      <Link
        to="/agent"
        className={`${item === "Agent" || window.location.pathname === "/agent" ? "sideBar-active-option" : ""}`}
        onClick={() => setItem("Agent")}
      >
        Agent
      </Link>
    </div>
  );
}
