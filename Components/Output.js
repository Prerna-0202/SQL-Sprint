import React from 'react';

const Output = ({ result }) => {
  return (
    <>
    <div className="fixed left-72 top-1/2 h-[60%] w-[64%] bg-[#212224] p-4">
      <h1 className='text-white font-bold text-2xl'>Output</h1>
      <div className="overflow-auto" style={{ maxHeight: 'calc(100% - 48px)' }}>
        {result.length > 0 && Array.isArray(result) && (
          <table className="w-[90%]">
            <thead>
              <tr className="bg-[#242528]">
                {Object.keys(result[0]).map((columnName) => (
                  <th
                    key={columnName}
                    className="border border-gray-300 px-4 py-2 text-white font-bold"
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
                  className={index % 2 === 0 ? 'bg-[#1E1F22]' : 'bg-[#242528]'}
                >
                  {Object.values(row).map((value, colIndex) => (
                    <td
                      key={colIndex}
                      className="border border-gray-300 px-4 py-2 text-white"
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
          <div className="bg-[#242528] text-white flex justify-center items-center top-2/3 text-xl font-bold">
            {result}
          </div>
        )}
      </div>
    </div>
    </>
  );
};

export default Output;