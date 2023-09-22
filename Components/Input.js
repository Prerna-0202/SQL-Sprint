import React from 'react';

const Input = ({ runQuery, query, setQuery }) => {
  // Function to handle the "Clear" button click
  const handleClearClick = () => {
    setQuery(''); // Clear the query by setting it to an empty string
  };

  return (
    <>
      <div className="fixed left-72 h-[44%] w-[78%] bg-[#212224] p-4">
        <form onSubmit={runQuery} className="w-full md:w-[80%] h-[100%] p-4 flex flex-col">
          <div className="flex  justify-start items-center bg-[#1E1F22] text-white py-2 px-4 rounded-t-lg">
            <button className="text-white text-2xl">SQLite</button>
            <div className="space-x-2 mx-5">
              <button type="submit" className="bg-gray-700 text-white px-3 py-1 rounded">Run ▶</button>
              <button className="bg-gray-700 text-white px-3 py-1 rounded" onClick={handleClearClick}>Clear</button>
              {/* Add the onClick event handler to the "Clear" button */}
            </div>
          </div>
          <div className="flex-grow flex flex-col justify-between">
            <textarea
              className="bg-[#1E1F22] outline-none focus:ring-2 focus:ring-blue-500 h-full w-full my-1 text-white text-xl p-4"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
              }}
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default Input;