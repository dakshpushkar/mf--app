import React from "react";
import TextField from "@material-ui/core/TextField";
import { Controller, useFormContext } from "react-hook-form";
import { useState } from "react";

function BankDetailForm(props) {
  const { control } = useFormContext();
  const [accountNum, setAccountNum] = useState("");
  const [reAccountNum, setReAccountNum] = useState("");
  const [ifsc, setIfsc] = useState("");
  const [holderName, setHolderName] = useState("");
  const[error,setError] = useState("")
  if (
    accountNum !== "" &&
    reAccountNum !== "" &&
    ifsc !== "" &&
    holderName !== ""
  ) {
    props.setFillDetails(true);
  }
// if(accountNum !== reAccountNum){
//   setError("It does not match")
// }
  return (
    <div style={{ display: "flex", marginTop: "24px", marginLeft: "1.66vw" }}>
      <form
        action=""
        style={{ display: "flex", flexDirection: "column", gap: "48px" }}
      >
        <Controller
        control={control}
        name="accountNum"
        render={({field})=>(
          <input
          type="number"
          placeholder="Account number"
          value={accountNum}
          onChange={setAccountNum(field.value)}
          className="email-phone-add-input"
          {...field}
        />
        )}
        
        />
        <Controller
        control={control}
        name="reEnteraccountNum"
        render={({field})=>(
          <input
          type="number"
          placeholder="Re-enter account number"
          onChange={ setReAccountNum(field.value)}
          className="email-phone-add-input"
          {...field}
        />
        )}
        
        />
        {/* <p>{error}</p> */}
        <Controller
        control={control}
        name="ifcCode"
        render={({field})=>(
          <input
          type="text"
          placeholder="IFSC code"
          onChange={setIfsc(field.value)}
          className="email-phone-add-input"
          {...field}
        />
        )}
        
        />
        <Controller
        control={control}
        name="accountHolderName"
        render={({field})=>(
          <input
          type="text"
          placeholder="Account holder’s name"
          onChange={setHolderName(field.value)}
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

export default BankDetailForm;
