import { Link, NavLink } from "react-router-dom";
import useAuth from "../AuthProvider/useAuth";
import { FiLogOut, FiUser } from "react-icons/fi";
import { FaHotel } from "react-icons/fa";

const Navbar = () => {
  const { user, logOut } = useAuth();

  const handleLogOut = () => {
    logOut()
      .then(() => {
        console.log("User logged out successfully");
      })
      .catch(error => {
        console.error("Logout error:", error);
      });
  };

  const styleNav = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      color: isActive ? "#4D869C" : "#333",
      backgroundColor: isActive ? "#F0F7FF" : "transparent",
      borderRadius: isActive ? "8px" : "0"
    };
  };

  const navLinks = (
    <>
      <NavLink style={styleNav} to="/">
        <li className="px-4 py-2 hover:bg-blue-50 transition-colors rounded-lg">Home</li>
      </NavLink>
      <NavLink style={styleNav} to="/allRooms">
        <li className="px-4 py-2 hover:bg-blue-50 transition-colors rounded-lg">Rooms</li>
      </NavLink>
      {user && (
        <NavLink style={styleNav} to="/myRooms">
          <li className="px-4 py-2 hover:bg-blue-50 transition-colors rounded-lg">My Booking</li>
        </NavLink>
      )}
      <NavLink style={styleNav} to="/about">
        <li className="px-4 py-2 hover:bg-blue-50 transition-colors rounded-lg">About Us</li>
      </NavLink>
      <NavLink style={styleNav} to="/contact">
        <li className="px-4 py-2 hover:bg-blue-50 transition-colors rounded-lg">Contact Us</li>
      </NavLink>
    </>
  );

  return (
    <div className="bg-white border-b border-gray-200 fixed z-50 w-full shadow-sm">
      <div className="container mx-auto px-4">
        <div className="navbar py-3">
          {/* Mobile menu button and logo */}
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white rounded-box w-52 space-y-1"
              >
                {navLinks}
              </ul>
            </div>
            <Link
              to="/"
              className="flex items-center gap-2 text-2xl font-bold text-[#4D869C] hover:text-[#3a6a7d] transition-colors"
            >
              <FaHotel className="text-2xl" />
              <span>WanderVenture</span>
            </Link>
          </div>

          {/* Desktop navigation */}
          <div className="navbar-center hidden lg:flex">
            <ul className="flex items-center space-x-1 px-1 text-base">{navLinks}</ul>
          </div>

          {/* User actions */}
          <div className="navbar-end space-x-4">
            {user ? (
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar hover:bg-blue-50 transition-colors"
                >
                  <div className="w-10 rounded-full border-2 border-[#4D869C]">
                    {user.photoURL ? (
                      <img alt={user.displayName} src={user.photoURL} />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-[#4D869C] text-white">
                        <FiUser size={20} />
                      </div>
                    )}
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 z-[1] p-4 shadow bg-white rounded-box w-64 space-y-3"
                >
                  <div className="px-2">
                    <h1 className="text-lg font-semibold truncate">{user.displayName || "User"}</h1>
                    <p className="text-sm text-gray-600 truncate">{user.email}</p>
                  </div>
                  <div className="divider my-1"></div>
                  <button
                    onClick={handleLogOut}
                    className="btn btn-sm w-full bg-[#4D869C] hover:bg-[#3a6a7d] text-white flex items-center gap-2"
                  >
                    <FiLogOut />
                    Log Out
                  </button>
                </ul>
              </div>
            ) : (
              <Link
                to="/login"
                className="btn bg-[#4D869C] hover:bg-[#3a6a7d] text-white px-6 py-2 rounded-lg transition-colors"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;