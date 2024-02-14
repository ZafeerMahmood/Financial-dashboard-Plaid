# Financial Dashboard

built using React, tailwind CSS and Chart.js
use the backend for [backend flask service](https://github.com/ZafeerMahmood/plaid_project_backend)

## setup

- 1. clone the server.

```sh
py server.py
```

- 2. run frontend

```sh
git clone https://github.com/ZafeerMahmood/plaid_project_frontend.git
npm install
npm run dev
```

## Working

uses `plaid-react-link` to link to bank that sends a public token to the server that exchanges it for a access token to access the user
financial information.

first it sends request to fetch a link token that plaid uses to connect.

```js
  const res = await fetch("/api/linkToken", {
        method: "GET",
      });
```

then opens the plaid cdn to link it with a Bank.

```js
 const { open, ready } = usePlaidLink({
    token: linkToken,
    onSuccess: async (public_token, metadata) => {
      // send the public token to your server and exchange it for a access token.
    }
  })
```

## Screen Shot

![Screenshot_1](https://raw.githubusercontent.com/ZafeerMahmood/Financial_dashboard/main/screenshots/ss1.png)
