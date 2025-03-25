import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/user/userSlice.js";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleSignout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <nav className="bg-gray-800 border-b-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex items-center">
            <img
              className="h-10 w-auto rounded-3xl"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9OmMrhZN0cE-J6EJFXxFYaK1u0aXN7L13Og&s"
              alt="TodoMate"
            />
            <Link to="/" className="text-white font-semibold text-xl ml-3">
              TodoMate
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="text-white hover:text-gray-300">Home</Link>
            <Link to="/add-todo" className="text-white hover:text-gray-300">Add ToDo</Link>
            <Link to="/view-todo" className="text-white hover:text-gray-300">View ToDo</Link>
          </div>

          {/* User Authentication */}
          <div className="hidden md:flex items-center">
            {currentUser ? (
              <div className="flex items-center space-x-4">
                <img
                  className="w-8 h-8 rounded-full"
                  src="https://png.pngtree.com/png-vector/20190501/ourmid/pngtree-users-icon-design-png-image_1014936.jpg"
                  alt="User"
                />
                <span className="text-white">{currentUser.email}</span>
                <button
                  onClick={handleSignout}
                  className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
                >
                  Sign out
                </button>
              </div>
            ) : (
              <Link to="/login" className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                Sign in
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-400 hover:text-white focus:outline-none"
            >
              {isMobileMenuOpen ? (
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 6h18M3 12h18m-18 6h18" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-800 px-4 pt-2 pb-4">
          <Link to="/" className="block text-white py-2 hover:text-gray-300">Home</Link>
          <Link to="/add-todo" className="block text-white py-2 hover:text-gray-300">Add ToDo</Link>
          <Link to="/view-todo" className="block text-white py-2 hover:text-gray-300">View ToDo</Link>
          {currentUser ? (
            <button
              onClick={handleSignout}
              className="w-full mt-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
            >
              Sign out
            </button>
          ) : (
            <Link to="/login" className="block text-center mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
              Sign In
            </Link>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;

