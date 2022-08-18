import React from 'react'
import AboutCLient   from '../Clients/ClientnDetails/AboutCLient'
import InfoSteper from './InfoSteper'
// mf-app/src/Components/SignUpPage/KycDocument.jsx

export default function Agent() {
 const aboutAgent = [
  { heading:"Status",

  heading_info:"Active / KYC pending"
  },
  { heading:"Date of joining",

  heading_info:"29th Feb, 2022"
  },
  { heading:"Relationship manager",

  heading_info:"Shyaam kumar"
  },

 ]

  return (
    <div >
      <p className='agent-pro-text'>Agent profile</p>
      <div style={{display:"flex" ,marginLeft:"3.33vw",gap:"135px",marginTop:"2.22vw"}}>
      {aboutAgent.map((data) => {
              return (
                <AboutCLient
                  clientInfoHeading={data.heading}
                  clientInfoHeadingData={data.heading_info}
                />
              );
            })}
      </div>
        <InfoSteper/>
        
    </div>
  )
}
