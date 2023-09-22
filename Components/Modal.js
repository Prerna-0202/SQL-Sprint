import React from 'react';

const Modal = ({ isOpen, children }) => {
  if (!isOpen) return null;

  return (
    <>
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center backdrop-blur-sm">
      <div className="fixed inset-0 "></div>
      <div className="relative default-background-color w-[75.66%] h-[53.33%] p-4 rounded-lg shadow-lg overflow-y-auto">
        {children}
      </div>
    </div>
    </>
  );
}

export default Modal;
