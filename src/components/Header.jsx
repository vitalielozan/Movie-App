import React from "react";
import { Link } from "react-router";

function Header() {
  return (
    <div className="navbar bg-gray-100 text-gray-800 shadow-md dark:bg-base-100 dark:text-gray-100">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-xl font-bold">
          VitalFlix
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal mx-1 px-2">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/favorites">Favorites</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
