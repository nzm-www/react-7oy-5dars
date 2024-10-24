import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { http } from "../axios";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  const identifierRef = useRef();
  const passwordRef = useRef();
  const formRef = useRef();

  const handleRegister = (e) => {
    e.preventDefault();

    const user = {
      identifier: identifierRef.current.value,
      password: passwordRef.current.value,
    };

    http
      .post("auth/local", user)
      .then((data) => {
        if (data.status == 200) {
          localStorage.setItem("token", data.data.jwt);
          navigate("/");
        }
      })
      .catch((error) => {
        alert(error.response?.data?.error?.message || "Something went wrong");
      });
  };

  return (
    <div className="contaner pl-56  pr-56 flex items-center justify-center pt-[100px]">
      <div>
        <form
          onSubmit={handleRegister}
          ref={formRef}
          className="w-[390px] shadow-md rounded-[17px] items-center justify-center p-5 flex flex-col gap-7"
        >
          <h2 className="text-3xl font-bold">Logni</h2>

          <span>
            <p className="text-[14px] pb-3">Email</p>
            <input
              ref={identifierRef}
              className="w-[320px] p-2 rounded-md bg-gray-50 border shadow-md pb-3"
              type="email"
            />
          </span>
          <span>
            <p className="text-[14px] pb-3">Password</p>
            <input
              ref={passwordRef}
              className="w-[320px] p-2 rounded-md bg-gray-50 border shadow-md pb-3"
              type="password"
            />
          </span>
          <button
            type="submit"
            className="w-[300px] bg-blue-600 pt-3 pb-3 rounded-md text-white"
          >
            Login
          </button>
          <button className="w-[300px] bg-violet-900 pt-3 pb-3 rounded-md text-white">
            {" "}
            <Link to="/">
              <p> GUEST USER</p>{" "}
            </Link>{" "}
          </button>
          <p className="flex items-center gap-2">
            Already a member?{" "}
            <Link to="/register" className="text-md text-blue-600 font-medium">
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Register;
