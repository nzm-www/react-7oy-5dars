import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { http } from "../axios";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  const usernameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const formRef = useRef();

  const handleRegister = (e) => {
    e.preventDefault();

    const user = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
      username: usernameRef.current.value,
    };

    http
      .post("auth/local/register", user)
      .then((res) => {
        if (res.data.jwt) {
          formRef.current.reset();
          navigate("/login"); 
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
          <h2 className="text-3xl font-bold">Register</h2>
          <span className="">
            <p className="text-[14px] pb-3">Username</p>
            <input
              ref={usernameRef}
              className="w-[320px] p-2 rounded-md bg-gray-50 border shadow-md pb-3"
              type="text"
            />
          </span>
          <span>
            <p className="text-[14px] pb-3">Email</p>
            <input
              ref={emailRef}
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
            REGISTER
          </button>
          <p className="flex items-center gap-2">
            Already a member?{" "}
            <Link to="/login" className="text-md text-blue-600 font-medium">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Register;
