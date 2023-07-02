import React from "react";
import Loader from "../loader/loder";
import {  useEffect,useState } from "react";


/**
 * PatternCard component to display spending summary.
 * @param {Array} data - The data array representing spending patterns.
 * @Array {Type} [{
        "amount": 89.4,
        "category": [
            "Food and Drink",
            "Restaurants"
        ],
        "change_type": "no change",
        "percentage_change": 0.0
    }] 
 * @returns {JSX.Element} - The JSX element representing the pattern card.
 */
export default function PatternCard({ data }) {

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
        Spending Summary :
      </h5>
      <div className="flex items-baseline text-gray-900 dark:text-white">
      </div>
      <ul role="list" className="space-y-5 my-7">
        {data.map((item, index) => {
        return (
          <li className="flex space-x-3" key={index}>
            {(item.change_type === 'increase') ? (
              <svg aria-hidden="true" className="flex-shrink-0 w-5 h-5 text-green-600 dark:text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            ) :(null)}
            {(item.change_type === 'decreases') ? (
              <svg aria-hidden="true" className="flex-shrink-0 w-5 h-5 text-red-600 dark:text-red-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            ) :(null)}
            {(item.change_type ==='no change') ? (
              <svg aria-hidden="true" className="flex-shrink-0 w-5 h-5 text-gray-600 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            ) :(null)}
            <p className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
              <span className="text-base font-semibold leading-tight text-gray-500 dark:text-gray-200">{item.percentage_change}%</span>{" "}{item.change_type} on spending on
              <span className="text-base font-semibold leading-tight text-gray-500 dark:text-gray-200"> "{item.category.slice(-1)[0]}"</span>
            </p>
          </li>
        );
      })}
      </ul>
    </div>)
  );
}
