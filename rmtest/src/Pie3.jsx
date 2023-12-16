import React, { useEffect, useState } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from 'react-chartjs-2';
import axios from 'axios';
import { FPie } from './ApiFetch/api';

const Pie3 = () => {
    ChartJS.register(ArcElement, Tooltip, Legend);
  const [pieChartData, setPieChartData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const Pied = await FPie();
        setPieChartData(Pied);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const data = {
    labels: pieChartData.map((data) => data.label),
    datasets: [
      {
        data: pieChartData.map((data) => data.value),
        backgroundColor: ['#67C587', '#88d1a1', '#a9deba', '#c9ead4', '#eaf6ed'],
        hoverBackgroundColor: ['#f2fff7', '#f2fff7', '#f2fff7', '#f2fff7', '#f2fff7'],
      },
    ],
  };

  return (
    <div>
          <Pie data={data} />

    </div>
  );
};



export default Pie3
