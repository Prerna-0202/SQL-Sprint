import React from 'react';

const History = ({ history }) => {
  return (
    <>
      <div className="absolute right-0 top-1/2  w-[20%] bg-white p-4 overflow-y-scroll shadow-lg ">
        <div className="border-b border-gray-600 mb-4">
          <h1 className="text-xl font-semibold py-2">History</h1>
        </div>
        <div>
          {history.map((query, index) => (
            <div key={index} className="bg-slate-200 p-2 mb-2 rounded-md shadow-md text-sm md:text-base">
              {query}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default History;
