import React from 'react'
import "./ClientDetails.css"
export default function TransactionTable() {

const transaction=[
    {
        fund_name:"Last transaction",
        investment:"Actions",
        transaction:"Last transaction",
        amount:"Actions"
    },
    {
        fund_name:"Last transaction",
        investment:"Actions",
        transaction:"Last transaction",
        amount:"Actions"
    },
    {
        fund_name:"Last transaction",
        investment:"Actions",
        transaction:"Last transaction",
        amount:"Actions"
    },
    {
        fund_name:"Last transaction",
        investment:"Actions",
        transaction:"Last transaction",
        amount:"Actions"
    },
]

  return (
    <div >
        <table >
        <tr>
          <th>Fund name</th>
          <th>Investment</th>
          <th>Transaction</th>
          <th>Amount</th>
        </tr>
        
            {transaction.map((data)=>{
                return (
                    <tr>
                        <td>{data.fund_name}</td>
                        <td>{data.investment}</td>
                        <td>{data.transaction}</td>
                        <td>{data.amount}</td>
                    </tr>
                )
            })}
     
        </table>
    </div>
  )
}
