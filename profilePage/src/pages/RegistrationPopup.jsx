import React, { useState } from 'react';

const RegistrationPopup = ({ onClose }) => {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
          <h2 className="text-xl font-bold mb-4">Register As</h2>
          <div className="flex flex-col gap-4">
            <button 
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
              onClick={() => window.location.href = '/customer-registration'}
            >
              Customer
            </button>
            <button 
              className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition"
              onClick={() => window.location.href = '/professional-registration'}
            >
              Professional
            </button>
          </div>
          <button className="mt-4 text-red-500" onClick={onClose}>Cancel</button>
        </div>
      </div>
    );
  };
  
  export default RegistrationPopup;