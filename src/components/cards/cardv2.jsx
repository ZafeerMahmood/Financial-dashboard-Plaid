import React from "react";

export default function Cardv2({ balance }) {
  const data = [
    {
      amount: 89.4,
      category: ["Food and Drink", "Restaurants"],
      change_type: "no change",
      percentage_change: 0.0,
    },
    {
      amount: 25.0,
      category: ["Payment", "Credit Card"],
      change_type: "increase",
      percentage_change: 2.0,
    },
    {
      amount: 12.0,
      category: ["Food and Drink", "Restaurants", "Fast Food"],
      change_type: "decreases",
      percentage_change: 74,
    },
    {
      amount: 11.73,
      category: ["Travel", "Taxi"],
      change_type: "no change",
      percentage_change: 0.0,
    },
  ];

  return (
    <div className="w-full h-full p-4 bg-white border border-gray-200 rounded-lg shadow py-16 md:px-16 md:py-24 dark:bg-gray-800 dark:border-gray-700">
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
            {(item.change_type === 'no change') ? (
              <svg aria-hidden="true" className="flex-shrink-0 w-5 h-5 text-gray-600 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            ) :(null)}
            <span className="text-base font-semibold leading-tight text-gray-500 dark:text-gray-200">{item.percentage_change}%</span>
            <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">{item.change_type} on spending on</span>
            <span className="text-base font-semibold leading-tight text-gray-500 dark:text-gray-200">"{item.category.slice(-1)[0]}"</span>
          </li>
        );
      })}
      </ul>

    </div>
  );
}
