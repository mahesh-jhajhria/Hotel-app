import { Menu, Bell,} from "lucide-react";
import { useState } from "react";

import { Link } from "react-router-dom";

const Header = ({ toggleSidebar,}) => {
  const [profileOpen, setProfileOpen] = useState(false);

  return (
    <header className="flex items-center justify-between bg-white dark:bg-zinc-800 px-6 py-4 top-0 z-50  sticky shadow-md">
      <button className="md:hidden  text-green-600" onClick={toggleSidebar}>
        <Menu />
      </button>

      <h1 className="text-xl font-semibold text-green-700 dark:text-white">
        📋 Dashboard
      </h1>

      <div className="flex items-center space-x-4">
      
        <Bell className="text-green-600 dark:text-green-300" />
        <div className="relative">
          <button
            onClick={() => setProfileOpen(!profileOpen)}
            className="w-8 h-8 rounded-full bg-green-600 text-white flex items-center justify-center"
          >
            U
          </button>
          {profileOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-white dark:bg-zinc-700 rounded shadow p-2">
              <a
                href="#"
                className="block hover:bg-green-100 dark:hover:bg-zinc-600 p-2"
              >
                Profile
              </a>
              <Link
                to="/logout"
                 className="block hover:bg-green-100 dark:hover:bg-zinc-600 p-2"
              >
                {" "}
                Logout
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;


