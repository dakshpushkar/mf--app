import React from 'react'
import { useState } from 'react'

export default function Marketing_campaigns(props) {
     
// props.fillDetails(true)
 const[agrement,setAgrement] =  useState(true)

 if(agrement === true){
    props.setFillDetails(true)
 }

  return (
    <div style={{marginLeft:"1.66vw" }}>Marketing_campaigns</div>
  )
}
