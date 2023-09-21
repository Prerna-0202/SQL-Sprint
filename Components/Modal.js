import React from 'react';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center backdrop-blur-sm">
      <button
        className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 font-extrabold text-4xl cursor-pointer"
        onClick={onClose}
      >
        ✖
      </button>
      <div className="fixed inset-0 "></div>
      <div className="relative backg w-[75.66%] h-[53.33%] p-4 rounded-lg shadow-lg overflow-y-auto">
        {children}
      </div>
    </div>
  );
}

export default Modal;
