import React, { memo } from 'react'
import "./ClientDetails.css"
import { Line,  } from "react-chartjs-2/";
import { Chart, registerables } from 'chart.js';
import * as ChartAnnotation from 'chartjs-plugin-annotation';
Chart.register(...registerables);
function ClientChart() {

    const data = {
        labels: [
          "0",
          "100",
          "200",
          "300",
          "400",
          "500",
          "600",
          "700",
          "800",
          "900",
          "920",
          "1000"
        ],
        // backgroundColor: ['rgba(255,0,0,1)'],
        // lineTension: 1,
        datasets: [
          {
          
            fill: false,
            borderColor: "#5985FC",
            borderWidth: 4,
            pointRadius: 4,
            // borderRadious:3,
            tension: 0.5,
               pointStyle:"circle",
            data: [0, 599, 480, 281, 156, 554, 240,680, 81, 56, 155, 700]
          },
          {
           
            fill: false,
            borderColor: "#6D42DA",
            borderWidth: 4,
            // pointRadius: 1,
            // borderRadious:3,
          
            tension: 0.5,
      
            data: [0, 232, 345, 465, 687, 792, 199,280, 81, 556, 255, 940]
          },
         
        ]
      };
    
      return (
        <div className="chart">
       
          <Line
        plugins={[ChartAnnotation]}
            data={data}
            options={{
                plugins: {
                    legend: {
                        display: false,
                  
                        
                    },
                  
                },
                scales: {
                  x: {
                      ticks: {
                          font: {
                              size: "14vw",
                              family:"Rubik",
                              weight:"400",
                              lineHeight:"20px",
                            
                          },
                      
                      },
                      
                  },
                  y: {
                      ticks: {
                          font: {
                              size: "14vw",
                              family:"Rubik",
                              weight:"400",
                              lineHeight:"20px"
                          },
                         
                      }
                      
                  }
              }
              }}
          />
          
        </div>
      )
    }
    export default memo(ClientChart)