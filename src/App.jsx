import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import { usePlaidLink } from "react-plaid-link";
import {getExpireDate } from "./components/components";
import {useCookies} from 'react-cookie'

const App = () => {

  const [cookies, setCookie] = useCookies(['Email']);
  const [linkToken, setLinkToken] = useState(null);
  const [email,setEmail] = useState(null);
  
  const generateToken = async () => {
    const item = localStorage.getItem("token");
    if (item) {

      setLinkToken(JSON.parse(item).value.link_token);
      return;

    } else {
        const response = await fetch("api/linkToken", {
          method: "GET",
        });
       
        const data = await response.json();
        localStorage.setItem( "token",JSON.stringify({
            value: data,
            expires: getExpireDate(),
          })
        );

      setLinkToken(data.link_token);
    }
  };

  useEffect(() => {
    generateToken();
  }, []);

  const { open, ready } = usePlaidLink({
    token: linkToken,
    onSuccess: (public_token) => {
      fetch("/api/setAccessToken", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        },
        body: `public_token=${public_token}&email=${cookies.email}`,
      }).then((res) => {
        console.log(res.body, "Token set successfully");
      });
    },
  });

  return (
    <div className="App">
      {/* <button onClick={() => open()} disabled={!ready}>
        Link account
      </button> */}
    </div>
  );
};
export default App;
