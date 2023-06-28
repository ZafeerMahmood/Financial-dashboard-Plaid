import { Doughnut } from "react-chartjs-2";
import React, { useEffect, useState } from "react";

const newData = [
  {
    amount: 2235.000000000001,
    category: ["Food and Drink", "Restaurants"],
    percentage: 63.29,
  },
  {
    amount: 600.0,
    category: ["Payment", "Credit Card"],
    percentage: 16.99,
  },
  {
    amount: 300.0,
    category: ["Food and Drink", "Restaurants", "Fast Food"],
    percentage: 8.5,
  },
  {
    amount: 287.85000000000014,
    category: ["Travel", "Taxi"],
    percentage: 8.15,
  },
  {
    amount: 108.24999999999997,
    category: ["Food and Drink", "Restaurants", "Coffee Shop"],
    percentage: 3.07,
  },
];

/**
 * Creates the merged data object for the chart component.
 *
 * @param {Array} newData - The array of data objects to be merged.
 * @returns {object} The merged data object for the chart.
 */
const mergedData = {
  labels: newData.map((item) => item.category.join(", ")),
  datasets: [
    {
      label: "Total Amount Spend on ",
      data: newData.map((item) => Math.abs(item.amount)),
      backgroundColor: [
        "rgba(255, 99, 132, 0.7)",
        "rgba(54, 162, 235, 0.7)",
        "rgba(255, 206, 86, 0.7)",
        "rgba(75, 192, 192, 0.7)",
        "rgba(153, 102, 255, 0.7)",
        "rgba(255, 159, 64, 0.7)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

export default function PieChart() {


/**
 * Creates the options object for the chart component.
 *
 * @returns {object} The options object for the chart.
 */
const createOptions = () => ({
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: true,
      position: "left"
    }
  }
});
  

  return (
    <div className="w-full h-full p-4  bg-white border border-gray-200 rounded-lg shadow py-16 md:px-0 md:py-0 dark:bg-gray-800 dark:border-gray-700">
      <h5 className=" md:relative md:top-[21%] md:left-4 text-xl font-medium text-gray-500 dark:text-white ">
        Expenses by Category :
      </h5>
      <br/>
      <div className="w-full h-3/4 mt-auto bg-white rounded-lg  dark:bg-gray-800 ">
        <Doughnut
          className=""
          data={mergedData}
          options={createOptions(window.innerWidth)}
        />
      </div>
    </div>
  );
}
