import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
// import CatName from './CategoryName';
import { useQuery } from "@apollo/client"
import { ALL_CATEGORIES } from "../utils/queries"
// import { USER_ITEMS } from "../utils/queries"

ChartJS.register(ArcElement, Tooltip);
function CatName() {
  const { data: catData } = useQuery(ALL_CATEGORIES);
  const categories = catData?.allCategories || [];
  var categoryName = [];
  for (let i = 0; i < categories.length; i++) {
    categoryName.push(categories[i].name);
  }
  // console.log(categoryName);
  // const { data: userData } = useQuery(USER_ITEMS)
  // const categories = catData?.allCategories || [];
  // var userItems = [];
  // for (let i = 0; i < categorie.length; i++) {
  //   categoryName.push(categories[i].name);
  // }
  // console.log(categoryName);
  const data = {
    labels: categoryName,
    // labels: ['Essentials', 'Non-Essentials', 'Savings'],
    datasets: [
      {
        label: 'Category',
        data: [2000, 500, 300, 100, 100, 100, 100, 100, 100],
        backgroundColor: [
          '#56A26480',
          '#B2E7BC80',
          '#73D38580',
        ],
        borderColor: [
          '#0B0B0B',
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
  return (data);
}

export default function PiePlot() {
  const data = CatName();
  return <Doughnut data={data} />;
}










