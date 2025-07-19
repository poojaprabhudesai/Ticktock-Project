import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Welcome() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
     try {
      const res = await fetch("http://localhost:3001/users");
      const users = await res.json();

      const matchedUser = users.find(
        (user) =>
          user.email === formData.email && user.password === formData.password
      );

      if (matchedUser) {
        const dummyToken = "mock-token-123456";

        if (formData.remember) {
          sessionStorage.setItem("authToken", dummyToken);
        }

        alert("Login successful!");
        navigate("/table");
      } else {
        alert("Invalid email or password.");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Something went wrong. Please try again.");
    }

   
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* Left: Login Form */}
      <div className="flex-1 flex items-center justify-left p-6 bg-white">
        <div className="w-full max-w-md">
          <h2 className="text-4xl font-extrabold mb-6">Welcome back</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block mb-1 font-medium">Email:</label>
              <input
                type="email"
                name="email"
                placeholder="name@example.com"
                className="w-full border border-gray-300 p-2 rounded"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">Password:</label>
              <input
                type="password"
                name="password"
                className="w-full border border-gray-300 p-2 rounded"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="remember"
                name="remember"
                checked={formData.remember}
                onChange={handleChange}
                className="w-4 h-4"
              />
              <label htmlFor="remember" className="text-sm text-gray-600 p-2">
                Remember me
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
            >
              Login
            </button>
          </form>
        </div>
      </div>

      {/* Right: Info Panel */}
      <div className="flex-1 bg-blue-600 text-white flex items-center justify-left p-15 ">
        <div className="max-w-md text-left">
          <h1 className="text-3xl font-bold mb-4">ticktock</h1>
          <p className="text-lg">
            Introducing ticktock, our cutting-edge timesheet web application
            designed to revolutionize how you manage employee work hours.
            Effortlessly track attendance and productivity from anywhere, anytime.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
