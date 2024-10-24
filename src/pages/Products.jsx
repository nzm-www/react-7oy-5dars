import React, { useState } from "react";
import { useEffect } from "react";
import { http } from "../axios";
import { useNavigate } from "react-router-dom";
import ProductFilter from "../components/ProductFilter";
function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    http
      .get("products")
      .then((data) => {
        if (data.status == 200) {
          setProducts(data.data.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const navigate = useNavigate();
  function handleRadirect(id) {
    navigate(`/products/${id}`);
  }
  return (
    <div>
    <ProductFilter/>
      <div className="container pr-56 pl-56">
        <div className=" flex flex-wrap items-center justify-center gap-5 pt-16">
          {products.length > 0 &&
            products.map(function (product) {
              return (
                <div>
                  <div
                    className="shadow-md border hover:shadow-2xl hover:transf     rounded-2xl text-center p-5"
                    onClick={() => {
                      handleRadirect(product.id);
                    }}
                  >
                    <img
                      className="w-[300px] cursor-pointer h-48 rounded-2xl"
                      src={product.attributes.image}
                      alt=""
                    />
                    <h3 className="text-2xl font-bold font-sans pt-9 pb-4 ">
                      {product.attributes.title}
                    </h3>
                    <h3 className="font-sans text-lg">
                      ${product.attributes.price}
                    </h3>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default Products;
