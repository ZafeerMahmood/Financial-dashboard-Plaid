import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import { usePlaidLink } from 'react-plaid-link';

const App = () => {


  const generateUid = () => {
    const uid = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    return uid;
  }

  const [linkToken, setLinkToken] = useState(null)
  const uid =useRef();
  const [auth,setAuth]=useState(false);

  const generateToken = async () => {
    uid.current=generateUid();
    
    //set uid to local storage with expiration time of 1 hour

    const ext = new Date().getTime() + 1000 * 60 * 60 * 1;
    localStorage.setItem('uid', JSON.stringify({
      value: uid.current,
      expires: ext,
    }));
    const item=localStorage.getItem('token');

    if(item){
        setLinkToken(JSON.parse(item).value.link_token);
        return;
    }
    
    const response = await fetch('api/create_link_token', {
      method: 'GET',
    });
    const expirationTime = new Date().getTime() + 1000 * 60 * 60 * 4;
    const data = await response.json();
    localStorage.setItem('token', JSON.stringify({
      value: data,
      expires: expirationTime,
    }));

    setLinkToken(data.link_token);
  }

  useEffect(() => {
    generateToken();
    let a =localStorage.getItem('uid');
    uid.current=JSON.parse(a).value;
  }, []);

 
  const { open,ready } = usePlaidLink({
    token: linkToken,
    onSuccess:((public_token) => {
      fetch("/api/set_access_token", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        },
        body: `public_token=${public_token}&uid=${uid.current}`,
      });
    }),
  });


  return (
    <div className='App'>
      <button onClick={() => open()} disabled={!ready}>
        Link account
      </button>
    </div>
  );
};
export default App;