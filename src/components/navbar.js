import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { NavLink } from 'react-router-dom';



const Navbar = () => {
  const [user, setUser] = useState(null);


  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const parsedUser = storedUser ? JSON.parse(storedUser) : null;
    setUser(parsedUser);

  }, []);

  console.log(user);
  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 shadow-md">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/" className="flex items-center">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8 mr-3"
            alt="Flowbite Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            The Secure Solutions
          </span>
        </Link>
        <div className="flex items-center md:order-2">
          {user ? (
            <div className="flex flex-row space-x-4">
              <div className="z-50 w-52 h-18 text-center py-3 my-4 bg-blue-200 rounded-lg shadow">
                <div className="text-lg font-bold">{user.username || user.registerName}</div>
                <div className="text-sm text-gray-500">{user.email || user.registerEmail}</div>
              </div>
              {(user.roleId === "1" || user.roleId === "2") && (
                
              <Link to='/dashboard'>
              <button
                className="z-50 w-40 h-12 text-center py-3 my-4 bg-blue-200 hover:bg-blue-500 rounded-lg shadow"
              >
                Dashboard
              </button>
              </Link>
              )}
              <button
                className="z-50 w-40 h-12 text-center py-3 my-4 bg-blue-200 hover:bg-blue-500 rounded-lg shadow"

                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          ) : (
            <Link to="/login">
              <div
                className="z-50 w-40 h-12 text-center text-zinc py-3 my-4 bg-yellow-400 hover:bg-blue-600  hover:text-gray-100   rounded-lg shadow"
                id="user-dropdown"
              >
                Login/Signup
              </div>
            </Link>
          )}
        </div>



        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-user"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  ` text-lg block py-2 pl-3 pr-4 rounded  md:p-0 dark:text-white  dark:border-gray-700 ${isActive ? 'dark:text-yellow-400' : 'text-gray-900'}`
                }
                aria-current="page"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  ` text-lg block py-2 pl-3 pr-4 rounded  md:p-0 dark:text-white  dark:border-gray-700 ${isActive ? 'dark:text-yellow-400' : 'text-gray-900'}`
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/apply"
                className={({ isActive }) =>
                  ` text-lg block py-2 pl-3 pr-4 rounded  md:p-0 dark:text-white  dark:border-gray-700 ${isActive ? ' dark:text-yellow-400' : 'text-gray-900'}`
                }
              >
                Apply for Job
              </NavLink>
            </li>
          </ul>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
