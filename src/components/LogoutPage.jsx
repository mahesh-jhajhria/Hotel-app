import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LogoutPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem("token");
    setTimeout(() => navigate("/login"), 2000);
  }, [navigate]);

  return (
    <div className="flex items-center justify-center h-screen bg-white dark:bg-zinc-900">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
          Logged out successfully
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mt-2">
          Redirecting to login...
        </p>
      </div>
    </div>
  );
};

export default LogoutPage;
