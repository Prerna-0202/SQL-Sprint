'use client';
import React from 'react'

const Input = ({ runQuery, query, setQuery }) => {
  return (
    <>
      <div className="fixed left-80 h-[44%] w-[63%] bg-[#212224] p-4">
        <form onSubmit={runQuery} className="w-[100%] h-[100%] p-4  flex flex-col">
          <div className="flex justify-between items-center bg-[#1E1F22] text-white py-2 px-4 rounded-t-lg">
            <button className=" text-white text-xl">SQLite</button>
            <div className="space-x-2">
              <button className="bg-gray-700 text-white px-3 py-1 rounded">➕</button>
              <button type="submit" className="bg-gray-700 text-white px-3 py-1 rounded">Run ▶</button>
              <button className="bg-gray-700 text-white px-3 py-1 rounded">Clear</button>
            </div>
          </div>
          <div className="flex-grow flex flex-col justify-between">
            <textarea
              className="bg-[#1E1F22] border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-blue-500 h-full w-full my-1 text-white text-xl"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
              }}
            />
          </div>
        </form>
      </div>
    </>
  )
}

export default Input