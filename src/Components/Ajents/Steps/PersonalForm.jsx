import React from "react";
import { useState } from "react";
// import TextField from "@material-ui/core/TextField";
import { Controller, useFormContext } from "react-hook-form";
import {
  CountryDropdown,
  RegionDropdown,
} from "react-indian-state-region-selector";
import "../Agent.css";
function PersonalForm(props) {
  const { control } = useFormContext();

  const [email, setEmail] = useState("");
  const [number, setNumber] = useState();
  const [add01, setAdd01] = useState("");
  const [add02, setAdd02] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [pinCode, setPinCode] = useState("");
  const [language, setlanguage] = useState("");

  console.log("email", email);
  console.log("number", number);
  console.log("add01", add01);
  console.log("add02", add02);
  console.log("state", state);
  console.log("city", city);
  console.log("pinCode", pinCode);
  console.log("language", language);

  if (
    email !== "" &&
    number !== "" &&
    add01 !== "" &&
    add02 !== "" &&
    state !== "" &&
    city !== "" &&
    pinCode !== "" &&
    language !== ""
  ) {
    props.setFillDetails(true);
  }

  // const handnum =(field)=>{
  //   if (field.value.length === 11) return false;
  //   setNumber(field.value)
  // }
  return (
    <div>
      <form
        action=""
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "48px",
          marginTop: "2.22vw",
          marginLeft: "1.66vw",
        }}
      >
        <Controller
          control={control}
          name="emailAddress"
          render={({ field }) => (
            <input
              required
              type="text"
              name="email"
              value={email}
            
              placeholder="Email"
              onChange={setEmail(field.value)}
              className="email-phone-add-input"
              {...field}
            />
          )}
        />
        <Controller
          control={control}
          name="phoneNumber"
          render={({ field }) => (
            <span className="phone-input-prefix">
              +91- <input
                type="text"
                value={number}
                // checked
                // pattern="[0-9]*"
                maxlength="10" 
                pattern="\d{10}" 
                placeholder="Mobile no."
                // onChange={setNumber(field.value)
                // }
                onChange={
                  // if(e.target.value.length === 11) return false
                  setNumber(field.value)
                }
                  
                  
              
                className="input-phone"
                {...field}
              />
            </span>
          )}
        />

        <Controller
          control={control}
          name="address1"
          render={({ field }) => (
            <input
              type="text"
              placeholder="Address line 01"
              onChange={setAdd01(field.value)}
              className="email-phone-add-input"
              {...field}
            />
          )}
        />
        <Controller
          control={control}
          name="address2"
          render={({ field }) => (
            <input
              type="text"
              placeholder="Address line 02"
              onChange={setAdd02(field.value)}
              className="email-phone-add-input"
              {...field}
            />
          )}
        />

        <div style={{ display: "flex", flexDirection: "column", gap: "48px" }}>
          <Controller
            control={control}
            name="state"
            render={({ field }) => (
              <CountryDropdown
                className="state-drop-down"
                value={state}
                onChange={setState(field.value)}
                {...field}
              />
            )}
          />
          <Controller
            control={control}
            name="city"
            render={({ field }) => (
              <RegionDropdown
                defaultOptionLabel="Select city"
                country={state}
                value={city}
                onChange={setCity(field.value)}
                {...field}
              />
            )}
          />
        </div>
        <Controller
          control={control}
          name="pinCode"
          render={({ field }) => (
            <input
              type="number"
              placeholder="Pin code"
              onChange={setPinCode(field.value)}
              className="email-phone-add-input"
              {...field}
            />
          )}
        />
        <Controller
          control={control}
          name="language"
          render={({ field }) => (
            <select onChange={setlanguage(field.value)} {...field}>
              <option defaultValue={true} value="Select language">
                Select language
              </option>
              <option value="Hindi">Hindi</option>
              <option value="English">English</option>
            </select>
          )}
        />
      </form>
    </div>
  );
}

export default PersonalForm;
