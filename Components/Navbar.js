'use client';
import React from 'react'

const Navbar = ({ handleReset, toggleTheme }) => {

  return (
    <div className='flex items-center justify-between text-white backg h-16 px-4 z-52 select-none'>
      <div className="flex items-center space-x-2">
        <div className="w-4 h-4 relative">
          <div className="absolute transform -translate-x-1/2 -translate-y-1/2 w-6 h-1 bg-white"></div>
          <div className="absolute transform -translate-x-1/2 -translate-y-1/2 w-6 h-1 bg-white mt-2"></div>
          <div className="absolute transform -translate-x-1/2 -translate-y-1/2 w-6 h-1 bg-white mt-4"></div>
        </div>
        <span className=' text-slate-200 font-bold text-2xl'>SQL Sprint</span>
      </div>
      <div className="flex items-center space-x-4">
        <button className="bg-gray-700 text-white px-3 py-1 rounded">Import</button>
        <button className="bg-gray-700 text-white px-3 py-1 rounded">Export</button>
        <button onClick={handleReset} className="bg-gray-700 text-white px-3 py-1 rounded font-4xl">Reset
        </button>
        <button className="bg-gray-700 text-white px-3 py-1 rounded">Help ❓</button>
        <button className="bg-gray-700 text-white px-3 py-1 rounded"><span className='text-xl'>📧</span></button>
        <button className="bg-gray-700 text-white px-3 py-1 rounded">🙍 Guest_User</button>
      </div>
    </div>
  )
}


export default Navbar