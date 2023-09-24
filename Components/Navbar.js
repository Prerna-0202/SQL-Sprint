"use client";
import React, { useState } from 'react';
import Help from './Help';

const Navbar = ({ handleReset, handleExport }) => {
  const [showSupportPopup, setShowSupportPopup] = useState(false);
  const [showHelpPopup, setShowHelpPopup] = useState(false);
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [exportOptionsVisible, setExportOptionsVisible] = useState(false);
  const [selectedExportOption, setSelectedExportOption] = useState(null);
  const [users_email, setusers_email] = useState([]);
  const [user_message, setuser_Message] = useState([]);

  const handleSupportClick = () => {
    setShowSupportPopup(true);
  };

  const handleCloseSupportPopup = () => {
    setShowSupportPopup(false);
  };

  const handleHelpClick = () => {
    setShowHelpPopup(true);
  };

  const handleCloseHelpClick = () => {
    setShowHelpPopup(false);
  };

  const handleSendEmail = () => {
    setusers_email([...users_email, email]);
    setuser_Message([...user_message, message]);
    console.log('All Emails:', users_email);
    console.log('All Messages:', user_message);
    // Close the support popup
    setShowSupportPopup(false);
    // Clear the email and message inputs
    setEmail('');
    setMessage('');
  };

  const handleExportOptionClick = (option) => {
    setSelectedExportOption(option);
    setExportOptionsVisible(false);
    // Depending on the selected export option, call the export function (e.g., handleDownloadCSV) with the appropriate format.
    if (option === 'CSV') {
      handleExport('CSV');
    } else if (option === 'XML') {
      handleExport('XML');
    } else if (option === 'JSON') {
      handleExport('JSON');
    }
  };


  return (
    <>
      <div className='flex items-center justify-between h-16 px-4 z-50 select-none bg-white fixed'>
        <div className="flex space-x-2">
          <span className='font-bold text-xl sm:text-2xl mr-10'>SQL Sprint </span>
        </div>
        <div className="flex items-center space-x-2 sm:space-x-4">
          <div className="relative inline-block text-left">
            <button
              className=" bg-slate-200 px-2 sm:px-3 py-1 sm:py-2 rounded"
              onClick={() => setExportOptionsVisible(!exportOptionsVisible)}
            >
              Export
            </button>
            {/* Dropdown Options */}
            {exportOptionsVisible && (
              <div className="origin-top-right absolute right-0 mt-2 w-32 sm:w-40 rounded-md shadow-lg bg-slate-200 z-50">
                <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                  <button
                    className="block px-4 py-2 text-sm sm:text-md"
                    onClick={() => handleExportOptionClick('CSV')}
                  >
                    CSV
                  </button>
                  <button
                    className="block px-4 py-2 text-sm sm:text-md"
                    onClick={() => handleExportOptionClick('XML')}
                  >
                    XML
                  </button>
                  <button
                    className="block px-4 py-2 text-sm sm:text-md"
                    onClick={() => handleExportOptionClick('JSON')}
                  >
                    JSON
                  </button>
                </div>
              </div>
            )}
          </div>
          <button onClick={handleReset} className="bg-slate-200 px-2 sm:px-3 py-1 sm:py-2 rounded font-2xl sm:font-4xl">Reset</button>
          <button className="bg-slate-200 px-2 sm:px-3 py-1 sm:py-2 rounded" onClick={handleHelpClick}>Help</button>
          <button className="bg-slate-200  px-2  py-1 rounded" onClick={handleSupportClick}>
            <span className='text-lg '>📧</span>
          </button>
        </div>
        {showHelpPopup &&
          <div className=" flex items-center justify-center z-50 ">
            <div className="fixed inset-0 opacity-50 bg-black"></div>
            <div className="fixed left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-slate-200 p-2  rounded-lg shadow-lg   w-[80%] h-[80%]">
              <button
                className="absolute top-2 right-2"
                onClick={handleCloseHelpClick}
              >
                &#10005;
              </button>
              <h1 className="text-xl sm:text-3xl font-semibold mb-2 sm:mb-4 flex justify-center items-center">Help</h1>
              <Help />
            </div>
          </div>
        }
        {showSupportPopup && (
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="fixed inset-0 bg-black opacity-50"></div>
            <div className="fixed left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-slate-200 p-2 sm:p-4 rounded-lg shadow-lg  w-[500px] h-[40%] sm:h-[400px]">
              <button
                className="absolute top-2 right-2"
                onClick={handleCloseSupportPopup}
              >
                &#10005;
              </button>
              <h1 className="text-xl sm:text-3xl font-semibold mb-2 sm:mb-4 flex justify-center items-center">Support</h1>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-gray-300 rounded-md p-2 mb-2 sm:mb-4 focus:ring focus:ring-blue-500 h-8 sm:h-10 bg-white"
              />
              <textarea
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full border border-gray-300 rounded-md p-2 mb-2 sm:mb-4 resize-none focus:ring focus:ring-blue-500 h-32 sm:h-44 bg-white"
              />
              <div className="flex justify-center">
                <button
                  onClick={handleSendEmail}
                  className="bg-blue-500 text-white px-3 py-2 rounded-md hover:bg-blue-700"
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      <hr className='border border-gray-400 mb-4' />
    </>
  );
};

export default Navbar;

