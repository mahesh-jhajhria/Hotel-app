import React, { useState } from 'react';

const bookings = [
  { id: 1, guest: 'Rahul Sharma', roomType: 'Deluxe', checkIn: '2025-04-25', checkOut: '2025-04-28', amount: '$450', status: 'Confirmed' },
  { id: 2, guest: 'Aarav Mehta', roomType: 'Standard', checkIn: '2025-04-24', checkOut: '2025-04-26', amount: '$300', status: 'Pending' },
  { id: 3, guest: 'Priya Kapoor', roomType: 'Suite', checkIn: '2025-04-23', checkOut: '2025-04-27', amount: '$600', status: 'Cancelled' },
  { id: 4, guest: 'Vikram Singh', roomType: 'Deluxe', checkIn: '2025-04-26', checkOut: '2025-04-29', amount: '$470', status: 'Confirmed' },
  { id: 5, guest: 'Sneha Verma', roomType: 'Standard', checkIn: '2025-04-27', checkOut: '2025-04-30', amount: '$310', status: 'Confirmed' },
  { id: 6, guest: 'Karan Malhotra', roomType: 'Suite', checkIn: '2025-04-20', checkOut: '2025-04-24', amount: '$580', status: 'Pending' },
  { id: 7, guest: 'Neha Sinha', roomType: 'Standard', checkIn: '2025-04-21', checkOut: '2025-04-25', amount: '$320', status: 'Confirmed' },
  { id: 8, guest: 'Abhay Kumar', roomType: 'Deluxe', checkIn: '2025-04-22', checkOut: '2025-04-26', amount: '$460', status: 'Cancelled' },
];

export default function RecentBookingsTable() {
  const [searchTerm, setSearchTerm] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const getStatusColor = (status) => {
    switch (status) {
      case 'Confirmed':
        return 'bg-green-100 text-green-700';
      case 'Pending':
        return 'bg-yellow-100 text-yellow-700';
      case 'Cancelled':
        return 'bg-red-100 text-red-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  const filteredBookings = bookings.filter((booking) => {
    const guestMatch = booking.guest.toLowerCase().includes(searchTerm.toLowerCase());
    const startMatch = startDate ? new Date(booking.checkIn) >= new Date(startDate) : true;
    const endMatch = endDate ? new Date(booking.checkIn) <= new Date(endDate) : true;
    return guestMatch && startMatch && endMatch;
  });

  const totalPages = Math.ceil(filteredBookings.length / itemsPerPage);
  const indexOfLastBooking = currentPage * itemsPerPage;
  const indexOfFirstBooking = indexOfLastBooking - itemsPerPage;
  const currentBookings = filteredBookings.slice(indexOfFirstBooking, indexOfLastBooking);

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const exportToCSV = () => {
    const headers = ['Guest', 'Room Type', 'Check-In', 'Check-Out', 'Amount', 'Status'];
    const rows = filteredBookings.map((booking) => [
      booking.guest,
      booking.roomType,
      booking.checkIn,
      booking.checkOut,
      booking.amount,
      booking.status,
    ]);

    let csvContent = 'data:text/csv;charset=utf-8,'
      + headers.join(',') + '\n'
      + rows.map(e => e.join(',')).join('\n');

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', 'recent_bookings.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow mt-10">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-center w-full">Recent Bookings</h2>
      </div>

      {/* Filters and Export */}
      <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6">
        <input
          type="text"
          placeholder="Search by Guest Name..."
          className="w-full md:w-1/4 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <input
          type="date"
          className="w-full md:w-1/4 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
        <input
          type="date"
          className="w-full md:w-1/4 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
        <button
          onClick={exportToCSV}
          className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 w-full md:w-auto"
        >
          Export CSV
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 text-left text-gray-600">Guest</th>
              <th className="px-4 py-2 text-left text-gray-600">Room Type</th>
              <th className="px-4 py-2 text-left text-gray-600">Check-In</th>
              <th className="px-4 py-2 text-left text-gray-600">Check-Out</th>
              <th className="px-4 py-2 text-left text-gray-600">Amount</th>
              <th className="px-4 py-2 text-left text-gray-600">Status</th>
            </tr>
          </thead>
          <tbody>
            {currentBookings.map((booking) => (
              <tr key={booking.id} className="border-b hover:bg-gray-50">
                <td className="px-4 py-2">{booking.guest}</td>
                <td className="px-4 py-2">{booking.roomType}</td>
                <td className="px-4 py-2">{booking.checkIn}</td>
                <td className="px-4 py-2">{booking.checkOut}</td>
                <td className="px-4 py-2 font-semibold">{booking.amount}</td>
                <td className="px-4 py-2">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(booking.status)}`}>
                    {booking.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {currentBookings.length === 0 && (
          <div className="text-center py-8 text-gray-500">No bookings found!</div>
        )}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center mt-6 gap-4">
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 disabled:opacity-50"
          >
            Previous
          </button>
          <span className="text-gray-700">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}
