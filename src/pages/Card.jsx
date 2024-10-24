import React, { useContext } from "react";
import { CartContext } from "../App";
import { Link } from "react-router-dom";
import { FaBackspace } from "react-icons/fa";

function Cart() {
  const { cart, setCart } = useContext(CartContext);

  function handleRemov(id, color) {
    let copid = [...cart];
    copid = copid.filter(function (value) {
      return !(value.id == id && value.color == color);
    });

    setCart(copid);
    localStorage.setItem("cart", JSON.stringify(copid));
  }

  function handlechangecorent(count, id, color) {
    let copid = [...cart];
    copid = copid.map(function (value) {
      if (value.id == id && value.color == color) {
        value.count = Number(count);
      }
      return value;
    });

    setCart(copid);
    localStorage.setItem("cart", JSON.stringify(copid));
  }

  return (
    <div className="container pr-56 pb-10 pl-56">
      <h2 className="text-3xl pb-7 font-semibold text-slate-600 font-sans">
        Shopping Cart{" "}
      </h2>
      <h2 className="flex items-center gap-2 bg-slate-600 w-24 justify-center pt-1 pb-1 text-xl rounded-md text-white ">
        <FaBackspace />

        <Link to="/">Back</Link>
      </h2>
      <hr className="h-2 pb-7  w-[1130px] " />
      <div className="flex items-start justify-between">
        <div>
          {cart.length > 0 &&
            cart.map(function (value) {
              return (
                <div className="flex  w-4/4   p-5  rounded-xl shadow-md">
                  <div className="flex  gap-20 ">
                    <div>
                      <img
                        className="w-[140px] rounded-2xl h-[150px]"
                        src={value.data.attributes.image}
                        alt=""
                      />
                    </div>
                    <div className="flex gap-28  justify-between">
                      <div className="flex flex-col gap-4">
                        <h3 className="text-lg font-serif font  ">
                          {value.data.attributes.title}
                        </h3>
                        <p className="text-zinc-400">
                          {value.data.attributes.company}
                        </p>
                        color:{" "}
                        <span
                          style={{ backgroundColor: value.color }}
                          className={`block w-3 h-3 rounded-full cursor-pointer`}
                        ></span>
                      </div>
                      <div className="flex flex-col items-center">
                        <p>Amount</p>
                        <select
                          className="w-14 rounded-md border pl-2 pr-2"
                          value={value.count}
                          onChange={(e) => {
                            handlechangecorent(
                              e.target.value,
                              value.id,
                              value.color
                            );
                          }}
                        >
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                          <option>6</option>
                        </select>
                        <span
                          className="text-blue-500 cursor-pointer"
                          onClick={() => {
                            handleRemov(value.id, value.color);
                          }}
                        >
                          remove{" "}
                        </span>
                      </div>
                      <div className="price">
                        <h3>${value.data.attributes.price}</h3>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
        <div className="absolute ml-[800px]">
          <div className=" bg-blue-100 w-[330px] rounded-xl h-[220px]">
            <h2></h2>
            <div>
              {localStorage.getItem("token") ? (
                <button className="w-[300px] bg-blue-600 pt-3 pb-3 rounded-md text-white">
                  PRODUCT TO CHECOUT
                </button>
              ) : (
                <button className="w-[300px] bg-blue-600 pt-3 pb-3 rounded-md text-white">
                  <Link to="/login">
                    <p>PLAESE LOGIN</p>
                  </Link>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
