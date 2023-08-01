import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip);

export const data = {
  labels: ['Essentials', 'Non-Essentials', 'Savings'],
  datasets: [
    {
      label: 'Category',
      data: [2100, 700, 200],
      backgroundColor: [
        '#56A26480',
        '#B2E7BC80',
        '#73D38580',
      ],
      borderColor: [
        '#0b0b0b',
      ],
      borderWidth: 2,
    },
  ], 
  options: {
    plugins: {
      legend: {
          position: 'bottom',
          display: true,
          labels: {
              color: 'rgb(255, 99, 132)'
            }
        }
    }
},
};

export default function PiePlot1() {
  return <Doughnut data={data} />;
}

