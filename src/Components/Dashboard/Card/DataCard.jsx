import React from 'react'
import "./DataCard.css"
export default function DataCard(props) {
  return (
    <div className='card-container'>
      <h1 className='active-clients-num'> {props.abc}</h1>
      <p className='heading-clietns'>{props.heading}</p>
    </div>
  )
}
