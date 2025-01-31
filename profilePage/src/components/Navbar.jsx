import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <>
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-4 bg-white shadow-md">
        {/* Left-aligned Brand and Input */}
        <div className="flex items-center space-x-4">
          {/* Profile Image */}
          {/* <img
            src="https://via.placeholder.com/50"
            alt="Profile"
            className="rounded-full w-12 h-12"
          /> */}
          <div className="text-lg font-bold text-gray-800">Shahil</div>
          <input
            type="text"
            placeholder="Search..."
            className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Right-aligned Navigation Links */}
        <ul className="flex items-center space-x-6 text-gray-700 font-medium">
          <li>
            <Link to="/" className="hover:text-blue-600">
              Home
            </Link>
          </li>
          <li>
            <Link to="/login" className="hover:text-blue-600">
              Login
            </Link>
          </li>
          <li>
            <button
              onClick={togglePopup}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-500"
            >
              Register
            </button>
          </li>
        </ul>
      </nav>

      {/* Registration Popup */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-80">
            <h2 className="text-xl font-bold mb-4 text-gray-800">Register</h2>
            <div className="flex flex-col space-y-4">
              <Link
                to="/customer-registration"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg text-center hover:bg-blue-700"
                onClick={() => setShowPopup(false)}
              >
                Customer Registration
              </Link>
              <Link
                to="/professional-registration"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg text-center hover:bg-blue-700"
                onClick={() => setShowPopup(false)}
              >
                Professional Registration
              </Link>
              <button
                onClick={togglePopup}
                className="bg-gray-300 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-400"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
