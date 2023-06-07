import React, { useEffect, useRef, useState } from "react";
import { usePlaidLink } from "react-plaid-link";
import { getExpireDate } from "./components/components";
import { useCookies } from "react-cookie";
import { ToastContainer, toast } from "react-toastify";
import NavbarHome from "./components/header/navbar";
import Table from "./components/table/table";
import Card from "./components/cards/cards";

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
    <div className="bg-gray-400 h-fit ">
      <NavbarHome />
      <div className="grid  grid-cols-1 md:grid-cols-3 gap-4 h-screen w-screen p-4 grid-flow-row-dense">
        {/* main cards herer */}
        <div className="bg-green-100 rounded-xl bg-transparent w-auto"><Card/></div>
        <div className="bg-green-100 rounded-xl bg-transparent w-auto" ><Card/></div>
        <div className="bg-green-100 rounded-xl bg-transparent w-auto"><Card/></div>
        <div className="bg-green-100 md:col-span-2 row-span-3 rounded-xl h-auto">c4</div>
        <div className="bg-green-100 row-span-3 rounded-xl bg-transparent overflow-auto h-fit md:h-full"><Table data={null}/></div>

      </div>
      <ToastContainer />
    </div>
    // <div className="">
    //   {/* <div className="flex w-full justify-between bg-slate-600 ">
    //     <h1 className="text-3xl font-bold">Dashboard</h1>
    //     <div className="">
    //       <button onClick={() => {}}> Refresh </button>
    //       <button onClick={() => open()} disabled={!ready}>
    //         Link account
    //       </button>
    //     </div>
    //   </div> */}
    // </div>
  );
};
export default App;
