import React from 'react'
import "./ClientDetails.css"
export default function AboutCLient(props) {
  return (
    <div>
         <p className='clientInfoHeading'>{props.clientInfoHeading}</p>
         <p className='clientInfoHeadingData'>{props.clientInfoHeadingData}</p>
    </div>
  )
}
