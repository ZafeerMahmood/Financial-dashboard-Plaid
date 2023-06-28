import React from "react";



/**
 * Table component for displaying a list of items in a table format.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {Array} props.data - The list of items to be displayed in the table.
 * @returns {JSX.Element} The JSX table component.
 */
export default function Table({ data }) {

      
/**
 * Sorts a list of items based on the date property in descending order.
 *
 * @param {Array} list - The list of items to be sorted.
 * @returns {Array} The sorted list in descending order based on the date.
 */



// const sortedList = data.sort((a, b) => {
//   return new Date(b.date) - new Date(a.date);
// });


    return (
    <div class="relative rounded-lg bg-gray-700">
        <h5 className="mb-4 w-full text-xl p-2 pl-4 font-medium bg-gray-800 text-gray-500 dark:text-white  border-b-2 border-gray-800">
            Transaction History :
        </h5>

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
          {data.map((list, index) => {
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
