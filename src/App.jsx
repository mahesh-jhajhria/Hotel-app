// import { useState, useEffect } from "react";
// import Header from "@/components/Header";
// import Sidebar from "@/components/Sidebar";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Reviews from "./pages/Hotel/Reviews";
// import Dashboard from "./pages/Hotel/Dashboard";

// import Guests from "./pages/Hotel/Guests";
// import Staff from "./pages/Hotel/Staff";
// import Room from "./pages/Hotel/Room";
// import Bookings from "./pages/Hotel/Bookings";
// import Reports from "./pages/Hotel/Reports";
// import SupportPage from "./pages/Hotel/Support";
// import Notification from "./pages/Hotel/Notification";
// import Settings from "./pages/Hotel/Settings";



// const App = () => {
  
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const [darkMode, setDarkMode] = useState(false);

//   useEffect(() => {
//     document.documentElement.classList.toggle("dark", darkMode);
//   }, [darkMode]);

//   return (
//     <Router>
//       <div className="flex  bg-gray-100 dark:bg-zinc-900 min-h-screen">
//         <div
//           className={`fixed md:static z-40 transition-transform ${
//             sidebarOpen ? "translate-x-0" : "-translate-x-full"
//           } md:translate-x-0`}
//         >
//           <Sidebar />
//         </div>
//         {/* Overlay */}
//         {sidebarOpen && (
//           <div
//             className="fixed inset-0 bg-black/50 z-30 md:hidden"
//             onClick={() => setSidebarOpen(false)}
//           />
//         )}

//         <div className="flex-1 flex flex-col overflow-y-auto h-screen">
//           <Header
//             toggleSidebar={() => setSidebarOpen(!sidebarOpen)}
//             isDark={darkMode}
//             toggleDark={() => setDarkMode(!darkMode)}
//           />
//           <Routes>
//             <Route path="/hotel/dashboard" element={<Dashboard />} />
//             <Route path="/hotel/bookings" element={<Bookings />} />
//             <Route path="/hotel/room" element={<Room />} />
//             <Route path="/hotel/guests" element={<Guests />} />
//             <Route path="/hotel/staff" element={<Staff />} />
//             <Route path="/hotel/reviews" element={<Reviews />} />
//             <Route path="/hotel/reports" element={<Reports />} />
//             <Route path="/hotel/support" element={<SupportPage />} />

//             <Route path="/hotel/notification" element={<Notification />} />
//             <Route path="/hotel/settings" element={<Settings />} />
        
//           </Routes>
//         </div>
        
//       </div>
      

//     </Router>
//   );
// };

// export default App;

import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Dashboard from "./pages/Hotel/Dashboard";
import LogoutPage from "./components/LogoutPage";


import Login from "./pages/Login/Login";
import Reg from "./pages/Login/Reg";
import BookingPage from "./pages/Hotel/Bookings";
// other pages ...

function LayoutWrapper() {
  const location = useLocation();

  const noLayoutRoutes = ["/login", "/logout", "/reg"];
  const hideLayout = noLayoutRoutes.includes(location.pathname);

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <div className="min-h-screen">
      {!hideLayout ? (
        <div className="flex bg-gray-100 dark:bg-zinc-900 min-h-screen">
          <div className="fixed md:static z-40">
            <Sidebar />
          </div>

          <div className="flex-1 flex flex-col overflow-y-auto">
            <Header
              toggleSidebar={() => setSidebarOpen(!sidebarOpen)}
              isDark={darkMode}
              toggleDark={() => setDarkMode(!darkMode)}
            />
            <Routes>
              <Route path="/" element={<Dashboard />} />
             <Route path="/hotel/bookings" element={<BookingPage/>}/>
              {/* other hotel pages */}
            </Routes>
          </div>
        </div>
      ) : (
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<LogoutPage />} />
          <Route path="/reg" element={<Reg />} />
        </Routes>
      )}
    </div>
  );
}

const App = () => {
  return (
    <Router>
      <LayoutWrapper />
    </Router>
  );
};

export default App;




