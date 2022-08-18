import React from "react";
import { useState } from "react";
import { Controller, useFormContext } from "react-hook-form";

export default function OtherLinks(props) {
const {control} =  useFormContext()

  const [fbLink, setFbLink] = useState("");
  const [linkdin, setLinkdin] = useState("");
  const [instLink, setInstaLink] = useState("");
  const [webLink, setWebLink] = useState("");
  const [microSiteLink, setMicroSiteLink] = useState("");
  if (
    fbLink !== "" &&
    linkdin !== "" &&
    instLink !== "" &&
    webLink !== "" &&
    microSiteLink !== ""
  ) {
    props.setFillDetails(true);
  }

  return (
    <div style={{ display: "flex", marginTop: "24px", marginLeft: "1.66vw" }}>
      <form
        action=""
        style={{ display: "flex", flexDirection: "column", gap: "48px" }}
      >
        <Controller
        control={control}
        name="fbLink"
        render={({field})=>(
          <input
          type="text"
          placeholder="Facebook page"
          onChange={setFbLink(field.value)}
          className="email-phone-add-input"
          {...field}
        />
        )}
        />
        <Controller
        control={control}
        name="linkdinLink"
        render={({field})=>(
          <input
          type="text"
          placeholder="Linkedin page"
          onChange={setLinkdin(field.value)}
          className="email-phone-add-input"
          {...field}
        />
        )}
        />
        <Controller
        control={control}
        name="instaLink"
        render={({field})=>(
          <input
          type="text"
          placeholder="Instagram page"
          onChange={setInstaLink(field.value)}
          className="email-phone-add-input"
          {...field}
        />
        )}
        />
        <Controller
        control={control}
        name="website"
        render={({field})=>(
          <input
          type="text"
          placeholder="Website"
          onChange={setWebLink(field.value)}
          className="email-phone-add-input"
          {...field}
        />
        )}
        />
        <Controller
        control={control}
        name="microSite"
        render={({field})=>(
          <input
          type="text"
          placeholder="Microsite"
          onChange={setMicroSiteLink(field.value)}
          className="email-phone-add-input"
          {...field}
        />
        )}
        />
      
       
        {/* <input type="text"  className="email-phone-add-input"/> */}
      </form>
    </div>
  );
}
