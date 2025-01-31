import React from "react";
import LoginSheet from "./LoginSheet";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 border-b bg-white z-50">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        <div className="text-xl font-bold">HomeServices</div>
        <div className="flex items-center gap-6">
          <Link to="#" className="text-sm text-gray-600">Services</Link>
          <Link to="/professional-registration" className="text-sm text-gray-600">Are you Service Provider?</Link>
          <LoginSheet/>
        </div>
      </div>
    </header>
  );
}

export default Header;