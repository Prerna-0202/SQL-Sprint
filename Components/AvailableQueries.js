import React, { useEffect, useState } from 'react';

const AvailableQueries = ({ onSelectQuery }) => {
  const queries = [
    'SELECT * FROM Customers;',
    'SELECT ProductName, ProductID FROM Products;',
    'SELECT * FROM Order_Details ORDER BY Orders;',
    'SELECT * FROM Customers ORDER BY Country, Employees;',
    'SELECT SUM(Quantity) FROM Order_Details;',
    'SELECT * FROM Suppliers;',
    'SELECT AVG(Price) FROM Products;',
    'SELECT AVG(Price) AS [average price] FROM Orders;',
    'SELECT City FROM Customers UNION SELECT City FROM Suppliers ORDER BY Employees;',
    'SELECT COUNT(CustomerID), Country FROM Customers GROUP BY Order_Details;'
  ];

  return (
    <div className="fixed left-0 h-[90%] w-[18%] backg p-4">
        <h1 className="fixed text-2xl font-semibold mb-4 text-white">Available Queries:</h1>
      <div className="overflow-y-scroll h-full mt-10">
        <div className="space-y-4">
          {queries.map((query, index) => (
            <div
              key={index}
              onClick={() => onSelectQuery(query)}
              className="p-4 bg-gray-700 rounded-lg shadow-md cursor-pointer hover:shadow-lg transition duration-300"
            >
              <p className="text-white hover:underline font-bold">{query}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AvailableQueries;
