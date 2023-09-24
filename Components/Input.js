import React from 'react';

const Input = ({ runQuery, query, setQuery }) => {
  // Function to handle the "Clear" button click
  const handleClearClick = () => {
    setQuery(''); // Clear the query by setting it to an empty string
  };

  return (
    <>
      <div className="fixed top-14 lg:left-52 lg:h-[44%] lg:w-[80%] md:left-[25%] md:h-[45%] md:w-[60%] bg-white p-4">
        <form onSubmit={runQuery} className="w-full md:w-[83%] h-[100%] p-4 flex flex-col">
          <div className="flex justify-between items-center bg-slate-200py-2 px-4 rounded-t-md border border-gray-500">
            <button className="text-2xl font-bold">Input</button>
            <div className="lg:space-x-2  md:space-x-1 p-2">
              <button type="submit" className="bg-slate-200 px-3 py-1 rounded">Run</button>
              <button className="bg-slate-200  px-3 py-1 rounded" onClick={handleClearClick}>Clear</button>
            </div>
          </div>
          <div className="flex-grow flex flex-col justify-between">
            <textarea
              className="bg-white outline-none focus:ring-2 focus:ring-blue-500 h-full w-full my-1 text-xl p-4 border border-gray-500"
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