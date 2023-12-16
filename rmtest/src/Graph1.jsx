import React, { useEffect, useState } from 'react'
import Chart from 'chart.js/auto';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale ,LinearScale, PointElement, LineController} from "chart.js";
import { Line } from 'react-chartjs-2';
import { FLine } from './ApiFetch/api';


function Graph1() {
    ChartJS.register(ArcElement, Tooltip, Legend ,CategoryScale,LinearScale,PointElement,LineController);
    const [graphData, setGraphData] = useState([]);

    useEffect(() => {

        const fetchData = async () => {
            try {
              const AGr = await FLine();
              setGraphData(AGr);
            } catch (err) {
              console.error('Error fetching data:', err);
            }
        }
        fetchData()
    }, [])

    const data = {
        labels: graphData.map((point) => point.x),
        datasets: [
          {
            label: 'Graph Data',
            data: graphData.map((point) => point.y),
            fill: false,
            borderColor: 'rgba(75,192,192,1)',
            borderWidth: 1,
            pointBackgroundColor: 'rgba(75,192,192,1)',
            pointRadius: 4,
            pointHoverRadius: 8,
            lineTension: 0.5
          },
        ],
        

      };
    
      const options = {
        scales: {
          x: {
            type: 'category',
            title: {
              display: true,
              text: 'Months',
            },
          },
          y: {
            title: {
              display: true,
              text: 'Values',
            },
          },
        },
      };
  return (
    <div style={{marginLeft:'50px' ,height:'340px'}}>
      <Line data={data} options={options} />
    </div>
  )
}

export default Graph1
