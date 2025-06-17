import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Reg = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    // Simulate registration success and redirect
    console.log("User Registered:", formData);
    navigate('/login');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded px-8 pt-6 pb-8 w-full max-w-sm"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>

        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

        <div className="mb-4">
          <label className="block text-gray-700 text-sm mb-2">Full Name</label>
          <input
            type="text"
            name="name"
            required
            className="w-full px-3 py-2 border rounded focus:outline-none"
            onChange={handleChange}
            value={formData.name}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm mb-2">Email</label>
          <input
            type="email"
            name="email"
            required
            className="w-full px-3 py-2 border rounded focus:outline-none"
            onChange={handleChange}
            value={formData.email}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm mb-2">Password</label>
          <input
            type="password"
            name="password"
            required
            className="w-full px-3 py-2 border rounded focus:outline-none"
            onChange={handleChange}
            value={formData.password}
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 text-sm mb-2">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            required
            className="w-full px-3 py-2 border rounded focus:outline-none"
            onChange={handleChange}
            value={formData.confirmPassword}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
        >
          Register
        </button>

        <p className="text-sm text-center mt-4">
          Already have an account?{" "}
          <span
            className="text-blue-600 cursor-pointer"
            onClick={() => navigate("/login")}
          >
            Login
          </span>
        </p>
      </form>
    </div>
  );
};

export default Reg;
