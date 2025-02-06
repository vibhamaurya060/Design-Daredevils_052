
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Login.css'
const Login = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogin = () => {
    const users = JSON.parse(localStorage.getItem("users")) || {};
    const user = Object.values(users).find(
      (user) => user.email === form.email && user.password === form.password
    );

    if (user) {
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("currentUser", user.email);
      alert("Login successful!");
      navigate("/");
    } else {
      alert("Invalid credentials! Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="p-6 w-96 login shadow-lg rounded-lg">
        <h1 className="text-2xl font-bold text-center mb-4">Log in</h1>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleInputChange}
          placeholder="Email"
          className="w-full p-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="password"
          name="password"
          value={form.password}
          onChange={handleInputChange}
          placeholder="Password"
          className="w-full p-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
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
