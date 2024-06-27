import axios from "axios";
import React, { useState } from "react";

const LoginForm = ({
  setIsLogin


}) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [loginEmail, setLoginEmail] = useState("");
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [loginPassword, setLoginPassword] = useState("");
  const [error, setError] = useState("");


  const handleLogin = async (e) => {
    e.preventDefault();
    console.log(loginEmail);

    try {
      // Make a GET request to fetch all users
      const response = await axios.post(
        "http://localhost:8000/api/v1/users/login",
        {
          email: loginEmail,
          password: loginPassword
        }
      );
      const users = response.data;

      // console.log(users);

      // Find the user with the matching email
      const user = users.data.user
      // console.log(user);

      // Check if the user exists and the password matches

      const { _id , userName, email, roleId } = user;

      console.log(roleId)
     
      localStorage.setItem("user", JSON.stringify({ _id, userName, email, roleId }));
      // Check the user role
      if (roleId === "1" || roleId === "2") {

        // Redirect to the dashboard
        window.location.href = "/dashboard";
      } else if (roleId === "3") {
        // Redirect to the landing page

        window.location.href = "/";
      }
      else {
        if (response && response.error) {
          setError(response.error)
          return;
        }
        else if (!loginEmail || !loginPassword) {
          setError("All input fields are Required!");
          return;
        }
        else {
          setError("Email/Password Doesn't match");
          return;
        }
      }
    } catch (error) {
      setError("Email/Password Doesn't match")
    }
  };
  return (
    <div className="border-4 rounded-2xl bg-gray-200 shadow-2xl flex flex-col w-full md:w-1/3 items-center max-w-4xl transition duration-1000 ease-out">
      <h2 className="p-3 text-3xl font-bold text-blue-600">
        The Secure Solutions
      </h2>
      <div className="inline-block border-[1px] justify-center w-20 border-blue-400 border-solid"></div>
      <h3 className="text-xl font-semibold text-blue-600 pt-2">Sign In!</h3>

      {/* Inputs */}
      <div className="flex flex-col items-center justify-center">
        <input
          type="email"
          className="rounded-2xl px-2 py-1  w-4/5 md:w-full border-[1px] border-blue-400 m-1 focus:shadow-md focus:border-pink-400 focus:outline-none focus:ring-0"
          placeholder="Email"
          value={loginEmail}
          onChange={(e) => {
            e.persist();
            e.preventDefault();
            setLoginEmail(e.target.value);
          }}
          id="emailInput" // Add the key prop with a unique value
        />
        <input
          type="password"
          className="rounded-2xl px-2 py-1 w-4/5 md:w-full border-[1px] border-blue-400 m-1 focus:shadow-md focus:border-pink-400 focus:outline-none focus:ring-0"
          placeholder="Password"
          value={loginPassword}
          onChange={(e) => setLoginPassword(e.target.value)}
          key="passwordInput" // Add the key prop with a unique value
        />
        {error && <p className="text-red-500">{error}</p>}
        <button
          className="rounded-2xl m-2 text-white bg-blue-400 w-2/5 px-4 py-2 shadow-md hover:text-blue-400 hover:bg-white transition duration-200 ease-in"
          onClick={handleLogin}
        >
          Sign In
        </button>
      </div>
      <div className="inline-block border-[1px] justify-center w-20 border-blue-400 border-solid"></div>
      <p className="text-gray-800 mt-4 text-sm">Don't have an account?</p>
      <p
        className="text-gray-800 mb-4 text-sm font-medium cursor-pointer"
        onClick={() => setIsLogin(false)}
      >
        Create a New Account?
      </p>
    </div>
  );
};

export default LoginForm;
