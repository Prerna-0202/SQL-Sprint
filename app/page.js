'use client';
import AvailableQueries from '@/Components/AvailableQueries';
import CSVDisplay from '@/Components/CSVDisplay';
import History from '@/Components/History';
import Input from '@/Components/Input';
import Navbar from '@/Components/Navbar';
import Output from '@/Components/Output';
import React, { useState } from 'react';
import Papa from 'papaparse';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const page = () => {

  const [showTable, setShowTable] = useState(false);
  const [result, setResult] = useState('Click "Run" to execute the SQL statement above.');
  const [query, setQuery] = useState('SELECT * FROM Products;');
  const [typeofResult, settypeofResult] = useState('String');
  const [theme, setTheme] = useState('light');
  const [history, setHistory] = useState([]); // State variable for query history

  // Function to Reset editor
  const handleReset = () => {
    setResult('Click "Run" to execute the SQL statement above');
    setQuery('SELECT * FROM Products;');
    settypeofResult('String');
    setShowTable(false);
  };

  // Function to set the selected query when a query is clicked
  const handleSelectQuery = (selected) => {
    setQuery(selected); // Set the selected query in the input field
  };

  // Function to run a query
  const runQuery = (event) => {
    event.preventDefault();

    if (query.length === 0) {
      setResult('Please Enter a Suitable Query To Run.');
      settypeofResult('String');
      return;
    }

    // Split the query to extract the table name
    const queryParts = query.split(' ');
    const tableName = queryParts[queryParts.length - 1];

    // Map the table name to the corresponding CSV file
    const tableToFileMap = {
      'Products;': 'products.csv',
      'Customers;': 'customers.csv',
      'Orders;': 'orders.csv',
      'Suppliers;': 'suppliers.csv',
      'Order_Details;': 'order_details.csv',
      'Employees;': 'employees.csv',
    };

    // Check if the table name is valid
    if (tableToFileMap[tableName]) {
      // Fetch and display the data from the CSV file
      fetch(`/${tableToFileMap[tableName]}`)
        .then((response) => response.text())
        .then((csvData) => {
          // Parse the CSV data into an array of objects
          Papa.parse(csvData, {
            header: true,
            skipEmptyLines: true,
            complete: function (result) {
              setResult(result.data); // Update result with the parsed data
              toast.success('Query Run!', {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
              });
              settypeofResult('Data');
              setHistory((prevHistory) => {
                const newHistory = [query, ...prevHistory].slice(0, 8);
                return newHistory;
              });
            },
            error: function (error) {
              console.error(error);
              setResult('An Error Occurred While Parsing Data.');
              settypeofResult('String');
            },
          });
        })
        .catch((error) => {
          console.error(error);
          setResult('An Error Occurred While Fetching Data.');
          settypeofResult('String');
        });
    } else {
      setResult('Invalid Query.');
      toast.error('Invalid Query!', {
        position: "bottom-right",
        autoClose: 500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",

      });
      settypeofResult('String');
    }
  };

  // Function to handle the downloading of CSV data
  const handleExport = (fileType) => {
    const fileExtension = fileType === 'CSV' ? 'csv' : fileType === 'XML' ? 'xml' : fileType === 'JSON' ? 'json' : 'txt';
    const blob = new Blob([result], { type: `text/${fileExtension}` });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `data.${fileExtension}`;
    a.style.display = 'none';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <>
      <div className={theme === 'light' ? 'light-theme' : 'dark-theme'}>
        <Navbar handleReset={handleReset} handleExport={handleExport} />
        <AvailableQueries onSelectQuery={handleSelectQuery} />
        <Input runQuery={runQuery} query={query} setQuery={setQuery} />
        <Output result={result} typeofResult={typeofResult} />
        <History history={history} />
        <CSVDisplay showTable={showTable} setShowTable={setShowTable} />
        <ToastContainer />
      </div>
    </>
  );
};

export default page;
