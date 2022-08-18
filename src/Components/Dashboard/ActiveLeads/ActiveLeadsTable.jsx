
// import React, { useState } from 'react'
import "./ActiveLeadsTable.css"
export default function ActiveLeadsTable(props) {
  
console.log("activesdfghjk",props.searchClientsName)
const clientsData = [
  { Sno:"001",
  Client_name:"Dev Ananad",
  Status:"Active",
  Last_transaction:"on this date",
  Actions:"active",
  },
  { Sno:"002",
  Client_name:"Dev Ananad",
  Status:"Active",
  Last_transaction:"on this date",
  Actions:"active",
  },
  { Sno:"003",
  Client_name:"Dev",
  Status:"Active",
  Last_transaction:"on this date",
  Actions:"active",
  },
  { Sno:"004",
  Client_name:"Rohit",
  Status:"Active",
  Last_transaction:"on this date",
  Actions:"active",
},
  { Sno:"005",
  Client_name:"pushkar",
  Status:"Active",
  Last_transaction:"on this date",
  Actions:"active",
  },
]

  return (
    <div>
        <table  className='active-leads-table'>
        <tr>
          <th>Sno.</th>
          <th>Client name</th>
          <th>Status</th>
          <th>Last transaction</th>
          <th>Actions</th>
        </tr>
     {clientsData.filter((data)=>{
       if(props.searchClientsName ===""){
        return (  <tr>
          <td>{data.Sno}</td>
          <td>{data.Client_name}</td>
          <td>{data.Status}</td>
          <td>{data.Last_transaction}</td>
          <td>{data.Actions}</td>
        </tr>
      )
       }
       else if(data.Client_name.toLowerCase().includes(props.searchClientsName.toLowerCase())){
        return(
          <tr>
          <td>{data.Sno}</td>
          <td>{data.Client_name}</td>
          <td>{data.Status}</td>
          <td>{data.Last_transaction}</td>
          <td>{data.Actions}</td>
        </tr>
        )
       }
     }).map((data)=>{
        return(  <tr>
            <td>{data.Sno}</td>
            <td>{data.Client_name}</td>
            <td>{data.Status}</td>
            <td>{data.Last_transaction}</td>
            <td>{data.Actions}</td>
          </tr>
        )
     })}

      </table>

    </div>
  )
 }


