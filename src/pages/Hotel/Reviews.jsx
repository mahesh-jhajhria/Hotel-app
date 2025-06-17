import React, { useState } from 'react';

const ReviewsPage = () => {
  const [reviews, setReviews] = useState([
    { id: 1, name: 'John Doe', review: 'Great stay, wonderful service!', rating: 5 },
    { id: 2, name: 'Jane Smith', review: 'The room was clean, but the food could improve.', rating: 3 },
    { id: 3, name: 'Michael Johnson', review: 'Excellent experience, very friendly staff.', rating: 4 },
  ]);

  const [newReview, setNewReview] = useState({
    name: '',
    review: '',
    rating: 1,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewReview({
      ...newReview,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newReview.name && newReview.review) {
      setReviews([...reviews, { ...newReview, id: reviews.length + 1 }]);
      setNewReview({ name: '', review: '', rating: 1 });
    } else {
      alert('Please fill in all the fields.');
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Customer Reviews</h1>

      {/* Reviews List */}
      <div className="mb-6">
        <h2 className="text-xl font-bold">Recent Reviews</h2>
        <div className="space-y-4 mt-4">
          {reviews.map((review) => (
            <div key={review.id} className="p-4 border rounded-xl bg-white shadow-md">
              <div className="flex items-center mb-2">
                <h3 className="text-lg font-semibold">{review.name}</h3>
                <span className="ml-2 text-yellow-500">{'★'.repeat(review.rating)}</span>
              </div>
              <p>{review.review}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Add a Review Form */}
      <div className="mt-8 bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-2xl font-bold mb-4">Add Your Review</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block font-semibold" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={newReview.name}
              onChange={handleInputChange}
              className="w-full p-3 border rounded-xl"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block font-semibold" htmlFor="review">
              Your Review
            </label>
            <textarea
              name="review"
              value={newReview.review}
              onChange={handleInputChange}
              className="w-full p-3 border rounded-xl"
              rows="4"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block font-semibold" htmlFor="rating">
              Rating
            </label>
            <select
              name="rating"
              value={newReview.rating}
              onChange={handleInputChange}
              className="w-full p-3 border rounded-xl"
            >
              <option value={1}>1 Star</option>
              <option value={2}>2 Stars</option>
              <option value={3}>3 Stars</option>
              <option value={4}>4 Stars</option>
              <option value={5}>5 Stars</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full p-3 bg-green-500 text-white rounded-xl hover:bg-green-600"
          >
            Submit Review
          </button>
        </form>
      </div>
    </div>
  );
};

export default ReviewsPage;
