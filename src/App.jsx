import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import { usePlaidLink } from "react-plaid-link";
import { getExpireDate } from "./components/components";
import { useCookies } from "react-cookie";
import {toast} from 'react-toastify';

const App = () => {
  const [cookies, setCookie] = useCookies(['Email']);
  const [linkToken, setLinkToken] = useState(null);
  const email = useRef();
  const generateToken = async () => {
    const token = cookies.token
    if (token) {
      setLinkToken(token);
      return;
    } else {
        const response = await fetch("/api/linkToken", {
          method: "GET",
        });
        const data = await response.json();
      setCookie('token',data.link_token, { path: '/' ,expires: getExpireDate()});
      setLinkToken(data.link_token);
    }
  };

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
      console.log(email,'inside Onsuccess');
      const id = metadata.institution.institution_id;
      const response = await fetch("/api/accounts", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        },
        body: `email=${email.current}`,
      })

      const data = await response.json();
      if(Object.keys(data).length!==0){
        console.log('inside if')
        data.forEach(data => {
          if(data===id){
            console.log('account already linked')
            toast('Account already linked');
            return;
          }else{
            fetch("/api/setAccessToken", {
              method: "POST",
              headers: {
                  "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
                },
              body: `public_token=${public_token}&email=${email.current}`,
            }); 
          }}) 
        }
        else {
        fetch("/api/setAccessToken", {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
                  },
                body: `public_token=${public_token}&email=${email.current}`,
              }); 
        }         
    },//End of onSuccessFunction
  });//End of UsePlaidLinkFunction

  return (
    <div className="App">
      <button onClick={() => open()} disabled={!ready}>
        Link account
      </button>
    </div>
  );
};
export default App;
