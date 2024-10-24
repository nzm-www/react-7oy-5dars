// src/components/ProductFilter.jsx
import React, { useState } from "react";

function ProductFilter({ onSearch }) {
  const [price, setPrice] = useState(1000);

  const handleSliderChange = (event) => {
    setPrice(event.target.value);
  };

  return (
    <div className="container pr-56 pl-56 flex items-center justify-center">
      <div className="bg-blue-50 w-[1200px] pl-8 pr-8 pb-5 pt-5 rounded-md ">
        <div className="flex flex-col justify-between ">
          <div className="flex gap-10  pb-5 items-center">
            <div className="flex  flex-col ">
              <p className="pb-3 font-normal text-base ">Search Product</p>
              <input
                type="text"
                className="w-60 text-clip font-semibold p-1 pr-2 pl-2 rounded-md border"
              />
            </div>
            <div>
              <p className="pb-3 font-normal text-base ">Select Category</p>
              <select className="w-60 text-clip font-semibold p-1 pr-2 pl-2 rounded-md border">
                <option value="all">all</option>
                <option value="">Tables</option>
                <option value="">Chairs</option>
                <option value="">Kids</option>
                <option value="">Sofas</option>
                <option value="">Beds</option>
              </select>
            </div>
            <div>
              <p className="pb-3 font-normal text-base ">Select Company</p>
              <select className="w-60 text-clip font-semibold p-1 pr-2 pl-2 rounded-md border">
                <option value="all">all</option>
                <option value="">Modenza</option>
                <option value="">Luxora</option>
                <option value="">Aftifex</option>
                <option value="">Comfora</option>
                <option value="">Homestead</option>
              </select>
            </div>
            <div>
              <p className="pb-3 font-normal text-base ">Sort By</p>
              <select className="w-60 text-clip font-semibold p-1 pr-2 pl-2 rounded-md border">
                <option value="all">a-z</option>
                <option value="">z-a</option>
                <option value="">ligh</option>
                <option value="">low</option>
              </select>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="  w-[240px]">
              <div className="flex justify-between pb-3">
                <h2 className="text-sm font-normal">Select Price</h2>
                <span>${price}.00</span>
              </div>
              <input
                type="range"
                min="0"
                max="1000"
                value={price}
                onChange={handleSliderChange}
                className="w-full h-5 bg-blue-600 rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex items-center justify-between">
                <span>0</span>
                <span className="text-sm font-semibold">Max: $1,000.00</span>
              </div>
            </div>
            <div className="text-center flex flex-col gap-2">
              <p className="text-sm">Free Shipping</p>
              <div class="dark:bg-black/10">
                <label className="text-white">
                  <input
                    className="dark:border-white-400/20 dark:scale-100 transition-all duration-500 ease-in-out dark:hover:scale-110 dark:checked:scale-100 w-5 h-5 "
                    type="checkbox"
                  />
                </label>
              </div>
            </div>
            <div className="flex gap-5">
              <button className="  rounded-md font-semibold text-base  pl-24 pr-24 pt-1 pb-1 text-gray-200 bg-blue-500">
                SEARCH
              </button>
              <button className="  rounded-md font-semibold text-base  pl-24 pr-24 pt-1 pb-1 text-gray-200 bg-fuchsia-500">
                RESET
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductFilter;
