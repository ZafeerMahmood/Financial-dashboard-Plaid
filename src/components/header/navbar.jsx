import React, { useEffect, useRef, useState } from "react";
import { usePlaidLink } from "react-plaid-link";
import { getExpireDate} from '../components.js'
import { useCookies } from "react-cookie";
import { ToastContainer, toast } from "react-toastify";

export default function NavbarHome() {
  
  const [openNav, setOpenNav] = useState(false);
  const [moobileNav, setMobileNav] = useState(false);
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


  const onRefresh = async () => {
    const response = await fetch("/api/transactions/update", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      },
      body: `email=${email.current}`,
    });
    const data = await response.json();
    console.log(data);
    if (response.status === 200) {
      toast.success("Transactions Updated !", {});
      //reloade page to update the transactions
      //window.location.reload();
    }else{
      toast.error("Error Occured !", {});
    }
  }

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 786 && setOpenNav(false)
    );
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 786 && setMobileNav(false)
    );
  }, []);


  useEffect(() => {
    if(cookies.email){
      email.current = cookies.email;
    }
    else {
      setCookie('email','zafeer746@gmail.com', { path: '/' ,expires: getExpireDate()});
    }
    generateToken();
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
    <div className="mx-auto max-w-screen dark:bg-gray-800 dark:border-gray-700  py-2 px-4 lg:px-8 lg:py-4">
      <ToastContainer/>
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
        {/* LOGOHERE */}
        <div className="mr-4 cursor-pointer py-1.5 font-bold text-lg  text-white ">
          Dashboard
        </div>

        <div className="flex space-x-4">
          <button className="hidden bg-blue-500 lg:inline-block" onClick={() => open()} disabled={!ready}>
            <span>Link</span>
          </button>

          <button className="hidden bg-blue-500 lg:inline-block" onClick={()=>onRefresh()}>
            <span>Refresh</span>
          </button>
        </div>

        <div
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => {
            setOpenNav(!openNav), setMobileNav(!moobileNav);
          }}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </div>
      </div>
      {moobileNav ? (
        <div className="flex flex-col space-y-2">
          <button className="bg-blue-500" onClick={() => open()} disabled={!ready}>
            <span>Link</span>
          </button>
          <button className="bg-blue-500" onClick={()=>onRefresh()}>
            <span>Refresh</span>
          </button>
        </div>
      ) : null}
    </div>
  );
}
