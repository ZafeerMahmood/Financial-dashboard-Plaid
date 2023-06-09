import React from "react";

export default function Card({ balace }) {
  const data = {
    accounts: [
      {
        account_id: "Z4a1laPeaZTlZdXjD6j7fZV4rJyG7MCeE6RGy",
        balances: {
          available: 100.0,
          current: 110.0,
          iso_currency_code: "USD",
          limit: null,
          unofficial_currency_code: null,
        },
        name: "Plaid Checking",
        percentage: 33.33333333333333,
      },
      {
        account_id: "M8J3WJyoJzIVXAZevQelcE9PKreGl3cLWJl1J",
        balances: {
          available: 200.0,
          current: 210.0,
          iso_currency_code: "USD",
          limit: null,
          unofficial_currency_code: null,
        },
        name: "Plaid Saving",
        percentage: 66.66666666666666,
      },
    ],
    total_balance: 300.0,
  };

  return (
    <div className="w-full h-full p-4 bg-white border border-gray-200 rounded-lg shadow py-16 md:px-16 md:py-52 dark:bg-gray-800 dark:border-gray-700">
      <h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">
        Available Balance :
      </h5>
      <div className="flex items-baseline text-gray-900 dark:text-white">
        <span className="text-3xl font-semibold">$</span>
        <span className="text-5xl font-extrabold tracking-tight">{data.total_balance}</span>
        <span className="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400"></span>
      </div>
      <ul role="list" className="space-y-5 my-7">
                <li className="flex space-x-3">
                    <svg aria-hidden="true" className="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                    <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">available available in current $ {data.accounts[0].balances.available}</span>
                </li>
                <li className="flex space-x-3">
                    <svg aria-hidden="true" className="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                    <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">available in savings $ {data.accounts[1].balances.available}</span>
                </li>
            </ul>
      {/* <button type="button" className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center">Choose plan</button> */}
    </div>
  );
}
