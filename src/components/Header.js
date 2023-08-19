//In this way we can import named export component
import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { CiShoppingCart } from "react-icons/ci";

const Header = () => {
  const [loginLogoutButton, setLoginLogoutButton] = useState("Login");
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="header w-[100%] flex justify-between border-b-2">
      <div className="logo-container">
        <Link to="/">
          <img className="logo" src={LOGO_URL} width="100" height="100" />
        </Link>
      </div>
      <div className="flex items-center">
        <ul className="flex p-5">
          <li className="px-3 py-2">
            <Link to="/">Home</Link>
          </li>
          <li className="px-3 py-2">
            <Link to="/grocery">Grocery Mart</Link>
          </li>
          <li className="px-3 py-2">
            <button
              className="auth-btn"
              onClick={() => {
                loginLogoutButton === "Login"
                  ? setLoginLogoutButton("Logout")
                  : setLoginLogoutButton("Login");
              }}
            >
              {loginLogoutButton}
            </button>
          </li>
          <li className="px-3 py-2">
            <Link to="/cart">
              <CiShoppingCart className="text-2xl" />
            </Link>
            <div className="bg-[#8DC73F] text-white text-lg font-bold rounded-full relative top-[-48px] right-[-2px] px-2">
              {cartItems.length}
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
