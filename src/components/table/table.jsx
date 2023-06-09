import React from "react";

export default function Table({ data }) {
  const list = [
    {
      "amount": 5.4,
      "category": [
          "Travel",
          "Taxi"
      ],
      "date": "2023-04-30",
      "name": "Uber"
  },
  {
      "amount": -500.0,
      "category": [
          "Travel",
          "Airlines and Aviation Services"
      ],
      "date": "2023-04-28",
      "name": "United Airlines"
  },
  {
      "amount": 12.0,
      "category": [
          "Food and Drink",
          "Restaurants",
          "Fast Food"
      ],
      "date": "2023-04-27",
      "name": "McDonald's"
  },
  {
      "amount": 4.33,
      "category": [
          "Food and Drink",
          "Restaurants",
          "Coffee Shop"
      ],
      "date": "2023-04-27",
      "name": "Starbucks"
  },
  {
      "amount": 89.4,
      "category": [
          "Food and Drink",
          "Restaurants"
      ],
      "date": "2023-04-26",
      "name": null
  },
  {
      "amount": 6.33,
      "category": [
          "Travel",
          "Taxi"
      ],
      "date": "2023-04-13",
      "name": "Uber"
  },
  {
      "amount": 25.0,
      "category": [
          "Payment",
          "Credit Card"
      ],
      "date": "2023-04-30",
      "name": null
  },
  {
      "amount": -4.22,
      "category": [
          "Transfer",
          "Credit"
      ],
      "date": "2023-04-25",
      "name": null
  },
  {
      "amount": 5.4,
      "category": [
          "Travel",
          "Taxi"
      ],
      "date": "2023-03-31",
      "name": "Uber"
  },
  {
      "amount": -500.0,
      "category": [
          "Travel",
          "Airlines and Aviation Services"
      ],
      "date": "2023-03-29",
      "name": "United Airlines"
  },
  {
      "amount": 12.0,
      "category": [
          "Food and Drink",
          "Restaurants",
          "Fast Food"
      ],
      "date": "2023-03-28",
      "name": "McDonald's"
  },
  {
      "amount": 4.33,
      "category": [
          "Food and Drink",
          "Restaurants",
          "Coffee Shop"
      ],
      "date": "2023-03-28",
      "name": "Starbucks"
  },
  {
      "amount": 89.4,
      "category": [
          "Food and Drink",
          "Restaurants"
      ],
      "date": "2023-03-27",
      "name": null
  },
  {
      "amount": 6.33,
      "category": [
          "Travel",
          "Taxi"
      ],
      "date": "2023-03-14",
      "name": "Uber"
  },
  {
      "amount": 5.4,
      "category": [
          "Travel",
          "Taxi"
      ],
      "date": "2023-03-01",
      "name": "Uber"
  },
  {
      "amount": -500.0,
      "category": [
          "Travel",
          "Airlines and Aviation Services"
      ],
      "date": "2023-02-27",
      "name": "United Airlines"
  },
  {
      "amount": 12.0,
      "category": [
          "Food and Drink",
          "Restaurants",
          "Fast Food"
      ],
      "date": "2023-02-26",
      "name": "McDonald's"
  },
  {
      "amount": 4.33,
      "category": [
          "Food and Drink",
          "Restaurants",
          "Coffee Shop"
      ],
      "date": "2023-02-26",
      "name": "Starbucks"
  },
  {
      "amount": 89.4,
      "category": [
          "Food and Drink",
          "Restaurants"
      ],
      "date": "2023-02-25",
      "name": null
  },
  {
      "amount": 6.33,
      "category": [
          "Travel",
          "Taxi"
      ],
      "date": "2023-02-12",
      "name": "Uber"
  },
  {
      "amount": 5.4,
      "category": [
          "Travel",
          "Taxi"
      ],
      "date": "2023-01-30",
      "name": "Uber"
  },
  {
      "amount": -500.0,
      "category": [
          "Travel",
          "Airlines and Aviation Services"
      ],
      "date": "2023-01-28",
      "name": "United Airlines"
  },
  {
      "amount": 12.0,
      "category": [
          "Food and Drink",
          "Restaurants",
          "Fast Food"
      ],
      "date": "2023-01-27",
      "name": "McDonald's"
  },
  {
      "amount": 4.33,
      "category": [
          "Food and Drink",
          "Restaurants",
          "Coffee Shop"
      ],
      "date": "2023-01-27",
      "name": "Starbucks"
  },
  {
      "amount": 89.4,
      "category": [
          "Food and Drink",
          "Restaurants"
      ],
      "date": "2023-01-26",
      "name": null
  },
  {
      "amount": 6.33,
      "category": [
          "Travel",
          "Taxi"
      ],
      "date": "2023-01-13",
      "name": "Uber"
  },
  {
      "amount": 5.4,
      "category": [
          "Travel",
          "Taxi"
      ],
      "date": "2022-12-31",
      "name": "Uber"
  },
  {
      "amount": -500.0,
      "category": [
          "Travel",
          "Airlines and Aviation Services"
      ],
      "date": "2022-12-29",
      "name": "United Airlines"
  },
  {
      "amount": 12.0,
      "category": [
          "Food and Drink",
          "Restaurants",
          "Fast Food"
      ],
      "date": "2022-12-28",
      "name": "McDonald's"
  },
  {
      "amount": 4.33,
      "category": [
          "Food and Drink",
          "Restaurants",
          "Coffee Shop"
      ],
      "date": "2022-12-28",
      "name": "Starbucks"
  },
  {
      "amount": 89.4,
      "category": [
          "Food and Drink",
          "Restaurants"
      ],
      "date": "2022-12-27",
      "name": null
  },
  {
      "amount": 6.33,
      "category": [
          "Travel",
          "Taxi"
      ],
      "date": "2022-12-14",
      "name": "Uber"
  },
  {
      "amount": 5.4,
      "category": [
          "Travel",
          "Taxi"
      ],
      "date": "2022-12-01",
      "name": "Uber"
  },
  {
      "amount": -500.0,
      "category": [
          "Travel",
          "Airlines and Aviation Services"
      ],
      "date": "2022-11-29",
      "name": "United Airlines"
  },
  {
      "amount": 12.0,
      "category": [
          "Food and Drink",
          "Restaurants",
          "Fast Food"
      ],
      "date": "2022-11-28",
      "name": "McDonald's"
  },
  {
      "amount": 4.33,
      "category": [
          "Food and Drink",
          "Restaurants",
          "Coffee Shop"
      ],
      "date": "2022-11-28",
      "name": "Starbucks"
  },
  {
      "amount": 89.4,
      "category": [
          "Food and Drink",
          "Restaurants"
      ],
      "date": "2022-11-27",
      "name": null
  },
  {
      "amount": 6.33,
      "category": [
          "Travel",
          "Taxi"
      ],
      "date": "2022-11-14",
      "name": "Uber"
  },
  {
      "amount": 5.4,
      "category": [
          "Travel",
          "Taxi"
      ],
      "date": "2022-11-01",
      "name": "Uber"
  },
  {
      "amount": -500.0,
      "category": [
          "Travel",
          "Airlines and Aviation Services"
      ],
      "date": "2022-10-30",
      "name": "United Airlines"
  },
  {
      "amount": 12.0,
      "category": [
          "Food and Drink",
          "Restaurants",
          "Fast Food"
      ],
      "date": "2022-10-29",
      "name": "McDonald's"
  },
  {
      "amount": 4.33,
      "category": [
          "Food and Drink",
          "Restaurants",
          "Coffee Shop"
      ],
      "date": "2022-10-29",
      "name": "Starbucks"
  },
  {
      "amount": 89.4,
      "category": [
          "Food and Drink",
          "Restaurants"
      ],
      "date": "2022-10-28",
      "name": null
  },
  {
      "amount": 6.33,
      "category": [
          "Travel",
          "Taxi"
      ],
      "date": "2022-10-15",
      "name": "Uber"
  },
  {
      "amount": 5.4,
      "category": [
          "Travel",
          "Taxi"
      ],
      "date": "2022-10-02",
      "name": "Uber"
  },
  {
      "amount": -500.0,
      "category": [
          "Travel",
          "Airlines and Aviation Services"
      ],
      "date": "2022-09-30",
      "name": "United Airlines"
  },
  {
      "amount": 12.0,
      "category": [
          "Food and Drink",
          "Restaurants",
          "Fast Food"
      ],
      "date": "2022-09-29",
      "name": "McDonald's"
  },
  {
      "amount": 4.33,
      "category": [
          "Food and Drink",
          "Restaurants",
          "Coffee Shop"
      ],
      "date": "2022-09-29",
      "name": "Starbucks"
  },
  {
      "amount": 89.4,
      "category": [
          "Food and Drink",
          "Restaurants"
      ],
      "date": "2022-09-28",
      "name": null
  },
  {
      "amount": 6.33,
      "category": [
          "Travel",
          "Taxi"
      ],
      "date": "2022-09-15",
      "name": "Uber"
  },
  {
      "amount": 5.4,
      "category": [
          "Travel",
          "Taxi"
      ],
      "date": "2022-09-02",
      "name": "Uber"
  },
  {
      "amount": -500.0,
      "category": [
          "Travel",
          "Airlines and Aviation Services"
      ],
      "date": "2022-08-31",
      "name": "United Airlines"
  },
  {
      "amount": 12.0,
      "category": [
          "Food and Drink",
          "Restaurants",
          "Fast Food"
      ],
      "date": "2022-08-30",
      "name": "McDonald's"
  },
  {
      "amount": 4.33,
      "category": [
          "Food and Drink",
          "Restaurants",
          "Coffee Shop"
      ],
      "date": "2022-08-30",
      "name": "Starbucks"
  },
  {
      "amount": 89.4,
      "category": [
          "Food and Drink",
          "Restaurants"
      ],
      "date": "2022-08-29",
      "name": null
  },
  {
      "amount": 6.33,
      "category": [
          "Travel",
          "Taxi"
      ],
      "date": "2022-08-16",
      "name": "Uber"
  },
  {
      "amount": 5.4,
      "category": [
          "Travel",
          "Taxi"
      ],
      "date": "2022-08-03",
      "name": "Uber"
  },
  {
      "amount": -500.0,
      "category": [
          "Travel",
          "Airlines and Aviation Services"
      ],
      "date": "2022-08-01",
      "name": "United Airlines"
  },
  {
      "amount": 12.0,
      "category": [
          "Food and Drink",
          "Restaurants",
          "Fast Food"
      ],
      "date": "2022-07-31",
      "name": "McDonald's"
  },
  {
      "amount": 4.33,
      "category": [
          "Food and Drink",
          "Restaurants",
          "Coffee Shop"
      ],
      "date": "2022-07-31",
      "name": "Starbucks"
  },
  {
      "amount": 89.4,
      "category": [
          "Food and Drink",
          "Restaurants"
      ],
      "date": "2022-07-30",
      "name": null
  },
  {
      "amount": 6.33,
      "category": [
          "Travel",
          "Taxi"
      ],
      "date": "2022-07-17",
      "name": "Uber"
  },
  {
      "amount": 5.4,
      "category": [
          "Travel",
          "Taxi"
      ],
      "date": "2022-07-04",
      "name": "Uber"
  },
  {
      "amount": -500.0,
      "category": [
          "Travel",
          "Airlines and Aviation Services"
      ],
      "date": "2022-07-02",
      "name": "United Airlines"
  },
  {
      "amount": 12.0,
      "category": [
          "Food and Drink",
          "Restaurants",
          "Fast Food"
      ],
      "date": "2022-07-01",
      "name": "McDonald's"
  },
  {
      "amount": 4.33,
      "category": [
          "Food and Drink",
          "Restaurants",
          "Coffee Shop"
      ],
      "date": "2022-07-01",
      "name": "Starbucks"
  },
  {
      "amount": 89.4,
      "category": [
          "Food and Drink",
          "Restaurants"
      ],
      "date": "2022-06-30",
      "name": null
  },
  {
      "amount": 6.33,
      "category": [
          "Travel",
          "Taxi"
      ],
      "date": "2022-06-17",
      "name": "Uber"
  },
  {
      "amount": 5.4,
      "category": [
          "Travel",
          "Taxi"
      ],
      "date": "2022-06-04",
      "name": "Uber"
  },
  {
      "amount": -500.0,
      "category": [
          "Travel",
          "Airlines and Aviation Services"
      ],
      "date": "2022-06-02",
      "name": "United Airlines"
  },
  {
      "amount": 12.0,
      "category": [
          "Food and Drink",
          "Restaurants",
          "Fast Food"
      ],
      "date": "2022-06-01",
      "name": "McDonald's"
  },
  {
      "amount": 4.33,
      "category": [
          "Food and Drink",
          "Restaurants",
          "Coffee Shop"
      ],
      "date": "2022-06-01",
      "name": "Starbucks"
  },
  {
      "amount": 89.4,
      "category": [
          "Food and Drink",
          "Restaurants"
      ],
      "date": "2022-05-31",
      "name": null
  },
  {
      "amount": 6.33,
      "category": [
          "Travel",
          "Taxi"
      ],
      "date": "2022-05-18",
      "name": "Uber"
  },
  {
      "amount": 5.4,
      "category": [
          "Travel",
          "Taxi"
      ],
      "date": "2022-05-05",
      "name": "Uber"
  },
  {
      "amount": -500.0,
      "category": [
          "Travel",
          "Airlines and Aviation Services"
      ],
      "date": "2022-05-03",
      "name": "United Airlines"
  },
  {
      "amount": 12.0,
      "category": [
          "Food and Drink",
          "Restaurants",
          "Fast Food"
      ],
      "date": "2022-05-02",
      "name": "McDonald's"
  },
  {
      "amount": 4.33,
      "category": [
          "Food and Drink",
          "Restaurants",
          "Coffee Shop"
      ],
      "date": "2022-05-02",
      "name": "Starbucks"
  },
  {
      "amount": 89.4,
      "category": [
          "Food and Drink",
          "Restaurants"
      ],
      "date": "2022-05-01",
      "name": null
  },
  {
      "amount": 6.33,
      "category": [
          "Travel",
          "Taxi"
      ],
      "date": "2022-04-18",
      "name": "Uber"
  },
  {
      "amount": 5.4,
      "category": [
          "Travel",
          "Taxi"
      ],
      "date": "2022-04-05",
      "name": "Uber"
  },
  {
      "amount": -500.0,
      "category": [
          "Travel",
          "Airlines and Aviation Services"
      ],
      "date": "2022-04-03",
      "name": "United Airlines"
  },
  {
      "amount": 12.0,
      "category": [
          "Food and Drink",
          "Restaurants",
          "Fast Food"
      ],
      "date": "2022-04-02",
      "name": "McDonald's"
  },
  {
      "amount": 4.33,
      "category": [
          "Food and Drink",
          "Restaurants",
          "Coffee Shop"
      ],
      "date": "2022-04-02",
      "name": "Starbucks"
  },
  {
      "amount": 89.4,
      "category": [
          "Food and Drink",
          "Restaurants"
      ],
      "date": "2022-04-01",
      "name": null
  },
  {
      "amount": 6.33,
      "category": [
          "Travel",
          "Taxi"
      ],
      "date": "2022-03-19",
      "name": "Uber"
  },
  {
      "amount": 5.4,
      "category": [
          "Travel",
          "Taxi"
      ],
      "date": "2022-03-06",
      "name": "Uber"
  },
  {
      "amount": -500.0,
      "category": [
          "Travel",
          "Airlines and Aviation Services"
      ],
      "date": "2022-03-04",
      "name": "United Airlines"
  },
  {
      "amount": 12.0,
      "category": [
          "Food and Drink",
          "Restaurants",
          "Fast Food"
      ],
      "date": "2022-03-03",
      "name": "McDonald's"
  },
  {
      "amount": 4.33,
      "category": [
          "Food and Drink",
          "Restaurants",
          "Coffee Shop"
      ],
      "date": "2022-03-03",
      "name": "Starbucks"
  },
  {
      "amount": 89.4,
      "category": [
          "Food and Drink",
          "Restaurants"
      ],
      "date": "2022-03-02",
      "name": null
  },
  {
      "amount": 6.33,
      "category": [
          "Travel",
          "Taxi"
      ],
      "date": "2022-02-17",
      "name": "Uber"
  },
  {
      "amount": 5.4,
      "category": [
          "Travel",
          "Taxi"
      ],
      "date": "2022-02-04",
      "name": "Uber"
  },
  {
      "amount": -500.0,
      "category": [
          "Travel",
          "Airlines and Aviation Services"
      ],
      "date": "2022-02-02",
      "name": "United Airlines"
  },
  {
      "amount": 12.0,
      "category": [
          "Food and Drink",
          "Restaurants",
          "Fast Food"
      ],
      "date": "2022-02-01",
      "name": "McDonald's"
  },
  {
      "amount": 4.33,
      "category": [
          "Food and Drink",
          "Restaurants",
          "Coffee Shop"
      ],
      "date": "2022-02-01",
      "name": "Starbucks"
  },
  {
      "amount": 89.4,
      "category": [
          "Food and Drink",
          "Restaurants"
      ],
      "date": "2022-01-31",
      "name": null
  },
  {
      "amount": 6.33,
      "category": [
          "Travel",
          "Taxi"
      ],
      "date": "2022-01-18",
      "name": "Uber"
  },
  {
      "amount": 5.4,
      "category": [
          "Travel",
          "Taxi"
      ],
      "date": "2022-01-05",
      "name": "Uber"
  },
  {
      "amount": -500.0,
      "category": [
          "Travel",
          "Airlines and Aviation Services"
      ],
      "date": "2022-01-03",
      "name": "United Airlines"
  },
  {
      "amount": 12.0,
      "category": [
          "Food and Drink",
          "Restaurants",
          "Fast Food"
      ],
      "date": "2022-01-02",
      "name": "McDonald's"
  },
  {
      "amount": 4.33,
      "category": [
          "Food and Drink",
          "Restaurants",
          "Coffee Shop"
      ],
      "date": "2022-01-02",
      "name": "Starbucks"
  },
  {
      "amount": 89.4,
      "category": [
          "Food and Drink",
          "Restaurants"
      ],
      "date": "2022-01-01",
      "name": null
  },
  {
      "amount": 6.33,
      "category": [
          "Travel",
          "Taxi"
      ],
      "date": "2021-12-19",
      "name": "Uber"
  },
  {
      "amount": 5.4,
      "category": [
          "Travel",
          "Taxi"
      ],
      "date": "2021-12-06",
      "name": "Uber"
  },
  {
      "amount": -500.0,
      "category": [
          "Travel",
          "Airlines and Aviation Services"
      ],
      "date": "2021-12-04",
      "name": "United Airlines"
  },
  {
      "amount": 12.0,
      "category": [
          "Food and Drink",
          "Restaurants",
          "Fast Food"
      ],
      "date": "2021-12-03",
      "name": "McDonald's"
  },
  {
      "amount": 4.33,
      "category": [
          "Food and Drink",
          "Restaurants",
          "Coffee Shop"
      ],
      "date": "2021-12-03",
      "name": "Starbucks"
  },
  {
      "amount": 89.4,
      "category": [
          "Food and Drink",
          "Restaurants"
      ],
      "date": "2021-12-02",
      "name": null
  },
  {
      "amount": 6.33,
      "category": [
          "Travel",
          "Taxi"
      ],
      "date": "2021-11-19",
      "name": "Uber"
  },
  {
      "amount": 5.4,
      "category": [
          "Travel",
          "Taxi"
      ],
      "date": "2021-11-06",
      "name": "Uber"
  },
  {
      "amount": -500.0,
      "category": [
          "Travel",
          "Airlines and Aviation Services"
      ],
      "date": "2021-11-04",
      "name": "United Airlines"
  },
  {
      "amount": 12.0,
      "category": [
          "Food and Drink",
          "Restaurants",
          "Fast Food"
      ],
      "date": "2021-11-03",
      "name": "McDonald's"
  },
  {
      "amount": 4.33,
      "category": [
          "Food and Drink",
          "Restaurants",
          "Coffee Shop"
      ],
      "date": "2021-11-03",
      "name": "Starbucks"
  },
  {
      "amount": 89.4,
      "category": [
          "Food and Drink",
          "Restaurants"
      ],
      "date": "2021-11-02",
      "name": null
  },
  {
      "amount": 6.33,
      "category": [
          "Travel",
          "Taxi"
      ],
      "date": "2021-10-20",
      "name": "Uber"
  },
  {
      "amount": 5.4,
      "category": [
          "Travel",
          "Taxi"
      ],
      "date": "2021-10-07",
      "name": "Uber"
  },
  {
      "amount": -500.0,
      "category": [
          "Travel",
          "Airlines and Aviation Services"
      ],
      "date": "2021-10-05",
      "name": "United Airlines"
  },
  {
      "amount": 12.0,
      "category": [
          "Food and Drink",
          "Restaurants",
          "Fast Food"
      ],
      "date": "2021-10-04",
      "name": "McDonald's"
  },
  {
      "amount": 4.33,
      "category": [
          "Food and Drink",
          "Restaurants",
          "Coffee Shop"
      ],
      "date": "2021-10-04",
      "name": "Starbucks"
  },
  {
      "amount": 89.4,
      "category": [
          "Food and Drink",
          "Restaurants"
      ],
      "date": "2021-10-03",
      "name": null
  },
  {
      "amount": 6.33,
      "category": [
          "Travel",
          "Taxi"
      ],
      "date": "2021-09-20",
      "name": "Uber"
  },
  {
      "amount": 5.4,
      "category": [
          "Travel",
          "Taxi"
      ],
      "date": "2021-09-07",
      "name": "Uber"
  },
  {
      "amount": -500.0,
      "category": [
          "Travel",
          "Airlines and Aviation Services"
      ],
      "date": "2021-09-05",
      "name": "United Airlines"
  },
  {
      "amount": 12.0,
      "category": [
          "Food and Drink",
          "Restaurants",
          "Fast Food"
      ],
      "date": "2021-09-04",
      "name": "McDonald's"
  },
  {
      "amount": 4.33,
      "category": [
          "Food and Drink",
          "Restaurants",
          "Coffee Shop"
      ],
      "date": "2021-09-04",
      "name": "Starbucks"
  },
  {
      "amount": 89.4,
      "category": [
          "Food and Drink",
          "Restaurants"
      ],
      "date": "2021-09-03",
      "name": null
  },
  {
      "amount": 6.33,
      "category": [
          "Travel",
          "Taxi"
      ],
      "date": "2021-08-21",
      "name": "Uber"
  },
  {
      "amount": 5.4,
      "category": [
          "Travel",
          "Taxi"
      ],
      "date": "2021-08-08",
      "name": "Uber"
  },
  {
      "amount": -500.0,
      "category": [
          "Travel",
          "Airlines and Aviation Services"
      ],
      "date": "2021-08-06",
      "name": "United Airlines"
  },
  {
      "amount": 12.0,
      "category": [
          "Food and Drink",
          "Restaurants",
          "Fast Food"
      ],
      "date": "2021-08-05",
      "name": "McDonald's"
  },
  {
      "amount": 4.33,
      "category": [
          "Food and Drink",
          "Restaurants",
          "Coffee Shop"
      ],
      "date": "2021-08-05",
      "name": "Starbucks"
  },
  {
      "amount": 89.4,
      "category": [
          "Food and Drink",
          "Restaurants"
      ],
      "date": "2021-08-04",
      "name": null
  },
  {
      "amount": 6.33,
      "category": [
          "Travel",
          "Taxi"
      ],
      "date": "2021-07-22",
      "name": "Uber"
  },
  {
      "amount": 5.4,
      "category": [
          "Travel",
          "Taxi"
      ],
      "date": "2021-07-09",
      "name": "Uber"
  },
  {
      "amount": -500.0,
      "category": [
          "Travel",
          "Airlines and Aviation Services"
      ],
      "date": "2021-07-07",
      "name": "United Airlines"
  },
  {
      "amount": 12.0,
      "category": [
          "Food and Drink",
          "Restaurants",
          "Fast Food"
      ],
      "date": "2021-07-06",
      "name": "McDonald's"
  },
  {
      "amount": 4.33,
      "category": [
          "Food and Drink",
          "Restaurants",
          "Coffee Shop"
      ],
      "date": "2021-07-06",
      "name": "Starbucks"
  },
  {
      "amount": 89.4,
      "category": [
          "Food and Drink",
          "Restaurants"
      ],
      "date": "2021-07-05",
      "name": null
  },
  {
      "amount": 6.33,
      "category": [
          "Travel",
          "Taxi"
      ],
      "date": "2021-06-22",
      "name": "Uber"
  },
  {
      "amount": 5.4,
      "category": [
          "Travel",
          "Taxi"
      ],
      "date": "2021-06-09",
      "name": "Uber"
  },
  {
      "amount": -500.0,
      "category": [
          "Travel",
          "Airlines and Aviation Services"
      ],
      "date": "2021-06-07",
      "name": "United Airlines"
  },
  {
      "amount": 12.0,
      "category": [
          "Food and Drink",
          "Restaurants",
          "Fast Food"
      ],
      "date": "2021-06-06",
      "name": "McDonald's"
  },
  {
      "amount": 4.33,
      "category": [
          "Food and Drink",
          "Restaurants",
          "Coffee Shop"
      ],
      "date": "2021-06-06",
      "name": "Starbucks"
  },
  {
      "amount": 89.4,
      "category": [
          "Food and Drink",
          "Restaurants"
      ],
      "date": "2021-06-05",
      "name": null
  },
  {
      "amount": 6.33,
      "category": [
          "Travel",
          "Taxi"
      ],
      "date": "2021-05-23",
      "name": "Uber"
  },
  {
      "amount": 25.0,
      "category": [
          "Payment",
          "Credit Card"
      ],
      "date": "2023-03-31",
      "name": null
  },
  {
      "amount": -4.22,
      "category": [
          "Transfer",
          "Credit"
      ],
      "date": "2023-03-26",
      "name": null
  },
  {
      "amount": 25.0,
      "category": [
          "Payment",
          "Credit Card"
      ],
      "date": "2023-03-01",
      "name": null
  },
  {
      "amount": -4.22,
      "category": [
          "Transfer",
          "Credit"
      ],
      "date": "2023-02-24",
      "name": null
  },
  {
      "amount": 25.0,
      "category": [
          "Payment",
          "Credit Card"
      ],
      "date": "2023-01-30",
      "name": null
  },
  {
      "amount": -4.22,
      "category": [
          "Transfer",
          "Credit"
      ],
      "date": "2023-01-25",
      "name": null
  },
  {
      "amount": 25.0,
      "category": [
          "Payment",
          "Credit Card"
      ],
      "date": "2022-12-31",
      "name": null
  },
  {
      "amount": -4.22,
      "category": [
          "Transfer",
          "Credit"
      ],
      "date": "2022-12-26",
      "name": null
  },
  {
      "amount": 25.0,
      "category": [
          "Payment",
          "Credit Card"
      ],
      "date": "2022-12-01",
      "name": null
  },
  {
      "amount": -4.22,
      "category": [
          "Transfer",
          "Credit"
      ],
      "date": "2022-11-26",
      "name": null
  },
  {
      "amount": 25.0,
      "category": [
          "Payment",
          "Credit Card"
      ],
      "date": "2022-11-01",
      "name": null
  },
  {
      "amount": -4.22,
      "category": [
          "Transfer",
          "Credit"
      ],
      "date": "2022-10-27",
      "name": null
  },
  {
      "amount": 25.0,
      "category": [
          "Payment",
          "Credit Card"
      ],
      "date": "2022-10-02",
      "name": null
  },
  {
      "amount": -4.22,
      "category": [
          "Transfer",
          "Credit"
      ],
      "date": "2022-09-27",
      "name": null
  },
  {
      "amount": 25.0,
      "category": [
          "Payment",
          "Credit Card"
      ],
      "date": "2022-09-02",
      "name": null
  },
  {
      "amount": -4.22,
      "category": [
          "Transfer",
          "Credit"
      ],
      "date": "2022-08-28",
      "name": null
  },
  {
      "amount": 25.0,
      "category": [
          "Payment",
          "Credit Card"
      ],
      "date": "2022-08-03",
      "name": null
  },
  {
      "amount": -4.22,
      "category": [
          "Transfer",
          "Credit"
      ],
      "date": "2022-07-29",
      "name": null
  },
  {
      "amount": 25.0,
      "category": [
          "Payment",
          "Credit Card"
      ],
      "date": "2022-07-04",
      "name": null
  },
  {
      "amount": -4.22,
      "category": [
          "Transfer",
          "Credit"
      ],
      "date": "2022-06-29",
      "name": null
  },
  {
      "amount": 25.0,
      "category": [
          "Payment",
          "Credit Card"
      ],
      "date": "2022-06-04",
      "name": null
  },
  {
      "amount": -4.22,
      "category": [
          "Transfer",
          "Credit"
      ],
      "date": "2022-05-30",
      "name": null
  },
  {
      "amount": 25.0,
      "category": [
          "Payment",
          "Credit Card"
      ],
      "date": "2022-05-05",
      "name": null
  },
  {
      "amount": -4.22,
      "category": [
          "Transfer",
          "Credit"
      ],
      "date": "2022-04-30",
      "name": null
  },
  {
      "amount": 25.0,
      "category": [
          "Payment",
          "Credit Card"
      ],
      "date": "2022-04-05",
      "name": null
  },
  {
      "amount": -4.22,
      "category": [
          "Transfer",
          "Credit"
      ],
      "date": "2022-03-31",
      "name": null
  },
  {
      "amount": 25.0,
      "category": [
          "Payment",
          "Credit Card"
      ],
      "date": "2022-03-06",
      "name": null
  },
  {
      "amount": -4.22,
      "category": [
          "Transfer",
          "Credit"
      ],
      "date": "2022-03-01",
      "name": null
  },
  {
      "amount": 25.0,
      "category": [
          "Payment",
          "Credit Card"
      ],
      "date": "2022-02-04",
      "name": null
  },
  {
      "amount": -4.22,
      "category": [
          "Transfer",
          "Credit"
      ],
      "date": "2022-01-30",
      "name": null
  },
  {
      "amount": 25.0,
      "category": [
          "Payment",
          "Credit Card"
      ],
      "date": "2022-01-05",
      "name": null
  },
  {
      "amount": -4.22,
      "category": [
          "Transfer",
          "Credit"
      ],
      "date": "2021-12-31",
      "name": null
  },
  {
      "amount": 25.0,
      "category": [
          "Payment",
          "Credit Card"
      ],
      "date": "2021-12-06",
      "name": null
  },
  {
      "amount": -4.22,
      "category": [
          "Transfer",
          "Credit"
      ],
      "date": "2021-12-01",
      "name": null
  },
  {
      "amount": 25.0,
      "category": [
          "Payment",
          "Credit Card"
      ],
      "date": "2021-11-06",
      "name": null
  },
  {
      "amount": -4.22,
      "category": [
          "Transfer",
          "Credit"
      ],
      "date": "2021-11-01",
      "name": null
  },
  {
      "amount": 25.0,
      "category": [
          "Payment",
          "Credit Card"
      ],
      "date": "2021-10-07",
      "name": null
  },
  {
      "amount": -4.22,
      "category": [
          "Transfer",
          "Credit"
      ],
      "date": "2021-10-02",
      "name": null
  },
  {
      "amount": 25.0,
      "category": [
          "Payment",
          "Credit Card"
      ],
      "date": "2021-09-07",
      "name": null
  },
  {
      "amount": -4.22,
      "category": [
          "Transfer",
          "Credit"
      ],
      "date": "2021-09-02",
      "name": null
  },
  {
      "amount": 25.0,
      "category": [
          "Payment",
          "Credit Card"
      ],
      "date": "2021-08-08",
      "name": null
  },
  {
      "amount": -4.22,
      "category": [
          "Transfer",
          "Credit"
      ],
      "date": "2021-08-03",
      "name": null
  },
  {
      "amount": 25.0,
      "category": [
          "Payment",
          "Credit Card"
      ],
      "date": "2021-07-09",
      "name": null
  },
  {
      "amount": -4.22,
      "category": [
          "Transfer",
          "Credit"
      ],
      "date": "2021-07-04",
      "name": null
  },
  {
      "amount": 25.0,
      "category": [
          "Payment",
          "Credit Card"
      ],
      "date": "2021-06-09",
      "name": null
  },
  {
      "amount": -4.22,
      "category": [
          "Transfer",
          "Credit"
      ],
      "date": "2021-06-04",
      "name": null
  },
  {
      "amount": 6.33,
      "category": [
          "Travel",
          "Taxi"
      ],
      "date": "2023-05-13",
      "name": "Uber"
  },
  {
      "amount": -4.22,
      "category": [
          "Transfer",
          "Credit"
      ],
      "date": "2023-05-25",
      "name": null
  },
  {
      "amount": 89.4,
      "category": [
          "Food and Drink",
          "Restaurants"
      ],
      "date": "2023-05-26",
      "name": null
  },
  {
      "amount": 12.0,
      "category": [
          "Food and Drink",
          "Restaurants",
          "Fast Food"
      ],
      "date": "2023-05-27",
      "name": "McDonald's"
  },
  {
      "amount": 4.33,
      "category": [
          "Food and Drink",
          "Restaurants",
          "Coffee Shop"
      ],
      "date": "2023-05-27",
      "name": "Starbucks"
  },
  {
      "amount": -500.0,
      "category": [
          "Travel",
          "Airlines and Aviation Services"
      ],
      "date": "2023-05-28",
      "name": "United Airlines"
  }
  ];
  
  // sort the list based on date in descending order
  const sortedList = list.sort((a, b) => {
    return new Date(b.date) - new Date(a.date);
  });


    return (
    <div class="relative shadow-md sm:rounded-lg">
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
          {sortedList.map((list, index) => {
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
