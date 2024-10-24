import React, { useEffect, useState } from "react";
import { http } from "../axios";
import { useNavigate } from "react-router-dom";
function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    http
      .get("products?featured=true")
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
    <div className="container pl-56 pr-56 ">
      <div className="flex items-center justify-between gap-8 pb-12">
        <div>
          <h2 className="text-6xl pb-8 text-slate-500 font-bold">
            We are changing <br /> the way people <br /> shop
          </h2>
          <p className="text-lg text-slate-400 pb-9">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br />{" "}
            Tempore repellat explicabo enim soluta temporibus asperiores <br />{" "}
            aut obcaecati perferendis porro nobis.
          </p>
          <button className="border pl-4 pr-4 pt-3 pb-3 bg-blue-600 text-slate-300 font-sans rounded-xl">
            OUR PRODUCTS{" "}
          </button>
        </div>
        <div>
          <div className="carousel carousel-center bg-neutral rounded-box max-w-md space-x-4 p-4">
            <div className="carousel-item">
              <img
                src="https://react-vite-comfy-store-v2.netlify.app/assets/hero1-deae5a1f.webp
"
                className="rounded-box w-[320px] h-[416px]"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://react-vite-comfy-store-v2.netlify.app/assets/hero2-2271e3ad.webp
"
                className="rounded-box w-[320px] h-[416px]"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://react-vite-comfy-store-v2.netlify.app/assets/hero3-a83f0357.webp"
                className="rounded-box w-[320px] h-[416px]"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://react-vite-comfy-store-v2.netlify.app/assets/hero4-4b9de90e.webp
"
                className="rounded-box w-[320px] h-[416px]"
              />
            </div>
          </div>
        </div>
      </div>
      <h2 className="text-4xl pb-6">Featured products</h2>
      <hr className="" />
      <div className="flex items-center justify-center gap-5 pt-16">
        {products.length > 0 &&
          products.map(function (product) {
            return (
              <div>
                <div
                  className="shadow-md border  rounded-2xl text-center p-5"
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
  );
}

export default Home;
