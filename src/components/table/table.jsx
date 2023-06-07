import React from "react";

export default function Table({ data }) {
  const list = [
    {
      amount: 5.4,
      category: ["Travel", "Taxi"],
      date: "2023-04-30",
      name: "Uber",
    },
    {
      amount: -500.0,
      category: ["Travel", "Airlines and Aviation Services"],
      date: "2023-04-28",
      name: "United Airlines",
    },
    {
      amount: 12.0,
      category: ["Food and Drink", "Restaurants", "Fast Food"],
      date: "2023-04-27",
      name: "McDonald's",
    },
    {
      amount: 4.33,
      category: ["Food and Drink", "Restaurants", "Coffee Shop"],
      date: "2023-04-27",
      name: "Starbucks",
    },
    {
      amount: 89.4,
      category: ["Food and Drink", "Restaurants"],
      date: "2023-04-26",
      name: null,
    },
    {
      amount: 6.33,
      category: ["Travel", "Taxi"],
      date: "2023-04-13",
      name: "Uber",
    },
    {
      amount: 25.0,
      category: ["Payment", "Credit Card"],
      date: "2023-04-30",
      name: null,
    },
    {
      amount: -4.22,
      category: ["Transfer", "Credit"],
      date: "2023-04-25",
      name: null,
    },
    {
      amount: 5.4,
      category: ["Travel", "Taxi"],
      date: "2023-03-31",
      name: "Uber",
    },
    {
      amount: -500.0,
      category: ["Travel", "Airlines and Aviation Services"],
      date: "2023-03-29",
      name: "United Airlines",
    },
    {
      amount: 12.0,
      category: ["Food and Drink", "Restaurants", "Fast Food"],
      date: "2023-03-28",
      name: "McDonald's",
    },
    {
      amount: 4.33,
      category: ["Food and Drink", "Restaurants", "Coffee Shop"],
      date: "2023-03-28",
      name: "Starbucks",
    },
    {
      amount: 89.4,
      category: ["Food and Drink", "Restaurants"],
      date: "2023-03-27",
      name: null,
    },
    {
      amount: 6.33,
      category: ["Travel", "Taxi"],
      date: "2023-03-14",
      name: "Uber",
    },
    {
      amount: 5.4,
      category: ["Travel", "Taxi"],
      date: "2023-03-01",
      name: "Uber",
    },
  ];

  //   const list = d.sort((a, b) => new Date(b.date) - new Date(a.date));
  //   console.log(l);

  return (
    // <div className="bg-black">
    //   <table class="table-fixed text-bold">
    //     <thead>
    //       <tr>
    //         <th>Name</th>
    //         <th>Amount</th>
    //         <th>Cataory</th>
    //       </tr>
    //     </thead>
    //     <tbody>
    //       {list.map((list,index) => {
    //         return (
    //           <tr key={index}>
    //             <td>{list.name}</td>
    //             <td>{list.amount}</td>
    //             <td>{list.category[0]}</td>
    //             <td>{list.date}</td>
    //           </tr>
    //         );
    //       })}
    //     </tbody>
    //   </table>
    // </div>
    <div class="relative overflow-auto shadow-md sm:rounded-lg">
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="px-6 py-3">
              Name
            </th>
            <th scope="col" class="px-6 py-3">
              Date
            </th>
            <th scope="col" class="px-6 py-3">
              Category
            </th>
            <th scope="col" class="px-6 py-3">
              Amount
            </th>
            <th scope="col" class="px-6 py-3">
              <span class="sr-only">Edit</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {list.map((list, index) => {
            return (
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                {list.name ? (
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {list.name}
                  </th>
                ) : (
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    None
                  </th>
                )}

                <td class="px-6 py-4">{list.date}</td>
                <td class="px-6 py-4">{list.category[0]}</td>
                <td class="px-6 py-4">${list.amount}</td>
                <td class="px-6 py-4 text-right"></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
