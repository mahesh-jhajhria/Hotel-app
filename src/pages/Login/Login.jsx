import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate 3 second delay
    setTimeout(() => {
      setLoading(false);
      // Navigate after delay
      navigate('/hotel/dashboard');
    }, 3000);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleLogin}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 w-full max-w-sm"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm mb-2">Email</label>
          <input
            type="email"
            className="w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:ring focus:ring-green-200"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={loading}
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 text-sm mb-2">Password</label>
          <input
            type="password"
            className="w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:ring focus:ring-green-200"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            disabled={loading}
          />
        </div>


        <button
          type="submit"
          className={`w-full bg-green-600 text-white py-2 rounded transition ${loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-green-700'}`}
          disabled={loading}
        >
          {loading ? 'Logging in...' : 'Login'}
        </button>

        <p className="text-sm text-center text-gray-600 dark:text-gray-400 mt-4">
          Don&apos;t have an account?{" "}
          <span
            onClick={() => navigate("/reg")}
            className="text-green-600 hover:underline cursor-pointer"
          >
            Register
          </span>
        </p>
      </form>
    
    </div>
  );
};

export default Login;
