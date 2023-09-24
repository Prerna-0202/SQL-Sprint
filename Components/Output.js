"use client";
import React from 'react';

const Output = ({ result }) => {
  return (
    <>
    <div className="fixed  top-1/2 lg:h-[60%] lg:w-[80%] md:left-0 md:h-[60%] md:w-full bg-white p-4">
      <h1 className='font-bold text-2xl '>Output</h1>

      <div className="overflow-auto  border border-gray-500" style={{ maxHeight: 'calc(100% - 48px)' }}>
        {result.length > 0 && Array.isArray(result) && (
          <table className="w-[90%]">
            <thead>
              <tr className="bg-slate-200">
                {Object.keys(result[0]).map((columnName) => (
                  <th
                    key={columnName}
                    className="border border-gray-300 px-4 py-2   font-bold"
                  >
                    {columnName}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {result.map((row, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? ' bg-slate-100' : 'bg-slate-200'}
                >
                  {Object.values(row).map((value, colIndex) => (
                    <td
                      key={colIndex}
                      className="border border-gray-300 px-4 py-2  "
                    >
                      {value}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        )}
        {!Array.isArray(result) && (
          <div className="bg-slate-200  flex justify-between items-center top-2/3 text-xl font-bold">
            {result}
          </div>
        )}
      </div>
    </div>
    </>
  );
};

export default Output;