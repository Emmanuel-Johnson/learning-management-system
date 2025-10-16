import { Link } from 'react-router-dom'
import { useState } from "react"

function Header() {
    const [dropdownOpen, setDropdownOpen] = useState(false);
const handleItemClick = () => {
    setDropdownOpen(false); // Close dropdown when item clicked
  };

  return (
  
      <nav className="bg-red-600 text-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to="/" className="text-3xl font-bold">LMS Academy</Link>
            </div>

            {/* Menu */}
            <div className="flex space-x-6">
              <Link to="/" className="text-white hover:text-white font-bold">Home</Link>
              <a href="#" className="text-white hover:text-white font-bold">Courses</a>
              <a href="#" className="text-white hover:text-white font-bold">Teachers</a>
              <Link to="/about" className="text-white hover:text-white font-bold">About Us</Link>
      <div className="relative">
        <button
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="text-white hover:text-gray-300 font-bold"
        >
          User ▼
        </button>

        {dropdownOpen && (
          <div className="absolute right-0 mt-2 w-40 bg-white rounded shadow-lg z-10">
            <Link
              to="/user-login"
              onClick={handleItemClick} 
              className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
            >
              Login
            </Link>
            <Link
              to="/user-register"
              onClick={handleItemClick} 
              className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
            >
              Register
            </Link>
           <hr></hr>
             <Link
              to="/user-dashboard"
              onClick={handleItemClick} 
              className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
            >
              My Profile
            </Link>
             <Link
              to="/user-register"
              onClick={handleItemClick} 
              className="block px-4 py-2 text-gray-800 hover:bg-gray-200 text-red-600"
            >
              Logout
            </Link>
            {/* Add more dropdown items here */}
          </div>
        )}
      </div>

            </div>
          </div>
        </div>
      </nav>
   
  );
}

export default Header;
