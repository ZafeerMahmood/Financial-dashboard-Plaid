import { Doughnut } from "react-chartjs-2";
import React, { useEffect, useState } from "react";
import Loader from "../loader/loder";



/**
 * PieChart displays a pie chart.
 *
 * @param {Object} props - The component props.
 * @param {Array} props.data - The array of data objects for the chart.
 * @Array {Type} [ {
        "amount": 2145.600000000001,
        "category": [
            "Food and Drink",
            "Restaurants"
        ],
        "percentage": 62.75
    }]
 * @returns {JSX.Element} The PieChart JSX element.
 */
export default function PieChart({data}) {


const [loading, setLoading] = useState(true)
  useEffect(() => {
    if(data){
      setTimeout(() => {
      setLoading(false)
      }, 2000);
    }
  },[data])
/**
 * Creates the merged data object for the chart component.
 *
 * @param {Array} newData - The array of data objects to be merged.
 * @returns {object} The merged data object for the chart.
 */
const mergedData = {
  labels: data.map((item) => item.category.join(", ")),
  datasets: [
    {
      label: "Total Amount Spend on ",
      data: data.map((item) => Math.abs(item.amount)),
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
    (loading)? (<div className="w-full h-full flex justify-center p-4  border rounded-lg shadow py-16 md:px-16 md:py-24 bg-gray-800 border-gray-700">
    <Loader /> </div>) :
    (
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
    </div>)
  );
}
