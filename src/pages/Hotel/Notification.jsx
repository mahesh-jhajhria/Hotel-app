import React, { useState } from 'react';

const NotificationPage = () => {
  // Sample notification data (can be dynamic from an API or database)
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: 'Booking Confirmation',
      message: 'Your room booking for July 12, 2025 has been confirmed.',
      date: '2025-04-25',
      type: 'success',
    },
    {
      id: 2,
      title: 'Special Offer',
      message: 'Get 20% off on your next booking with promo code SUMMER20.',
      date: '2025-04-22',
      type: 'offer',
    },
    {
      id: 3,
      title: 'System Update',
      message: 'Our system will be undergoing maintenance on April 30, 2025 from 2 AM to 4 AM.',
      date: '2025-04-20',
      type: 'info',
    },
    {
      id: 4,
      title: 'Booking Reminder',
      message: 'Don’t forget your upcoming stay at our hotel on May 5, 2025.',
      date: '2025-04-18',
      type: 'reminder',
    },
  ]);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Notifications</h1>

      {/* Notifications List */}
      <div className="space-y-4">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className={`p-4 rounded-md border ${
              notification.type === 'success'
                ? 'border-green-300 bg-green-100'
                : notification.type === 'offer'
                ? 'border-yellow-300 bg-yellow-100'
                : notification.type === 'info'
                ? 'border-blue-300 bg-blue-100'
                : 'border-gray-300 bg-gray-100'
            }`}
          >
            <h3 className="text-lg font-semibold">{notification.title}</h3>
            <p>{notification.message}</p>
            <p className="text-sm text-gray-500 mt-2 font-">{`Date: ${notification.date}`}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotificationPage;
