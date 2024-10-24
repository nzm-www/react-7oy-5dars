import React from "react";

function About() {
  return (
    <div className="container gap-5 pl-56 text-center pr-56 ">
      <div className="text-center flex flex-col justify-center items-center">
        <b className="flex items-center gap-6 pb-6">
          <h2 className="text-6xl text-gray-600"> We love</h2>
          <span className="bg-blue-600 rounded-2xl pl-9 pr-9 pt-5 pb-5 text-4xl font-bold text-slate-200">
            comfy
          </span>
        </b>

        <p className="text-lg text-start">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quae
          quam <br /> blanditiis vitae, dolor non eveniet ipsum voluptatibus,
          quia optio aut! Perferendis <br /> ipsa cumque ipsam nostrum
          reprehenderit ad illo sed officiis ea tempore! Similique <br /> eos
          minima sit porro, ratione aspernatur!
        </p>
      </div>
    </div>
  );
}

export default About;
