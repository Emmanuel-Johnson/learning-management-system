import { Link } from 'react-router-dom'

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
            <div className="flex space-x-6">
              <Link to="/" className="text-black hover:text-white font-bold">Home</Link>
              <a href="#" className="text-black hover:text-white font-bold">Courses</a>
              <a href="#" className="text-black hover:text-white font-bold">Teachers</a>
              <Link to="/about" className="text-black hover:text-white font-bold">About Us</Link>
            </div>
          </div>
        </div>
      </nav>
   
  );
}

export default Header;
