import React from "react";
import "./Filter.css";
export default function Filters(props) {
  return (
    <div>
      <select className="selecter" onChange={(e) => props.setSelectOptn(e.target.value)}>
        {props.options.map((item, index) => {
          return (
            <option
              value={item}
              disabled={index === 0 ? true : false}
              defaultValue={index === 0}
              selected={index === 0}
            >
              {item}
            </option>
          );
        })}
      </select>
    </div>
  );
}
