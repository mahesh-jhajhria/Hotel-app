import { ChevronDown, ChevronUp, Hotel, BedDouble, CalendarCheck2, Utensils, Coffee, Package, ListOrdered, Table2, Contact, Users2, Settings } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [openMenu, setOpenMenu] = useState("");

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? "" : menu);
  };

  const menus = [
    
    { title: "Hotel", icon: <Hotel size={18} />, items: ["Bookings","Room","Guests","Staff","Reviews","Reports","Support", "Notification","Settings"] },
    { title: "Rooms", icon: <BedDouble size={18} />, items: ["Reports", "Charts", "Insights"] },
    { title: "Booking", icon: <CalendarCheck2 size={18} />, items: ["Reports", "Charts", "Insights"] },
    { title: "Restaurant", icon: <Utensils size={18} />, items: ["Reports", "Charts", "Insights"] },
    { title: "Cafe", icon: <Coffee size={18} />, items: ["Reports", "Charts", "Insights"] },
    { title: "Products", icon: <Package size={18} />, items: ["Reports", "Charts", "Insights"] },
    { title: "Menu Items", icon: <ListOrdered size={18} />, items: ["Reports", "Charts", "Insights"] },
    { title: "Table Booking", icon: <Table2 size={18} />, items: ["Reports", "Charts", "Insights"] },
    { title: "Restaurant Reservation", icon: <Contact size={18} />, items: ["Reports", "Charts", "Insights"] },
    { title: "Vendor", icon: <Users2 size={18} />, items: ["Reports", "Charts", "Insights"] },
    { title: "Settings", icon: <Settings size={18} />, items: ["Profile", "Account", "Privacy"] },
  ];

  return (
    <div className="w-64 bg-white dark:bg-zinc-900 text-zinc-900 top-0 dark:text-white h-screen shadow-lg  sticky flex flex-col">
      {/* Fixed Header */}
      <div className="p-5 border-b font-bold text-2xl block  bg-white dark:bg-zinc-900 z-50">
        🍃 Dashboard
      </div>

      {/* Scrollable Menu */}
      <nav className="flex-1 overflow-y-auto p-3  mt-[7px] space-y-4  font-semibold ">
        <Link to="/"  className="flex items-center space-x-2  hover:bg-green-500 gap-2 p-2 rounded-3xl text-sm "><BedDouble size={18} />Dashboard   </Link>
        {menus.map((menu, index) => (
          <div key={index}>
            <button
              onClick={() => toggleMenu(menu.title)}
              className="flex items-center justify-between w-full hover:text-green-60 hover:bg-green-500 p-2 rounded-3xl text-sm"
            >
              <div className="flex items-center space-x-2">
                <span>{menu.icon}</span>
                <span>{menu.title}</span>
              </div>
              {openMenu === menu.title ? <ChevronUp /> : <ChevronDown />}
            </button>
            {openMenu === menu.title && (
              <div className="ml-7 mt-2 space-y-1  text-sm font-serif flex-col flex gap-3 ">
                {menu.items.map((item, i) => (
                  <Link key={i} to={`/hotel/${item.toLowerCase()}`} className="block hover:text-green-500 font-merriweather text-xs ml-4  "> {item}</Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;

