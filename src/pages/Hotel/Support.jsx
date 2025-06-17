import React, { useState } from 'react';

const SupportPage = () => {
  // State to manage the contact form
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you can handle form submission like sending it to a server
    alert('Your message has been sent!');
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Support</h1>

      {/* FAQ Section */}
      <div className="mb-6">
        <h2 className="text-xl font-bold mb-4">Frequently Asked Questions (FAQ)</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold">How can I book a room?</h3>
            <p>To book a room, you can visit our booking page and select your desired dates, room type, and complete the checkout process.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">What is the cancellation policy?</h3>
            <p>Our cancellation policy allows you to cancel your reservation up to 24 hours before your check-in date for a full refund.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">How can I contact customer support?</h3>
            <p>You can contact our customer support team by filling out the form below or by reaching out to us via our live chat or email.</p>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="mb-6">
        <h2 className="text-xl font-bold mb-4">Contact Us</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-semibold">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div>
            <label className="block font-semibold">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div>
            <label className="block font-semibold">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md">
            Send Message
          </button>
        </form>
      </div>

      {/* Live Chat Section */}
      <div className="mt-6">
        <h2 className="text-xl font-bold mb-4">Need Live Assistance?</h2>
        <p>If you need immediate assistance, feel free to start a live chat with us:</p>
        <button className="mt-2 px-4 py-2 bg-green-500 text-white rounded-md">
          Start Live Chat
        </button>
      </div>
    </div>
  );
};

export default SupportPage;
