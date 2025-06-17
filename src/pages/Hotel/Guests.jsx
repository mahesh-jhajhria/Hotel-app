import React, { useState } from 'react';
import { Search, Eye, Pencil, Trash2 } from 'lucide-react';

const guestsData = [
  { id: 1, name: 'Rahul Sharma', email: 'rahul@example.com', phone: '+91-9876543210', checkIn: '2025-04-20', checkOut: '2025-04-25' },
  { id: 2, name: 'Pooja Verma', email: 'pooja@example.com', phone: '+91-7894561230', checkIn: '2025-04-22', checkOut: '2025-04-24' },
  { id: 3, name: 'Amit Singh', email: 'amit@example.com', phone: '+91-9988776655', checkIn: '2025-04-23', checkOut: '2025-04-26' },
  { id: 4, name: 'Sanya Mehra', email: 'sanya@example.com', phone: '+91-9988991122', checkIn: '2025-04-21', checkOut: '2025-04-23' },
  { id: 5, name: 'Deepak Joshi', email: 'deepak@example.com', phone: '+91-7788996655', checkIn: '2025-04-24', checkOut: '2025-04-27' },
  { id: 6, name: 'Vikram Rana', email: 'vikram@example.com', phone: '+91-8877665544', checkIn: '2025-04-25', checkOut: '2025-04-28' },
  { id: 7, name: 'Neha Kapoor', email: 'neha@example.com', phone: '+91-6655443322', checkIn: '2025-04-26', checkOut: '2025-04-29' },
  { id: 8, name: 'Rohan Gupta', email: 'rohan@example.com', phone: '+91-5544332211', checkIn: '2025-04-27', checkOut: '2025-04-30' },
];

export default function GuestsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedGuest, setSelectedGuest] = useState(null);
  const itemsPerPage = 5;

  const filteredGuests = guestsData.filter((guest) =>
    guest.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination Logic
  const totalPages = Math.ceil(filteredGuests.length / itemsPerPage);
  const indexOfLastGuest = currentPage * itemsPerPage;
  const indexOfFirstGuest = indexOfLastGuest - itemsPerPage;
  const currentGuests = filteredGuests.slice(indexOfFirstGuest, indexOfLastGuest);

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const openModal = (guest) => {
    setSelectedGuest(guest);
  };

  const closeModal = () => {
    setSelectedGuest(null);
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Guests</h1>

      {/* Search Bar */}
      <div className="flex items-center mb-6">
        <div className="relative w-full max-w-md">
          <input
            type="text"
            placeholder="Search guests..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1); // search pe page 1 reset
            }}
            className="w-full pl-10 pr-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
        </div>
      </div>

      {/* Guests Table */}
      <div className="overflow-x-auto bg-white shadow rounded-xl">
        <table className="min-w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-3 px-6 text-left">Name</th>
              <th className="py-3 px-6 text-left">Email</th>
              <th className="py-3 px-6 text-left">Phone</th>
              <th className="py-3 px-6 text-left">Check-In</th>
              <th className="py-3 px-6 text-left">Check-Out</th>
              <th className="py-3 px-6 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentGuests.map((guest) => (
              <tr key={guest.id} className="border-b hover:bg-gray-50">
                <td className="py-3 px-6">{guest.name}</td>
                <td className="py-3 px-6">{guest.email}</td>
                <td className="py-3 px-6">{guest.phone}</td>
                <td className="py-3 px-6">{guest.checkIn}</td>
                <td className="py-3 px-6">{guest.checkOut}</td>
                <td className="py-3 px-6 text-center flex justify-center gap-4">
                  <button
                    onClick={() => openModal(guest)}
                    className="text-blue-500 hover:text-blue-700"
                  >
                    <Eye size={20} />
                  </button>
                  <button className="text-green-500 hover:text-green-700">
                    <Pencil size={20} />
                  </button>
                  <button className="text-red-500 hover:text-red-700">
                    <Trash2 size={20} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {filteredGuests.length === 0 && (
          <div className="text-center py-6 text-gray-500">
            No guests found.
          </div>
        )}
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-6 gap-4">
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
          >
            Previous
          </button>
          <span className="px-4 py-2">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}

      {/* Guest Detail Modal */}
      {selectedGuest && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl w-96">
            <h2 className="text-xl font-bold mb-4">Guest Details</h2>
            <div className="mb-4">
              <strong>Name: </strong> {selectedGuest.name}
            </div>
            <div className="mb-4">
              <strong>Email: </strong> {selectedGuest.email}
            </div>
            <div className="mb-4">
              <strong>Phone: </strong> {selectedGuest.phone}
            </div>
            <div className="mb-4">
              <strong>Check-In: </strong> {selectedGuest.checkIn}
            </div>
            <div className="mb-4">
              <strong>Check-Out: </strong> {selectedGuest.checkOut}
            </div>
            <button
              onClick={closeModal}
              className="px-4 py-2 bg-green-500 text-white rounded-xl"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
