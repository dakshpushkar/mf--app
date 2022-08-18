import React from "react";
import { useState } from "react";
import { Controller, useFormContext } from "react-hook-form";

export default function Products_plan(props) {
  const { control } = useFormContext();

  const [mf, setMf] = useState("");
  const [gold, setGold] = useState("");
  const [stock, setStock] = useState("");
  /* ------select ----Plan-------*/
  const [basic, setBasic] = useState("");
  const [pro, setPro] = useState("");
  const [enterprise, setEnterprise] = useState("");
  console.log("mf", mf);
  if ((mf || gold || stock) && (basic || pro || enterprise)) {
    props.setFillDetails(true);
  }
  return (
    <div style={{ marginLeft: "1.66vw" }}>
      <p className="checkbox-heading">Select products</p>
      <div
        className="checkbox-input"
        style={{ display: "flex", flexDirection: "column", gap: "1.94vw" }}
      >
        <label style={{ display: "flex", gap: "1.11vw" }}>
          <Controller
            control={control}
            name="mutualFunds"
            render={({ field }) => (
              <input
                type="checkbox"
                checked={mf}
                onChange={setMf(field.value)}
                value="Mutual funds"
                // value={"mutualFunds"}
                style={{ height: "1.11vw", width: "1.11vw" }}
                {...field}
              />
            )}
          />{" "}
          Mutual funds
        </label>
        <label style={{ display: "flex", gap: "1.11vw" }}>
          <Controller
            control={control}
            name="gold"
            render={({ field }) => (
              <input
              checked={gold}
                type="checkbox"
                onChange={setGold(field.value)}
                value="Gold"
                style={{ height: "1.11vw", width: "1.11vw" }}
                {...field}
              />
            )}
          />
          Gold
        </label>
        <label style={{ display: "flex", gap: "1.11vw" }}>
          <Controller
            control={control}
            name="stock"
            render={({ field }) => (
              <input
              checked ={stock}
                type="checkbox"
                onChange={setStock(field.value)}
                value="Stock"
                style={{ height: "1.11vw", width: "1.11vw" }}
                {...field}
              />
            )}
          />{" "}
          Stocks
        </label>
      </div>
      <p className="checkbox-heading" style={{ marginTop: "3.33vw" }}>
        Select plan
      </p>
      <div
        className="checkbox-input"
        style={{ display: "flex", flexDirection: "column", gap: "1.94vw" }}
      >
        <label style={{ display: "flex", gap: "1.11vw" }}>
          <Controller
            control={control}
            name="basic"
            render={({ field }) => (
              <input
            checked={basic}
                type="checkbox"
                onChange={setBasic(field.value)}
                value="Basic"
                style={{ height: "1.11vw", width: "1.11vw" }}
                {...field}
              />
            )}
          />{" "}
          Basic (free)
        </label>
        <label style={{ display: "flex", gap: "1.11vw" }}>
          <Controller
            control={control}
            name="pro"
            render={({ field }) => (
              <input
              checked={pro}
                type="checkbox"
                onChange={setPro(field.value)}
                value="Pro"
                style={{ height: "1.11vw", width: "1.11vw" }}
                {...field}
              />
            )}
          />{" "}
          Pro
        </label>
        <label style={{ display: "flex", gap: "1.11vw" }}>
          <Controller
            control={control}
            name="enterprise"
            render={({ field }) => (
              <input
                type="checkbox"
                checked={enterprise}
                onChange={setEnterprise(field.value)}
                value="Enterprise"
                style={{ height: "1.11vw", width: "1.11vw" }}
                {...field}
              />
            )}
          />{" "}
          Enterprise
        </label>
      </div>
    </div>
  );
}
