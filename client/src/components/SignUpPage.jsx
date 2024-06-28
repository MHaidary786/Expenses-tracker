import axios from "axios";
import React, { useState } from "react";

export default function SignUpPage() {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  function handleInputChange(e) {
    const { name, value } = e.target;
    setUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  const addnewUser = async (e) => {
    e.preventDefault();
    let newUser = user;

    try {
      let response = await axios.post(
        "http://localhost:4000/adduser",
        newUser,
        {
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
      console.log(response);
      console.log(newUser);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1 className="title-1">Expenses Tracker</h1>
      <h2 className="title-2">Sign in</h2>

      <form onSubmit={addnewUser}>
        <div className="sm:col-span-3">
          <label
            htmlFor="username"
            className="block text-6x font-medium leading-6 text-gray-900"
          >
            Username
          </label>
          <div className="mt-2">
            <input
              type="text"
              name="username"
              id="username"
              className="title block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              onChange={handleInputChange}
              value={user.username}
            />
          </div>
        </div>

        <div className="sm:col-span-3">
          <label
            htmlFor="password"
            className="block text-6x font-medium leading-6 text-gray-900"
          >
            Password
          </label>
          <div className="mt-2">
            <input
              type="password"
              name="password"
              id="password"
              className="title block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              onChange={handleInputChange}
              value={user.password}
            />
          </div>
        </div>

        <a className="passlink" href="www.google.com">
          Forgot your Password?
        </a>

        <br />
        <br />

        <div className="btns">
          <button type="button" className="login">
            Login
          </button>
          <button type="submit" className="create">
            Create Account
          </button>
        </div>
      </form>
    </div>
  );
}
