import React from 'react';

const History = ({ history }) => {
  return (
    <>
      <div className="fixed right-0 top-1/2 h-[100%] w-[20%] default-background-color p-4 overflow-y-auto shadow-lg my-2">
        <div className="border-b border-gray-600 mb-4">
          <h1 className="text-xl font-semibold text-white pb-2">History</h1>
        </div>
        <div>
          {history.map((query, index) => (
            <div key={index} className="bg-gray-700 p-2 mb-2 rounded-md shadow-md text-white text-sm md:text-base">
              {query}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default History;
