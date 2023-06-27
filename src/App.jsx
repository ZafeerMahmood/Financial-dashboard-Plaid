import React, { useEffect, useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import NavbarHome from "./components/header/navbar";
import Table from "./components/table/table";
import Card from "./components/cards/cards";
import Cardv2 from "./components/cards/cardv2";
import PieChart from "./components/Chart/PieChart";
import "./App.css";
import LineChartComponent from "./components/Chart/lineChart";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  ArcElement
} from "chart.js";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  ArcElement
);

//Todo add useEffec to get the data from the server and pass it to the table, cards and charts

const App = () => {
   /**
   * The main component of the application.
   * Renders the entire application UI, including cards, charts, and tables.
   *
   * @returns {JSX.Element} The JSX element representing the application UI.
   */
  return (
    <div className="bg-gray-950 w-screen h-screen overflow-x-hidden  overflow-y-scroll lg:fixed  ">
      <NavbarHome />
      <div className="grid grid-cols-1  md:grid-cols-3 gap-4 h-full w-full p-4">
        <div className=" rounded-xl row-span-1 col-span-1 "><Card balance={642}/></div>
        <div className=" rounded-xl  row-span-1 col-span-1" ><Cardv2 balance={0}/></div>
        <div className=" rounded-xl  row-span-1 col-span-1 "><PieChart/></div>
        <div className=" row-span-2 col-span-1 md:col-span-2 rounded-xl"><LineChartComponent/></div> 
        <div className=" row-span-2 col-span-1 rounded-xl overflow-auto h-fit md:h-auto"><Table data={null}/></div>
      </div>
      <ToastContainer />
    </div>
  );
};
export default App;
