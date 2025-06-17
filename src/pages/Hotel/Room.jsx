import React, { useState } from 'react';
import { Search, Eye, Pencil, Trash2 } from 'lucide-react';

const roomData = [
  { id: 1, roomNumber: '101', type: 'Single', price: '₹3000', status: 'Available', features: 'AC, TV, Wi-Fi' },
  { id: 2, roomNumber: '102', type: 'Double', price: '₹5000', status: 'Booked', features: 'AC, TV, Wi-Fi, Balcony' },
  { id: 3, roomNumber: '103', type: 'Suite', price: '₹8000', status: 'Available', features: 'AC, TV, Wi-Fi, Mini Bar' },
  { id: 4, roomNumber: '104', type: 'Double', price: '₹4000', status: 'Booked', features: 'AC, TV, Wi-Fi' },
  { id: 5, roomNumber: '105', type: 'Single', price: '₹2500', status: 'Available', features: 'AC, TV' },
  { id: 6, roomNumber: '106', type: 'Single', price: '₹2800', status: 'Available', features: 'AC, TV' },
  { id: 7, roomNumber: '107', type: 'Double', price: '₹4500', status: 'Booked', features: 'AC, TV' },
  { id: 8, roomNumber: '108', type: 'Suite', price: '₹8500', status: 'Available', features: 'AC, TV, Wi-Fi, Mini Bar' },
  { id: 9, roomNumber: '109', type: 'Double', price: '₹5000', status: 'Available', features: 'AC, TV, Wi-Fi' },
  { id: 10, roomNumber: '110', type: 'Single', price: '₹3200', status: 'Booked', features: 'AC, TV' },
];

const roomsPerPage = 3;

export default function RoomPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [editRoom, setEditRoom] = useState(null);
  const [newRoomData, setNewRoomData] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const filteredRooms = roomData.filter((room) =>
    room.roomNumber.includes(searchTerm) || room.type.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredRooms.length / roomsPerPage);
  
  const currentRooms = filteredRooms.slice(
    (currentPage - 1) * roomsPerPage,
    currentPage * roomsPerPage
  );

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const openModal = (room) => {
    setSelectedRoom(room);
  };

  const closeModal = () => {
    setSelectedRoom(null);
  };

  const handleEditClick = (room) => {
    setEditRoom(room);
    setNewRoomData(room); // prefill the data
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setNewRoomData({ ...newRoomData, [name]: value });
  };

  const handleSaveEdit = () => {
    const updatedRooms = roomData.map((room) =>
      room.id === newRoomData.id ? newRoomData : room
    );
    setEditRoom(null);
    setNewRoomData(null);
    // Update state or API call
  };

  const handleDelete = (id) => {
    const updatedRooms = roomData.filter(room => room.id !== id);
    // Update state or API call
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Rooms</h1>

      {/* Search Bar */}
      <div className="flex items-center mb-6">
        <div className="relative w-full max-w-md">
          <input
            type="text"
            placeholder="Search rooms..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
        </div>
      </div>

      {/* Rooms Table */}
      <div className="overflow-x-auto bg-white shadow rounded-xl">
        <table className="min-w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-3 px-6 text-left">Room Number</th>
              <th className="py-3 px-6 text-left">Type</th>
              <th className="py-3 px-6 text-left">Price</th>
              <th className="py-3 px-6 text-left">Status</th>
              <th className="py-3 px-6 text-left">Features</th>
              <th className="py-3 px-6 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentRooms.map((room) => (
              <tr key={room.id} className="border-b hover:bg-gray-50">
                <td className="py-3 px-6">{room.roomNumber}</td>
                <td className="py-3 px-6">{room.type}</td>
                <td className="py-3 px-6">{room.price}</td>
                <td className="py-3 px-6">{room.status}</td>
                <td className="py-3 px-6">{room.features}</td>
                <td className="py-3 px-6 text-center flex justify-center gap-4">
                  <button
                    onClick={() => openModal(room)}
                    className="text-blue-500 hover:text-blue-700"
                  >
                    <Eye size={20} />
                  </button>
                  <button
                    onClick={() => handleEditClick(room)}
                    className="text-green-500 hover:text-green-700"
                  >
                    <Pencil size={20} />
                  </button>
                  <button
                    onClick={() => handleDelete(room.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <Trash2 size={20} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {currentRooms.length === 0 && (
          <div className="text-center py-6 text-gray-500">
            No rooms found.
          </div>
        )}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-4">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-300 text-gray-600 rounded-md mr-2"
        >
          Prev
        </button>
        <span className="flex items-center text-lg">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-gray-300 text-gray-600 rounded-md ml-2"
        >
          Next
        </button>
      </div>

      {/* Modal for Room Details */}
      {selectedRoom && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl w-96">
            <h2 className="text-xl font-bold mb-4">Room Details</h2>
            <div className="mb-4">
              <strong>Room Number: </strong> {selectedRoom.roomNumber}
            </div>
            <div className="mb-4">
              <strong>Type: </strong> {selectedRoom.type}
            </div>
            <div className="mb-4">
              <strong>Price: </strong> {selectedRoom.price}
            </div>
            <div className="mb-4">
              <strong>Status: </strong> {selectedRoom.status}
            </div>
            <div className="mb-4">
              <strong>Features: </strong> {selectedRoom.features}
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

      {/* Edit Modal */}
      {editRoom && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl w-96">
            <h2 className="text-xl font-bold mb-4">Edit Room</h2>
            <div className="mb-4">
              <label htmlFor="roomNumber" className="block">Room Number</label>
              <input
                type="text"
                name="roomNumber"
                value={newRoomData.roomNumber}
                onChange={handleEditChange}
                className="w-full px-4 py-2 border rounded-lg"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="type" className="block">Type</label>
              <input
                type="text"
                name="type"
                value={newRoomData.type}
                onChange={handleEditChange}
                className="w-full px-4 py-2 border rounded-lg"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="price" className="block">Price</label>
              <input
                type="text"
                name="price"
                value={newRoomData.price}
                onChange={handleEditChange}
                className="w-full px-4 py-2 border rounded-lg"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="status" className="block">Status</label>
              <input
                type="text"
                name="status"
                value={newRoomData.status}
                onChange={handleEditChange}
                className="w-full px-4 py-2 border rounded-lg"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="features" className="block">Features</label>
              <input
                type="text"
                name="features"
                value={newRoomData.features}
                onChange={handleEditChange}
                className="w-full px-4 py-2 border rounded-lg"
              />
            </div>
            <button
              onClick={handleSaveEdit}
              className="px-4 py-2 bg-green-500 text-white rounded-xl"
            >
              Save
            </button>
            <button
              onClick={() => setEditRoom(null)}
              className="ml-2 px-4 py-2 bg-red-500 text-white rounded-xl"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
