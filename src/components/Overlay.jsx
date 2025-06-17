import React from 'react'
import { useState, useEffect } from "react";
import Sidebar from '../components/Sidebar';
import Header from "../components/Header";
import StatsCards from "../components/StatsCards";
import ChartSection from "../components/ChartSection";
import DataTable from "../components/DataTable";
import { Outlet } from 'react-router-dom';

function Overlay() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [darkMode, setDarkMode] = useState(false);
  
    useEffect(() => {       
      document.documentElement.classList.toggle("dark", darkMode);
    }, [darkMode]);
  return (
    <div className="flex bg-gray-100 dark:bg-zinc-900 min-h-screen">
    <div className={`fixed md:static z-40 transition-transform ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}>
      <Sidebar />
    </div>

    {/* Overlay */}
    {sidebarOpen && <div className="fixed inset-0 bg-black/50 z-30 md:hidden" onClick={() => setSidebarOpen(false)} />}

    <div className="flex-1 flex flex-col overflow-y-auto h-screen">
      <Header toggleSidebar={() => setSidebarOpen(!sidebarOpen)} isDark={darkMode} toggleDark={() => setDarkMode(!darkMode)} />
      <main className="p-6 space-y-6">
        <StatsCards />
        <ChartSection />
        <DataTable />
      </main>
      <main className="flex-1 p-6 ">
        <Outlet />
      </main>

    </div>
  </div>
  )
}

export default Overlay