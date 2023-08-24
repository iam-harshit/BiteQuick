import React, { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { CiShoppingCart } from "react-icons/ci";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loginLogoutButton, setLoginLogoutButton] = useState("Login");
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="header w-full flex flex-col lg:flex-row justify-between border-b-2 p-2 lg:p-1">
      <div className="flex justify-between items-center w-full lg:w-auto">
        <div className="logo-container mb-4 lg:mb-0">
          <Link to="/">
            <img
              className="logo w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28"
              src={LOGO_URL}
              alt="Logo"
            />
          </Link>
        </div>

        {/* Hamburger Menu Icon for Mobile */}
        <button className="lg:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          <div className="h-1 w-6 bg-[#232121] my-1"></div>
          <div className="h-1 w-6 bg-[#232121] my-1"></div>
          <div className="h-1 w-6 bg-[#232121] my-1"></div>
        </button>
      </div>

      {/* Mobile and Tablet menu */}
      <div
        className={`flex flex-col items-start space-y-2 p-4 rounded-md ${
          menuOpen ? "block" : "hidden"
        } lg:hidden`}
      >
        <Link to="/" className="py-2">
          Home
        </Link>
        <Link to="/grocery" className="py-2">
          Grocery Mart
        </Link>
        <button
          className="auth-btn md:text-base py-2"
          onClick={() => {
            loginLogoutButton === "Login"
              ? setLoginLogoutButton("Logout")
              : setLoginLogoutButton("Login");
          }}
        >
          {loginLogoutButton}
        </button>
        <div className="relative py-4 flex items-center space-x-2">
          <Link to="/cart" className="relative z-10">
            <CiShoppingCart className="text-2xl" />
          </Link>
          <div className="bg-[#8DC73F] text-white text-sm font-bold rounded-full absolute -top-0 left-0 px-2">
            {cartItems.length}
          </div>
        </div>
      </div>

      {/* Desktop menu */}
      <div className="hidden lg:flex items-center">
        <ul className="flex lg:flex-row p-2 lg:p-5 space-y-2 lg:space-y-0 lg:space-x-4">
          <li className="px-3 py-2">
            <Link className="text-sm md:text-base" to="/">
              Home
            </Link>
          </li>
          <li className="px-3 py-2">
            <Link className="text-sm md:text-base" to="/grocery">
              Grocery Mart
            </Link>
          </li>
          <li className="px-3 py-2">
            <button
              className="auth-btn text-sm md:text-base"
              onClick={() => {
                loginLogoutButton === "Login"
                  ? setLoginLogoutButton("Logout")
                  : setLoginLogoutButton("Login");
              }}
            >
              {loginLogoutButton}
            </button>
          </li>
          <li className="relative px-3 py-2">
            <Link to="/cart" className="relative z-10">
              <CiShoppingCart className="text-xl md:text-2xl" />
            </Link>
            <div className="bg-[#8DC73F] text-white text-sm md:text-lg font-bold rounded-full absolute top-[-20px] md:top-[-17px] right-0 md:right-[5px] px-2">
              {cartItems.length}
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
