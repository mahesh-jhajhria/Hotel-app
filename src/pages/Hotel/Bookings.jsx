// import React, { useState } from 'react';
// import { Search } from 'lucide-react';

// const roomData = [
//   { id: 1, roomNumber: '101', type: 'Single', price: '₹3000', status: 'Available' },
//   { id: 2, roomNumber: '102', type: 'Double', price: '₹5000', status: 'Booked' },
//   { id: 3, roomNumber: '103', type: 'Suite', price: '₹8000', status: 'Available' },
//   { id: 4, roomNumber: '104', type: 'Double', price: '₹4000', status: 'Booked' },
//   { id: 5, roomNumber: '105', type: 'Single', price: '₹2500', status: 'Available' },
// ];

// const BookingPage = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [selectedRoom, setSelectedRoom] = useState(null);
//   const [customerDetails, setCustomerDetails] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     checkIn: '',
//     checkOut: '',
//   });

//   // Filter rooms based on search term
//   const filteredRooms = roomData.filter(
//     (room) =>
//       room.roomNumber.includes(searchTerm) ||
//       room.type.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const handleRoomSelect = (room) => {
//     if (room.status === 'Available') {
//       setSelectedRoom(room);
//     } else {
//       alert('This room is already booked.');
//     }
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setCustomerDetails({
//       ...customerDetails,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (selectedRoom) {
//       alert(`Room ${selectedRoom.roomNumber} booked successfully!`);
//       // Add booking logic here
//     } else {
//       alert('Please select a room.');
//     }
//   };

//   return (
//     <div className="p-6">
//       <h1 className="text-3xl font-bold mb-6">Book a Room</h1>

//       {/* Search Bar */}
//       <div className="flex items-center mb-6">
//         <div className="relative w-full max-w-md">
//           <input
//             type="text"
//             placeholder="Search rooms..."
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             className="w-full pl-10 pr-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
//           />
//           <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
//         </div>
//       </div>

//       {/* Available Rooms */}
//       <div className="mb-6">
//         <h2 className="text-xl font-bold">Available Rooms</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
//           {filteredRooms.map((room) => (
//             <div
//               key={room.id}
//               className={`border p-4 rounded-xl ${room.status === 'Booked' ? 'bg-gray-300' : 'bg-white'}`}
//               onClick={() => handleRoomSelect(room)}
//             >
//               <h3 className="text-lg font-semibold">Room {room.roomNumber}</h3>
//               <p className="text-sm">{room.type}</p>
//               <p className="text-sm">Price: {room.price}</p>
//               <p className="text-sm">{room.status}</p>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Booking Form */}
//       {selectedRoom && (
//         <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-md">
//           <h2 className="text-2xl font-bold mb-4">Booking Details</h2>
//           <div className="mb-4">
//             <label className="block font-semibold" htmlFor="name">
//               Full Name
//             </label>
//             <input
//               type="text"
//               name="name"
//               value={customerDetails.name}
//               onChange={handleInputChange}
//               className="w-full p-3 border rounded-xl"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block font-semibold" htmlFor="email">
//               Email Address
//             </label>
//             <input
//               type="email"
//               name="email"
//               value={customerDetails.email}
//               onChange={handleInputChange}
//               className="w-full p-3 border rounded-xl"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block font-semibold" htmlFor="phone">
//               Phone Number
//             </label>
//             <input
//               type="tel"
//               name="phone"
//               value={customerDetails.phone}
//               onChange={handleInputChange}
//               className="w-full p-3 border rounded-xl"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block font-semibold" htmlFor="checkIn">
//               Check-in Date
//             </label>
//             <input
//               type="date"
//               name="checkIn"
//               value={customerDetails.checkIn}
//               onChange={handleInputChange}
//               className="w-full p-3 border rounded-xl"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block font-semibold" htmlFor="checkOut">
//               Check-out Date
//             </label>
//             <input
//               type="date"
//               name="checkOut"
//               value={customerDetails.checkOut}
//               onChange={handleInputChange}
//               className="w-full p-3 border rounded-xl"
//               required
//             />
//           </div>

//           <button
//             type="submit"
//             className="w-full p-3 bg-green-500 text-white rounded-xl hover:bg-green-600"
//           >
//             Confirm Booking
//           </button>
//         </form>
//       )}
//     </div>
//   );
// };

// export default BookingPage;


import React, { useState } from 'react';

export default function BookingPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    hotel: '',
    checkIn: '',
    checkOut: '',
  });

  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const now = new Date();
    const checkInDate = new Date(formData.checkIn);
    const checkOutDate = new Date(formData.checkOut);

    if (checkInDate < now) {
      setError('Check-in date & time cannot be in the past.');
      return;
    }

    if (checkOutDate <= checkInDate) {
      setError('Check-out must be after Check-in date & time.');
      return;
    }

    setError('');
    setSubmitted(true);
    alert('✅ Booking Confirmed Successfully!');
  };

  return (
    <div className="min-h-screen  bg-gray-100 flex items-center justify-center px-4 mt-5">
      <div className="w-full max-w-full bg-white rounded-xl shadow-md p-6">
        <h2 className="text-2xl font-bold mb-6  text-black">Hotel Booking </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-medium mb-1">Full Name</label>
            <input
              type="text"
              name="name"
              className="w-full p-3 border rounded-xl"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Email Address</label>
            <input
              type="email"
              name="email"
              className="w-full p-3 border rounded-xl"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Phone Number</label>
            <input
              type="tel"
              name="phone"
              className="w-full p-3 border rounded-xl"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Select Hotel</label>
            <select
              name="hotel"
              className="w-full p-3 border rounded-xl"
              value={formData.hotel}
              onChange={handleChange}
              required
            >
              <option value="">-- Choose a Hotel --</option>
              <option value="Taj Palace">Taj Palace</option>
              <option value="The Oberoi">The Oberoi</option>
              <option value="Leela Palace">Leela Palace</option>
              <option value="ITC Maurya">ITC Maurya</option>
            </select>
          </div>

          <div>
            <label className="block font-medium mb-1">Check-in Date & Time</label>
            <input
              type="datetime-local"
              name="checkIn"
              className="w-full p-3 border rounded-xl"
              value={formData.checkIn}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Check-out Date & Time</label>
            <input
              type="datetime-local"
              name="checkOut"
              className="w-full p-3 border rounded-xl"
              value={formData.checkOut}
              onChange={handleChange}
              required
            />
          </div>

          {error && <p className="text-red-600 font-semibold">{error}</p>}

          <button
            type="submit"
            className="w-full p-3 bg-green-600 hover:bg-green-700 text-white font-bold rounded-xl"
          >
            Confirm Booking
          </button>

          {submitted && !error && (
            <p className="text-green-700 font-semibold text-center mt-4">
              🎉 Booking successful!
            </p>
          )}
        </form>
      </div>
    </div>
  );
}

