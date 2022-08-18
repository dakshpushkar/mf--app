import React from "react";
import { PieChart } from "react-minimal-pie-chart";
import "./ClientDetails.css";
export default function DiversificationPieChart() {
  const data = [
    { title: "Pharmaceuticals", value: 7, color: "#5985FC" },
    { title: "Technology", value: 5, color: "#56CBF1" },
    { title: "Banking", value: 8, color: "#6D42DA" },
  ];
  return (
    <div style={{ marginTop: "3.22vw", marginLeft: "3vw"  }}>
        {/* <div style={{backgroundColor:"red",borderRadius:"100%",width:"146px",position:"absolute"}}> </div> */}
        <PieChart
       
          animate
          animationDuration={500}
          animationEasing="ease-out"
          center={[50, 45]}
          data={data}
          lengthAngle={360}
          lineWidth={40}
          // paddingAngle={10}
          radius={40}
          // rounded
          startAngle={-190}
          // labelPosition={130}
          viewBoxSize={[110, 100]}
          labelPosition={130}
          label={({ x, y, dx, dy, dataEntry }) => (
            <text
              dominant-baseline="central"
              text-anchor="middle"
              x={x}
              y={y}
              dx={dx}
              dy={dy}
              style={{
                display: true,
                fontSize: "0.3vw",
               fontFamily:"Rubik",
               fontWeight:"300",
                lineHeight:"1vw"
              }}
            >
              {Math.round(dataEntry.percentage) + "%"}
            </text>
          )}
        //   labelStyle={{
        //     fontSize: "20px",
        //     fontColor: "FFFFFA",
        //     fontWeight: "800"
        //   }}
        //     viewBoxSize={[115, 105]}
        //     data={data}
        //     lineWidth={40}
        //     labelPosition={130}
        //     startAngle={-190}
        //     radius={40}
        //     label={({ x, y, dx, dy, dataEntry }) => (
        //       <text
        //         // dominant-baseline="central"
        //         text-anchor="middle"
        //         x={x}
        //         y={y}
        //         dx={dx}
        //         dy={dy}
        //         style={{
        //           display: true,
        //           fontSize: "0.3vw",
        //           margin: "20px",
        //         }}
        //       >
        //         {Math.round(dataEntry.percentage) + "%"}
        //       </text>
        //     )}
        />

        <p className="t-3-sector">
          Top <span>3</span> Sectos
        </p>

      <div style={{ display: "flex", gap: "3.33vw" ,marginLeft:"-5vw"}}>
        <div style={{ display: "flex", gap: "0.83VW", alignItems: "baseline" }}>
          <div
            style={{
              width: "0.97vw",
              height: "0.97vw",
              borderRadius: "50%",
              backgroundColor: "#6D42DA",
            }}
          ></div>
          <p className="level">Technology</p>
        </div>
        <div style={{ display: "flex", gap: "0.83VW", alignItems: "baseline" }}>
          <div
            style={{
              width: "0.97vw",
              height: "0.97vw",
              borderRadius: "50%",
              backgroundColor: "#5985FC",
            }}
          ></div>
          <p className="level">Banking</p>
        </div>
        <div style={{ display: "flex", gap: "0.83VW", alignItems: "baseline" }}>
          <div
            style={{
              width: "0.97vw",
              height: "0.97vw",
              borderRadius: "50%",
              backgroundColor: "#56CBF1",
            }}
          ></div>
          <p className="level">Pharmaceuticals</p>
        </div>
      </div>
    </div>
  );
}
