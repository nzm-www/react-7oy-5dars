import React, { createContext, useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaMoon } from "react-icons/fa6";
import { GiShoppingCart } from "react-icons/gi";
import { CartContext } from "../App";

function Header() {
  const { cart, setCart } = useContext(CartContext);
  const [count, setCount] = useState(0);

  useEffect(() => {
    let sum = 0;
    cart.forEach((c) => {
      sum += Number(c.count);
    });
    setCount(sum);
  }, [cart]);

  return (
    <div className="pb-24">
      <div className=" pt-2 pb-2 bg-[#0c0c32] dark:bg-[#3c3c4f]">
        <div className="container gap-5 pl-56 pr-56 justify-end flex">
          <Link to="/login">
            <p className="text-slate-300 text-sm">Sign in / Guers</p>
          </Link>
          <Link to="/register">
            <p className="text-slate-300 text-sm">Create Account</p>
          </Link>
        </div>
      </div>
      <div className="bg-sky-50  pt-3 pb-3">
        <div className="container pl-56 pr-56">
          <div className="flex justify-between">
            <h2 className="text-4xl bg-blue-500 pl-4 pr-4 font-semibold rounded-md pt-1 pb-1 text-slate-300 font-sans">
              C
            </h2>
            <nav className="flex items-center ">
              <Link to="/">
                <p className="text-base  hover:bg-gray-800 hover:text-white hover:pt-1 pb-1 pr-3 pl-3 hover:rounded-md">
                  Home
                </p>
              </Link>
              <Link to="/about">
                <p className="text-base  hover:bg-gray-800 hover:text-white hover:pt-1 pb-1 pr-3 pl-3 hover:rounded-md">
                  About
                </p>
              </Link>
              <Link to="/products">
                {" "}
                <p className="text-base  hover:bg-gray-800 hover:text-white hover:pt-1 pb-1 pr-3 pl-3 hover:rounded-md">
                  Products
                </p>
              </Link>
              <Link to="/card">
                <p className="text-base  hover:bg-gray-800 hover:text-white hover:pt-1 pb-1 pr-3 pl-3 hover:rounded-md">
                  Card
                </p>
              </Link>
              {localStorage.getItem("token") && (
                <Link
                  to="/checkout"
                  className=" py-2 px-5 rounded-lg  text-[#394E6A] dark:text-white "
                >
                  Checkout
                </Link>
              )}

              {localStorage.getItem("token") && (
                <Link
                  to="/orders"
                  className=" py-2 px-5 rounded-lg  text-[#394E6A] dark:text-white "
                >
                  Orders
                </Link>
              )}
            </nav>
            <div className="flex items-center font-bold  gap-5 text-[24px]">
              <FaMoon />
              <GiShoppingCart />

              <h3 className="bg-blue-500  flex items-center justify-center text-sm absolute mb-8 ml-14  pr-[10px] pl-[10px] font-bold text-white rounded-2xl">
                {count}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
