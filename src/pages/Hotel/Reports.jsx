import React, { useState } from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';

// Registering the necessary components for Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement);

const ReportsPage = () => {
  // Sample report data (can be dynamic based on actual data)
  const [reportData, setReportData] = useState({
    bookingData: [30, 45, 50, 65, 70, 80], // Example booking data
    roomStatusData: [50, 30, 20], // Example room status data (Available, Booked, Under Maintenance)
    reviewRatingData: [50, 30, 10, 5, 5], // Review ratings data (1-5 stars)
  });

  // Booking Chart Data (Bar chart)
  const bookingChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Bookings',
        data: reportData.bookingData,
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  // Room Status Chart Data (Pie chart)
  const roomStatusChartData = {
    labels: ['Available', 'Booked', 'Under Maintenance'],
    datasets: [
      {
        data: reportData.roomStatusData,
        backgroundColor: ['rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)', 'rgba(255, 255, 0, 0.5)'],
        borderColor: ['green', 'red', 'yellow'],
        borderWidth: 1,
      },
    ],
  };

  // Review Ratings Chart Data (Pie chart)
  const reviewRatingChartData = {
    labels: ['1 Star', '2 Stars', '3 Stars', '4 Stars', '5 Stars'],
    datasets: [
      {
        data: reportData.reviewRatingData,
        backgroundColor: ['rgba(255, 99, 132, 0.5)', 'rgba(54, 162, 235, 0.5)', 'rgba(255, 206, 86, 0.5)', 'rgba(75, 192, 192, 0.5)', 'rgba(153, 102, 255, 0.5)'],
        borderColor: ['red', 'blue', 'yellow', 'green', 'purple'],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Hotel Reports</h1>

      {/* Booking Report Chart */}
      <div className="mb-6 p-28">
        <h2 className="text-xl font-bold mb-4">Monthly Booking Report</h2>
        <Bar data={bookingChartData} options={{ responsive: true, plugins: { title: { display: true, text: 'Bookings Over the Months' } } }} />
      </div>

      {/* Room Status Report Chart */}
      <div className="mb-6 p-28">
        <h2 className="text-xl font-bold mb-4">Room Status Report</h2>
        <Pie data={roomStatusChartData} options={{ responsive: true, plugins: { title: { display: true, text: 'Room Availability and Status' } } }} />
      </div>

      {/* Customer Reviews Rating Report */}
      <div className="mb-6 p-28">
        <h2 className="text-xl font-bold mb-4">Customer Reviews Rating</h2>
        <Pie data={reviewRatingChartData} options={{ responsive: true, plugins: { title: { display: true, text: 'Review Ratings Distribution' } } }} />
      </div>
    </div>
  );
};

export default ReportsPage;
