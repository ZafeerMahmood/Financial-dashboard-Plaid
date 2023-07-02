import React from "react";
import Loader from "../loader/loder";
import {  useEffect,useState } from "react";


/**
 * Card component to display data.
 * @param {Object} data - The data object to be displayed in the card.
 * @object {type}  { accounts: [{}] , total_balance: , total_current_balance:   }
 * @returns {JSX.Element} - The JSX element representing the card.
 */
export default function BalanceCard({ data }) {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    if(data){
      setTimeout(() => {
      setLoading(false)
      }, 2000);
    }
  },[data])

  return (
    (loading) ?
     (<div className="w-full h-full flex justify-center p-4  border rounded-lg shadow py-16 md:px-16 md:py-24 bg-gray-800 border-gray-700">
      <Loader /> </div>) :
      (<div className="w-full h-full p-4 bg-white border border-gray-200 rounded-lg shadow py-16 md:px-16 md:py-24 dark:bg-gray-800 dark:border-gray-700">
      
      <h5 className="mb-4 text-xl font-medium text-white">
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
                    <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">available available in current $ {data.total_current_balance}</span>
                </li>
                
            </ul>
    </div>)
  );
}
