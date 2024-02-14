import React, { useEffect, useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import NavbarHome from "./components/header/navbar";
import Table from "./components/table/table";
import BalanceCard from "./components/cards/cards";
import PatternCard from "./components/cards/cardv2";
import PieChart from "./components/Chart/PieChart";
import { useCookies } from "react-cookie";
import LineChartComponent from "./components/Chart/lineChart";
import { fetchData } from "./components/components.js";
import { usePlaidLink } from "react-plaid-link";
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

/**
 * The main component of the application.
 * Renders the entire application UI, including cards, charts, and tables.
 *
 * @returns {JSX.Element} The JSX element representing the application UI.
 */
const App = () => {
  const email = useRef();
  const linkToken = useRef();
  const [cookies, setCookie] = useCookies(["Email"]);
  const [transactions, setTransactions] = useState([]);
  const [balance, setBalance] = useState({});
  const [plaidUpdateMode, setPlaidUpdateMode] = useState(false);
  const [expenses, setExpenses] = useState([]);
  const [pattern, setPattern] = useState([]);

  const { open, ready } = usePlaidLink({
    token: linkToken.current,
    onSuccess: async (public_token, metadata) => {
      //do nothing the access token remais the same
      setPlaidUpdateMode(false);
    },
    onExit: async (err, metadata) => {
      if (err != null) {
        console.log("Plaid Link exit error: " + err);
      }
      console.log("Link exit metadata: " + metadata);
    },
  });

  /**
   * Calls the API to reauthenticate with the provided email.
   * @param {string} email - The email to use for reauthentication.
   * @returns {boolean} - True if the response status is 525, false otherwise.
   */
  const checkifReauth = async () => {
    email.current = cookies.email;
    const response = await fetch("/api/Reauthenticate", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      },
      body: `email=${email.current}`,
    });
    const data = await response.json();
    console.log(data);
    if (data.message === "Access Token Up To Date") {
      return false;
    }
    if (response.status === 525) {
      linkToken.current = data.link_token;
      setPlaidUpdateMode(true);
      return true;
    } else {
      false;
    }
  };

  const PlaidUpdateModeFunction = () => {
    open();
  };

  /**
   * Retrieves user data including transactions, balance, expenses, and pattern.
   * @async
   */
  const getUserData = async () => {
    email.current = cookies.email;
    const Email = email.current; // Assuming you have the email value stored in the `email.current` variable
    const method = "POST";
    // Fetch transactions
    const transactionResult = await fetchData("transactions", Email, method);
    if (typeof transactionResult === "number") {
      console.log(
        "Error fetching transactions. Status code:",
        transactionResult
      );
    } else {
      setTransactions(transactionResult);
    }
    //Fetch balance
    const balanceResult = await fetchData("balance", Email, method);
    if (typeof balanceResult === "number") {
      console.log("Error fetching balance. Status code:", balanceResult);
    } else {
      setBalance(balanceResult);
    }

    // Fetch expenses
    const expenseResult = await fetchData("expense", Email, method);
    if (typeof result === "number") {
      console.log("Error fetching balance. Status code:", expenseResult);
    } else {
      setExpenses(expenseResult);
    }
    // Fetch pattern
    const patternResult = await fetchData("pattern", Email, method);
    if (typeof patternResult === "number") {
      console.log("Error fetching balance. Status code:", patternResult);
    } else {
      setPattern(patternResult);
    }
  };

  useEffect(() => {
    const load = async () => {
      const Check = await checkifReauth();
      if (Check) {
        PlaidUpdateModeFunction();
      } else {
        await getUserData();
      }
    };
    load();
  }, [cookies.email]);

  return (
    <div className="bg-gray-950 w-screen h-screen overflow-x-hidden  overflow-y-scroll lg:fixed  ">
      <NavbarHome />
      <div className="grid grid-cols-1  md:grid-cols-3 gap-4 h-full w-full p-4">
        <div className=" rounded-xl row-span-1 col-span-1 ">
          <BalanceCard data={balance} />
        </div>
        <div className=" rounded-xl  row-span-1 col-span-1">
          <PatternCard data={pattern} />
        </div>
        <div className=" rounded-xl  row-span-1 col-span-1 ">
          <PieChart data={pattern} />
        </div>
        <div className=" row-span-2 col-span-1 md:col-span-2 rounded-xl">
          <LineChartComponent chartData={transactions} />
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
