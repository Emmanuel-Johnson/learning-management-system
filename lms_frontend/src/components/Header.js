function Header() {
  return (
  
      <nav className="bg-red-600 text-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="#" className="text-3xl font-bold">LearnSphere</a>
            </div>

            {/* Menu */}
            <div className="flex space-x-6">
              <a href="#" className="text-black hover:text-white font-bold">Home</a>
              <a href="#" className="text-black hover:text-white font-bold">Courses</a>
              <a href="#" className="text-black hover:text-white font-bold">Teachers</a>
            </div>
          </div>
        </div>
      </nav>
   
  );
}

export default Header;
