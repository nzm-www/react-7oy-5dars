import React, { useContext, useEffect, useState } from "react";
import { Link, json, useLocation, useParams } from "react-router-dom";
import { http } from "../axios";
import { FaChevronRight } from "react-icons/fa";
import "react-toastify/dist/ReactToastify.css";

import { CartContext } from "../App";
function Detaines() {
  const [product, setProduct] = useState({});
  const [color, setColor] = useState("");
  const [count, setCount] = useState();
  const params = useParams();
  const { id } = params;
  const { cart, setCart } = useContext(CartContext);

  useEffect(() => {
    http
      .get(`products/${id}`)
      .then((data) => {
        if (data.status == 200) {
          console.log(data.data.data);
          setProduct(data.data.data);
          setColor(data.data.data.attributes.colors[0]);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function handleSetCart(e) {
    e.preventDefault();
    let data = {
      count: Number(count),
      color: color,
      id: product.id,
      data: product,
    };

    let copid = [...cart];
    let isExist = copid.find(function (c) {
      return c.id === data.id && color == c.color;
    });

    if (!isExist) {
      copid = [...cart, data];
    } else {
      copid = copid.map(function (value) {
        if (value.id == data.id && value.color == color) {
          value.count = Number(value.count);
          value.count += Number(data.count);
        }

        return value;
      });
    }
    setCart(copid);
    localStorage.setItem("cart", JSON.stringify(copid));
  }

  return (
    <div className="container  pl-56 pb-11 pr-56">
      <div className="flex gap-4 text-1xl items-center text-gray-600 pb-8 ">
        <Link to="/">
          <p>Home</p>
        </Link>
        <p className="felex items-center text-sm font-thin">
          <FaChevronRight />
        </p>

        <Link to="/products">
          <p>Products</p>
        </Link>
      </div>
      {product.id && (
        <>
          <div className=" flex items-start gap-16   ">
            <img
              src={product.attributes.image}
              className="w-[530px] h-[400px] rounded-lg"
            />
            <div className="flex flex-col">
              <h3 className="text-3xl uppercase font-bold pb-3">
                {product.attributes.title}
              </h3>
              <h3 className="font-sans text-xl text-slate-300 pb-4 font-extrabold">
                {product.attributes.company}
              </h3>

              <h3 className="text-xl pb-5">$ {product.attributes.price}</h3>
              <h3 className="w-[450px] text-lg font-thin ">
                {product.attributes.description}
              </h3>
              <div>
                <p className="pt-5 text-lg text-slate-500 pb-3 font-semibold font-sans">
                  Colors
                </p>
              </div>
              <div className="flex gap-1">
                {product.attributes.colors.length > 0 &&
                  product.attributes.colors.map((coloProduct) => {
                    return (
                      <span
                        key={coloProduct.id}
                        style={{
                          backgroundColor: coloProduct,
                          border:
                            color == coloProduct ? "2px solid black" : "none",
                        }}
                        className={`block w-6 h-6  rounded-full cursor-pointer`}
                        onClick={() => {
                          setColor(coloProduct);
                        }}
                      ></span>
                    );
                  })}
              </div>
              <div>
                <p className="pt-5 text-lg text-slate-500 pb-3">Amount</p>
                <select
                  value={count}
                  onChange={(e) => {
                    setCount(e.target.value);
                  }}
                  className="w-72 bg-slate-100 pt-3 pb-3 pr-3 rounded-md border pl-3"
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                </select>
              </div>
              <div className="pt-9 ">
                <button
                  onClick={handleSetCart}
                  className="bg-blue-600 p-3 rounded-md text-sm text-slate-200 font-semibold"
                >
                  ADD TO BAG
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Detaines;
