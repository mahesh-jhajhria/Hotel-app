

import React from 'react';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import RecentBookingsTable from './RecentBookingsTable';

const bookingsData = [
  { month: 'Jan', bookings: 120, revenue: 12000 },
  { month: 'Feb', bookings: 150, revenue: 15000 },
  { month: 'Mar', bookings: 200, revenue: 22000 },
  { month: 'Apr', bookings: 180, revenue: 19000 },
  { month: 'May', bookings: 220, revenue: 25000 },
  { month: 'Jun', bookings: 300, revenue: 32000 },
];

const roomsData = [
  { name: 'Deluxe', value: 400 },
  { name: 'Standard', value: 300 },
  { name: 'Suite', value: 200 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

export default function HotelDashboard() {
  return (
    <div className="p-6 bg-gray-100 min-h-screen ">
      <h1 className="text-xl font-bold mb-8 ">Hotel Admin Dashboard</h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
        <div className="bg-white shadow rounded-xl p-5 text-center">
          <h2 className="text-lg font-semibold mb-2">Total Bookings</h2>
          <p className="text-2xl font-bold text-blue-600">1170</p>
        </div>
        <div className="bg-white shadow rounded-xl p-5 text-center">
          <h2 className="text-lg font-semibold mb-2">Total Revenue</h2>
          <p className="text-2xl font-bold text-green-600">$1,20,000</p>
        </div>
        <div className="bg-white shadow rounded-xl p-5 text-center">
          <h2 className="text-lg font-semibold mb-2">Occupancy Rate</h2>
          <p className="text-2xl font-bold text-purple-600">85%</p>
        </div>
        <div className="bg-white shadow rounded-xl p-5 text-center">
          <h2 className="text-lg font-semibold mb-2">Today's Revenue</h2>
          <p className="text-2xl font-bold text-yellow-500">$5,200</p>
        </div>
      </div>

      {/* Main Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
        {/* Line Chart */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-4">Monthly Bookings</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={bookingsData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="bookings" stroke="#8884d8" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Bar Chart */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-4">Monthly Revenue</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={bookingsData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="revenue" fill="#82ca9d" barSize={50} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Room Type Pie Chart */}
      <div className="bg-white p-6 rounded-xl shadow max-w-2xl mx-auto">
        <h2 className="text-xl font-semibold mb-6 text-center">Room Wise Bookings</h2>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={roomsData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={100}
              fill="#8884d8"
              label
            >
              {roomsData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
        
       

      </div>
      <div className='mt-4 text-center'>
        <RecentBookingsTable />
        </div>
    </div>
  );
}
