import React, { useState } from 'react';

const Settings = () => {
  const [formData, setFormData] = useState({
    fullName: 'John Doe',
    email: 'john@example.com',
    password: '',
    notifications: true,
    profilePicture: '',
    language: 'en',
    phone: '',
    darkMode: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : type === 'file' ? URL.createObjectURL(files[0]) : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Settings Updated:', formData);
    alert("Settings saved successfully!");
    // You can also call an API here to save the settings to your backend.
  };

  return (
    <div className="p-6 w-full mx-auto">
      <h2 className="text-2xl font-bold mb-6">Settings</h2>

      <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-lg shadow-md">
        {/* Profile Picture */}
        <div>
          <label className="block text-sm font-medium mb-1">Profile Picture</label>
          {formData.profilePicture && (
            <img src={formData.profilePicture} alt="Profile Preview" className="w-20 h-20 rounded-full mb-2" />
          )}
          <input
            type="file"
            name="profilePicture"
            accept="image/*"
            onChange={handleChange}
            className="w-full"
          />
        </div>

        {/* Full Name */}
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="fullName">
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            required
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="email">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            required
          />
        </div>

        {/* Phone Number */}
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="phone">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            placeholder="e.g. +91 9876543210"
          />
        </div>

        {/* Password */}
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="password">
            Change Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
          />
          <p className="text-xs text-gray-500 mt-1">Leave blank if you don’t want to change it.</p>
        </div>

        {/* Notifications */}
        <div className="flex items-center">
          <input
            type="checkbox"
            id="notifications"
            name="notifications"
            checked={formData.notifications}
            onChange={handleChange}
            className="mr-2"
          />
          <label htmlFor="notifications">Enable Email Notifications</label>
        </div>

        {/* Dark Mode */}
       {/* <div className="flex items-center">
          <input
            type="checkbox"
            id="darkMode"
            name="darkMode"
            checked={formData.darkMode}
            onChange={handleChange}
            className="mr-2"
          />
          <label htmlFor="darkMode">Enable Dark Mode</label>
        </div> */}

        {/* Language */}
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="language">
            Language
          </label>
          <select
            id= "language"
            name="language"
            value={formData.language}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
          >
            <option value="en">English</option>
            <option value="hi">Hindi</option>
            <option value="es">Spanish</option>
            <option value="fr">French</option>
          </select>
        </div>

        {/* Save Button */}
        <div>
          <button
            type="submit"
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            Save Settings
          </button>
        </div>
      </form>
    </div>
  );
};

export default Settings;
