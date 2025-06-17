import React, { useState } from 'react';
import { Search, Eye, Pencil, Trash2 } from 'lucide-react';

const staffData = [
  { id: 1, name: 'Amit Kumar', position: 'Manager', email: 'amit@hotel.com', phone: '+91-9888776655', joinDate: '2023-01-15' },
  { id: 2, name: 'Priya Rani', position: 'Receptionist', email: 'priya@hotel.com', phone: '+91-9876543210', joinDate: '2023-03-20' },
  { id: 3, name: 'Ravi Sharma', position: 'Chef', email: 'ravi@hotel.com', phone: '+91-9933445566', joinDate: '2023-04-05' },
  { id: 4, name: 'Neha Gupta', position: 'Housekeeper', email: 'neha@hotel.com', phone: '+91-9612345678', joinDate: '2023-06-10' },
  { id: 5, name: 'Sandeep Yadav', position: 'Security', email: 'sandeep@hotel.com', phone: '+91-9988776644', joinDate: '2023-07-15' },
];

export default function StaffPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedStaff, setSelectedStaff] = useState(null);
  const [editStaff, setEditStaff] = useState(null);
  const [newStaffData, setNewStaffData] = useState(null);

  const itemsPerPage = 5;

  const filteredStaff = staffData.filter((staff) =>
    staff.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination Logic
  const totalPages = Math.ceil(filteredStaff.length / itemsPerPage);
  const indexOfLastStaff = currentPage * itemsPerPage;
  const indexOfFirstStaff = indexOfLastStaff - itemsPerPage;
  const currentStaff = filteredStaff.slice(indexOfFirstStaff, indexOfLastStaff);

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const openModal = (staff) => {
    setSelectedStaff(staff);
  };

  const closeModal = () => {
    setSelectedStaff(null);
  };

  const handleEditClick = (staff) => {
    setEditStaff(staff);
    setNewStaffData(staff); // prefill the data
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setNewStaffData({ ...newStaffData, [name]: value });
  };

  const handleSaveEdit = () => {
    const updatedStaff = staffData.map((staff) =>
      staff.id === newStaffData.id ? newStaffData : staff
    );
    setEditStaff(null);
    setNewStaffData(null);
    // Update state or API call
  };

  const handleDelete = (id) => {
    const updatedStaff = staffData.filter(staff => staff.id !== id);
    // Update state or API call
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Staff</h1>

      {/* Search Bar */}
      <div className="flex items-center mb-6">
        <div className="relative w-full max-w-md">
          <input
            type="text"
            placeholder="Search staff..."
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

      {/* Staff Table */}
      <div className="overflow-x-auto bg-white shadow rounded-xl">
        <table className="min-w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-3 px-6 text-left">Name</th>
              <th className="py-3 px-6 text-left">Position</th>
              <th className="py-3 px-6 text-left">Email</th>
              <th className="py-3 px-6 text-left">Phone</th>
              <th className="py-3 px-6 text-left">Join Date</th>
              <th className="py-3 px-6 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentStaff.map((staff) => (
              <tr key={staff.id} className="border-b hover:bg-gray-50">
                <td className="py-3 px-6">{staff.name}</td>
                <td className="py-3 px-6">{staff.position}</td>
                <td className="py-3 px-6">{staff.email}</td>
                <td className="py-3 px-6">{staff.phone}</td>
                <td className="py-3 px-6">{staff.joinDate}</td>
                <td className="py-3 px-6 text-center flex justify-center gap-4">
                  <button
                    onClick={() => openModal(staff)}
                    className="text-blue-500 hover:text-blue-700"
                  >
                    <Eye size={20} />
                  </button>
                  <button
                    onClick={() => handleEditClick(staff)}
                    className="text-green-500 hover:text-green-700"
                  >
                    <Pencil size={20} />
                  </button>
                  <button
                    onClick={() => handleDelete(staff.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <Trash2 size={20} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {filteredStaff.length === 0 && (
          <div className="text-center py-6 text-gray-500">
            No staff found.
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

      {/* Modal for Staff Details */}
      {selectedStaff && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl w-96">
            <h2 className="text-xl font-bold mb-4">Staff Details</h2>
            <div className="mb-4">
              <strong>Name: </strong> {selectedStaff.name}
            </div>
            <div className="mb-4">
              <strong>Position: </strong> {selectedStaff.position}
            </div>
            <div className="mb-4">
              <strong>Email: </strong> {selectedStaff.email}
            </div>
            <div className="mb-4">
              <strong>Phone: </strong> {selectedStaff.phone}
            </div>
            <div className="mb-4">
              <strong>Join Date: </strong> {selectedStaff.joinDate}
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
      {editStaff && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl w-96">
            <h2 className="text-xl font-bold mb-4">Edit Staff</h2>
            <div className="mb-4">
              <label htmlFor="name" className="block">Name</label>
              <input
                type="text"
                name="name"
                value={newStaffData.name}
                onChange={handleEditChange}
                className="w-full px-4 py-2 border rounded-lg"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="position" className="block">Position</label>
              <input
                type="text"
                name="position"
                value={newStaffData.position}
                onChange={handleEditChange}
                className="w-full px-4 py-2 border rounded-lg"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block">Email</label>
              <input
                type="email"
                name="email"
                value={newStaffData.email}
                onChange={handleEditChange}
                className="w-full px-4 py-2 border rounded-lg"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="phone" className="block">Phone</label>
              <input
                type="text"
                name="phone"
                value={newStaffData.phone}
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
              onClick={() => setEditStaff(null)}
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
