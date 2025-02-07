import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/Login.css";
import { useAuth } from "../Context/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth(); // Use the login function from AuthContext
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState(""); // Track login errors

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogin = async () => {
    setError(""); 
    try {
      // Fetch users from JSON server
      const response = await axios.get("http://localhost:3000/users");
      const users = response.data;

      // Check if a user matches the provided credentials
      const user = users.find(
        (u) => u.email === form.email && u.password === form.password
      );

      if (user) {
        // Log in the user
        login(user);

        alert(`Login successful!`);
        navigate("/");
      } else {
        setError("Invalid email or password! Please try again.");
      }
    } catch (error) {
      console.error("Error during login:", error);
      setError("Something went wrong! Please try again later.");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="p-6 w-96 login shadow-lg rounded-lg">
        <h1 className="text-2xl font-bold text-center mb-4">Log in</h1>
        {error && <p className="text-red-500 text-sm text-center mb-4">{error}</p>}
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
        <button
          onClick={handleLogin}
          className="bg-violet-400 hover:bg-violet-600 text-white w-full py-2 rounded-lg"
        >
          Log in
        </button>
        <p className="mt-4 text-center">
          Don't have an account?{" "}
          <a href="/signup" className="text-violet-600 hover:underline">
            Sign Up here
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
