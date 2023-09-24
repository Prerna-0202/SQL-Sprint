"use client";
import React, { useEffect, useState } from 'react';

const AvailableQueries = ({ onSelectQuery }) => {
  const queries = [
    'SELECT * FROM Customers;',
    'SELECT ProductName, ProductID FROM Products;',
    'SELECT * FROM Order_Details ORDER BY Orders;',
    'SELECT * FROM Customers ORDER BY Country, Employees;',
    'SELECT * FROM Employees;',
    'SELECT SUM(Quantity) FROM Order_Details;',
    'SELECT * FROM Suppliers;',
    'SELECT AVG(Price) FROM Products;',
    'SELECT * FROM Products;',
    'SELECT AVG(Price) AS [average price] FROM Orders;',
    'SELECT * FROM Orders;',
    'SELECT * FROM Order_Details;',
    'SELECT City FROM Customers UNION SELECT City FROM Suppliers ORDER BY Employees;',
    'SELECT COUNT(CustomerID), Country FROM GROUP BY Customers;',
  ];

  return (
    <>
    <div className="fixed h-[50%] lg:w-[15%] md:w-[25%] bg-white p-2">
      <h1 className="text-2xl font-semibold sticky top-14 bg-white">Available Queries</h1>
      <div className="overflow-y-scroll h-[70%] sm:h-[90%] mt-10">
        <div className="space-y-2">
          {queries.map((query, index) => (
            <div
              key={index}
              onClick={() => onSelectQuery(query)}
              className="p-4 sm:p-4 bg-slate-200 rounded-lg shadow-md cursor-pointer hover:shadow-lg transition duration-300"
            >
              <p className="hover:underline font-bold text-sm sm:text-base">{query}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </>
  );
};

export default AvailableQueries;
