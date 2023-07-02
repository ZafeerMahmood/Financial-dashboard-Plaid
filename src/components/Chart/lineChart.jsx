import React from "react";
import { useState, useEffect, useRef } from "react";
import { Chart } from "react-chartjs-2";

/**
 * LineChartComponent displays a line chart.
 *
 * @param {Object} props - The component props.
 * @param {Array} props.chartData - The array of chart data.
 * @Array {Type} [{
        "amount": 5.4,
        "category": [
            "Travel",
            "Taxi"
        ],
        "date": "2023-05-30",
        "name": "Uber"
    },]
 * @returns {JSX.Element} The LineChartComponent JSX element.
 */
export default function LineChartComponent({chartData}) {
/**
 * Filters the chart data based on positive amounts.
 *
 * @param {Array} chartData - The array of chart data.
 * @returns {Array} The filtered chart data with positive amounts.
 */
const positiveChartData = chartData.filter((data) => data.amount > 0);

/**
 * Filters the chart data based on negative amounts.
 *
 * @param {Array} chartData - The array of chart data.
 * @returns {Array} The filtered chart data with negative amounts.
 */
const negativeChartData = chartData.filter((data) => data.amount < 0);

  
/**
 * Sorts the positiveChartData array based on the date property in ascending order.
 */
positiveChartData.sort((a, b) => new Date(a.date) - new Date(b.date));

/**
 * Sorts the negativeChartData array based on the date property in ascending order.
 */
negativeChartData.sort((a, b) => new Date(a.date) - new Date(b.date));
  
 /**
 * Formats a date string to a short month representation.
 *
 * @param {string} dateString - The date string to be formatted.
 * @returns {string} The formatted date string with the short month representation.
 */
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleString("default", { month: "short" });
  };

 /**
 * Configures the data view for the chart.
 *
 * @type {Object}
 * @property {Array} labels - An array of labels for the chart.
 * @property {Array} datasets - An array of datasets for the chart.
 */
  const chartDataView = {
    labels: positiveChartData.map((data) => {
      const [year, month, day] = data.date.split("-");
      return `${formatDate(data.date)} ${year.slice(-2)}`;
    }),
    datasets: [
        {
            label: "Expense",
            backgroundColor: "rgba(51, 200, 99, 0.2)",
            borderColor: "rgba(51, 200, 99, 0.9)",
            fill: true,
            data: positiveChartData.map((data) => data.amount),
            lineTension: 0.5,
        },
        {
            label: "Revenue",
            backgroundColor: "rgba(242, 153, 74, 0.2)",
            borderColor: "rgba(242, 153, 74, 0.9)",
            fill: true,
            data:negativeChartData.map((data) => -data.amount),
            lineTension: 0.5,
        }
    ],
};

/**
 * Creates the options configuration for a chart.
 *
 * @returns {Object} The options configuration object.
 */
  const createOptions = () => ({
    maintainAspectRatio: false,
    responsive: true,
    interaction: {
        mode: "index",
        intersect: false,
        axis: "x",
    },
    plugins: {
        tooltip: {
            enabled: true,
        },
        legend: true,
        position: "top",
        title: {
            display: true,
            text: "Expense vs Revenue Chart",
            font: {
                size: 20,
            },
            color: "white",
        }
    },

    scales: {
        y: {
            grid: {
                drawOnChartArea: false,
                drawBorder: false,
            },
            ticks: {
                color:  "#fff",
            },
        },
        x: {
            grid: {
                color: "#26323f",
                drawBorder: false,
                borderDash: [6],
                border: false,
            },
            ticks: {
                font: {
                    family: "'Mulish', sans-serif",
                    size: "12px",
                },
                color: "#fff",
            },
        },
    },
});


  return (
    <div className="w-full h-full flex  items-center justify-center bg-white border border-gray-200 rounded-lg shadow py-16 md:px-50 md:py-32 dark:bg-gray-800 dark:border-gray-700">
      <Chart className='h-full w-full' type="line" data={chartDataView} options={createOptions()} />
    </div>
  );
}