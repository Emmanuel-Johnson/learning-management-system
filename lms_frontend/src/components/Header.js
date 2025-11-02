import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav className="bg-red-600 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-3xl font-bold">LMS Academy</Link>
          </div>
          {/* Menu */}
          <div className="flex space-x-6 items-center">
            <Link to="/" className="text-white hover:text-gray-300 font-bold">Home</Link>
            <Link to="all-courses" className="text-white hover:text-gray-300 font-bold">Courses</Link>
            {/* Teacher Dropdown */}
            <div className="relative group">
              <button className="text-white hover:text-gray-300 font-bold py-2">
                Teacher ▼
              </button>
              <div className="absolute right-0 top-full w-40 bg-white rounded shadow-lg 
                              opacity-0 invisible group-hover:visible group-hover:opacity-100 
                              transition-opacity duration-200 z-10">
                <Link
                  to="/teacher-login"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                >
                  Login
                </Link>
                <Link
                  to="/teacher-register"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                >
                  Register
                </Link>
                <hr />
                <Link
                  to="/teacher-dashboard"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                >
                  My Profile
                </Link>
                <Link
                  to="/user-logout"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200 text-red-600"
                >
                  Logout
                </Link>
              </div>
            </div>
            {/* User Dropdown */}
            <div className="relative group">
              <button className="text-white hover:text-gray-300 font-bold py-2">
                User ▼
              </button>
              <div className="absolute right-0 top-full w-40 bg-white rounded shadow-lg 
                              opacity-0 invisible group-hover:visible group-hover:opacity-100 
                              transition-opacity duration-200 z-10">
                <Link
                  to="/user-login"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                >
                  Login
                </Link>
                <Link
                  to="/user-register"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                >
                  Register
                </Link>
                <hr />
                <Link
                  to="/user-dashboard"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                >
                  My Profile
                </Link>
                <Link
                  to="/user-logout"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200 text-red-600"
                >
                  Logout
                </Link>
              </div>
            </div>
            <Link to="/about" className="text-white hover:text-gray-300 font-bold">About Us</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;