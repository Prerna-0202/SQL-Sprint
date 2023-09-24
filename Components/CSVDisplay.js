import React, { useEffect, useState } from 'react';
import Papa from 'papaparse';
import Modal from './Modal';

const CSVDisplay = ({ showTable, setShowTable }) => {
  const [data, setData] = useState([]);
  const [selectedTable, setSelectedTable] = useState('');

  useEffect(() => {
    // Function to fetch and parse the CSV file
    const fetchData = async () => {
      try {
        if (selectedTable) {
          const response = await fetch(`/${selectedTable.toLowerCase()}.csv`);
          const text = await response.text();

          // Parse the CSV to JSON
          Papa.parse(text, {
            header: true,
            dynamicTyping: true,
            complete: (result) => {
              setData(result.data);
            },
            error: (error) => {
              console.error(error.message);
            },
          });
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [selectedTable]);

  const handleShowTable = (tableName) => {
    setSelectedTable(tableName);
    setShowTable(true);
  };

  const handleCloseTable = () => {
    setSelectedTable(null);
    setShowTable(false);
  };

  return (
    <>
    <div className="fixed right-0 h-[45%] lg:w-[20%] md:w-[27%] p-6 bg-white overflow-y-auto">
      <h1 className="text-xl font-semibold mb-4 ">Your Database</h1>
      <div className="grid grid-cols-1 md:grid-cols-1 gap-4  justify-center items-center">
        {["Customers", "Employees", "Details", "Orders", "Products", "Suppliers"].map((tableName, index) => (
          <div
            key={index}
            onClick={() => handleShowTable(tableName.toLowerCase())}
            className="bg-slate-200 p-4 rounded-lg shadow-md cursor-pointer hover:shadow-lg transition duration-300"
          >
            <h2 className="lg:text-xl font-semibold mb-2 md:text-sm">{tableName}</h2>
            <p className=" text-gray-500">Click to view data</p>
          </div>
        ))}
      </div>
      <Modal isOpen={showTable}>
        <button
          className='fixed top-2 right-4 font-extrabold text-5xl cursor-pointer'
          onClick={handleCloseTable}
        >
          X
        </button>
        {selectedTable && (
          <div>
            <h1 className="text-xl font-semibold mb-2">{`Your Database Table: ${selectedTable}`}</h1>
            <div className="overflow-x-auto">
              <table className="w-full table-auto">
                <thead>
                  {data.length > 0 && (
                    <tr className="text-black">
                      {Object.keys(data[0]).map((columnName) => (
                        <th
                          key={columnName}
                          className="px-4 py-2 border border-gray-500"
                        >
                          {columnName}
                        </th>
                      ))}
                    </tr>
                  )}
                </thead>
                <tbody>
                  {data.map((row, index) => (
                    <tr
                      key={index}
                      className={index % 2 === 0 ? ' bg-slate-100' : 'bg-slate-200'}
                    >
                      {Object.values(row).map((value, colIndex) => (
                        <td
                          key={colIndex}
                          className="px-4 py-2 border border-gray-500"
                        >
                          {value}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </Modal>
    </div>
    </>
  );
};

export default CSVDisplay;
