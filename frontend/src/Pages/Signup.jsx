import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/Login.css";

const Signup = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    role: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSignup = async () => {
    try {
      const response = await axios.get("http://localhost:3000/users");
      const users = response.data;

      const userExists = users.some(
        (user) => user.email === form.email || user.username === form.username
      );

      if (userExists) {
        alert("User already exists! Try logging in.");
        return;
      }

      await axios.post("http://localhost:3000/users", {
        username: form.username,
        email: form.email,
        password: form.password,
        role: form.role,
      });

      alert("Signup successful!");
      navigate("/login");
    } catch (error) {
      console.error("Error during signup:", error);
      alert("Something went wrong! Please try again later.");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="p-6 w-96 signup shadow-lg rounded-lg">
        <h1 className="text-2xl font-bold text-center mb-4">Sign Up</h1>
        <input
          type="text"
          name="username"
          value={form.username}
          onChange={handleInputChange}
          placeholder="Username"
          className="w-full p-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
        />
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleInputChange}
          placeholder="Email"
          className="w-full p-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
        />
        <input
          type="password"
          name="password"
          value={form.password}
          onChange={handleInputChange}
          placeholder="Password"
          className="w-full p-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
        />
        <select
          name="role"
          value={form.role}
          onChange={handleInputChange}
          className="w-full p-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
        >
          <option value="" disabled>
            Select Role
          </option>
          <option value="admin">Admin</option>
          <option value="user">User</option>
        </select>
        <button
          onClick={handleSignup}
          className="bg-violet-400 hover:bg-violet-600 text-white w-full py-2 rounded-lg"
        >
          Sign Up
        </button>
        <p className="mt-4 text-center">
          Already have an account?{" "}
          <a href="/login" className="text-violet-600 hover:underline">
            Log in here
          </a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
