import React, { useEffect, useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import NavbarHome from "./components/header/navbar";
import Table from "./components/table/table";
import Card from "./components/cards/cards";
import Cardv2 from "./components/cards/cardv2";
import PieChart from "./components/Chart/PieChart";
import "./App.css";
import { useCookies } from "react-cookie";
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
  ArcElement,
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

/**
 * The main component of the application.
 * Renders the entire application UI, including cards, charts, and tables.
 *
 * @returns {JSX.Element} The JSX element representing the application UI.
 */
const App = () => {
  const [list, setList] = useState([]);
  const email = useRef();
  const [cookies, setCookie] = useCookies(["Email"]);
  const [linkToken, setLinkToken] = useState(null);
  const [transactions, setTransactions] = useState([]);

  //make a funtion to call api reauthenticate with email as its param then  check   if error is 525 or not return true or false

  const checkifReauth = async () => {
    const response = await fetch("/api/Reauthenticate", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      },
      body: `email=${email.current}`,
    });
    const data = await response.json();
    if (response.status === 525) {
      setLinkToken(data.link_token);
      return true;
    } else {
      false;
    }
  };

  const PlaidUpdateMode = async () => {};

  const getUserData = async() => {
    email.current = cookies.email;
    const response = await fetch("/api/transactions", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      },
      body: `email=${email.current}`,
    });
    const data = await response.json();
    setTransactions(data);
  };
  useEffect(() => {
     getUserData();
    // if(checkifReauth()){
    //   //call paid link to reauthenticate the user

    // }else{
    //   //call api to get the data
    // }
  }, [cookies.email]);

  return (
    <div className="bg-gray-950 w-screen h-screen overflow-x-hidden  overflow-y-scroll lg:fixed  ">
      <NavbarHome />
      <div className="grid grid-cols-1  md:grid-cols-3 gap-4 h-full w-full p-4">
        <div className=" rounded-xl row-span-1 col-span-1 ">
          <Card balance={642} />
        </div>
        <div className=" rounded-xl  row-span-1 col-span-1">
          <Cardv2 balance={0} />
        </div>
        <div className=" rounded-xl  row-span-1 col-span-1 ">
          <PieChart />
        </div>
        <div className=" row-span-2 col-span-1 md:col-span-2 rounded-xl">
          <LineChartComponent chartData={transactions}/>
        </div>
        <div className=" row-span-2 col-span-1 rounded-xl overflow-auto h-fit md:h-auto">
          <Table data={transactions} />
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};
export default App;
