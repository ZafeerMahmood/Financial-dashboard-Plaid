import React, { useEffect, useRef, useState } from "react";
import { usePlaidLink } from "react-plaid-link";
import { getExpireDate } from "./components/components";
import { useCookies } from "react-cookie";
import { ToastContainer, toast } from "react-toastify";
import NavbarHome from "./components/header/navbar";
import Table from "./components/table/table";
import Card from "./components/cards/cards";
import PieChart from "./components/Chart/PieChart";
import "./App.css";
// import BarChart from "./components/Chart/BarChart";
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

const App = () => {
  const [cookies, setCookie] = useCookies(["Email"]);
  const [linkToken, setLinkToken] = useState(null);
  const email = useRef();
  const generateToken = async () => {
    const token = cookies.token;
    if (token) {
      setLinkToken(token);
      console.log(token);
      return;
    } else {
      const res = await fetch("/api/linkToken", {
        method: "GET",
      });
      const data = await res.json();
      console.log(data.link_token, "token");
      setCookie("token", data.link_token, {
        path: "/",
        expires: getExpireDate(),
      });
      setLinkToken(data.link_token);
      console.log(data.link_token, "token");
    }
  };

  useEffect(() => {
    // if(cookies.email){
    //   email.current = cookies.email;
    // }
    // else {
    //   setCookie('email','zafeer746@gmail.com', { path: '/' ,expires: getExpireDate()});
    // }
    // generateToken();
  }, []);

  const { open, ready } = usePlaidLink({
    token: linkToken,
    onSuccess: async (public_token, metadata) => {
      email.current = cookies.email;
      console.log(email, "inside Onsuccess");
      const id = metadata.institution.institution_id;
      const response = await fetch("/api/accounts", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        },
        body: `email=${email.current}`,
      });

      const data = await response.json();
      if (response.status === 200) {
        console.log("inside if");
        data.forEach((data) => {
          if (data === id) {
            console.log("account already linked");
            toast.error("account already linked !", {
              position: toast.POSITION.TOP_RIGHT,
            });
            return;
          } else {
            fetch("/api/setAccessToken", {
              method: "POST",
              headers: {
                "Content-Type":
                  "application/x-www-form-urlencoded;charset=UTF-8",
              },
              body: `public_token=${public_token}&email=${email.current}`,
            });
          }
        });
      } else {
        console.log("inside else");
        fetch("/api/setAccessToken", {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
          },
          body: `public_token=${public_token}&email=${email.current}`,
        });
      }
    }, //End of onSuccessFunction
  }); //End of UsePlaidLinkFunction

  return (
    <div className="bg-gray-950 w-screen h-screen overflow-x-hidden  overflow-y-scroll lg:fixed  ">
      <NavbarHome />
      {/* <div className='mt-5 flex items-center justify-center '>
       <input type='text' className='mb-6 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-2/4 p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500' placeholder={`@input to filter chart based in year eg. ${'2023'} `}></input>
      </div> */}
      <div className="grid grid-cols-1  md:grid-cols-3 gap-4 h-full w-full p-4">
        <div className=" rounded-xl row-span-1 col-span-1 "><Card balace={642}/></div>
        <div className=" rounded-xl  row-span-1 col-span-1" ><Card balace={0}/></div>
        <div className=" rounded-xl  row-span-1 col-span-1 "><PieChart/></div>
        <div className=" row-span-2 col-span-1 md:col-span-2 rounded-xl"><LineChartComponent/></div> 
        <div className=" row-span-2 col-span-1 rounded-xl overflow-auto h-fit md:h-auto"><Table data={null}/></div>
      </div>
      <ToastContainer />
    </div>
  );
};
export default App;
