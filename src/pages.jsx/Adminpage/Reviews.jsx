import React, { useState } from "react";

function Reviews() {
  const [reviews, setReviews] = useState([
    {
      text: "Our wedding was magical, and this platform made the planning process so smooth and enjoyable. The RSVP system was a lifesaver!",
      reviewer: "Sophia & Liam",
      date: "June 15, 2023",
    },
    {
      text: "The countdown timer on our wedding website was a hit with our guests. It built so much excitement leading up to the big day!",
      reviewer: "Emma & Noah",
      date: "July 22, 2023",
    },
    {
      text: "We loved the photo gallery feature! It allowed us to showcase all the beautiful moments from our wedding day in a stunning way.",
      reviewer: "Olivia & Ethan",
      date: "August 5, 2023",
    },
  ]);

  const [newReview, setNewReview] = useState("");
  const [reviewerName, setReviewerName] = useState("");
  const [isAddingReview, setIsAddingReview] = useState(false);

  const handleAddReview = () => {
    if (newReview.trim() && reviewerName.trim()) {
      setReviews([
        ...reviews,
        {
          text: newReview,
          reviewer: reviewerName,
          date: new Date().toLocaleDateString(),
        },
      ]);
      setNewReview("");
      setReviewerName("");
      setIsAddingReview(false);
    }
  };

  return (
    <div className="p-6 font-sans">


<div className="text-center py-6">
        <h1 className="text-4xl font-bold text-gray-800">
          What Our Clients Say
        </h1>
        <p className="text-lg text-gray-600 mt-2">
          Hear from couples who celebrated their big day with us!
        </p>
      </div>

      {/* Statistics Section */}
      <div className="bg-green-100 p-8 rounded-lg shadow-lg mb-12">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Our Achievements
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          <div>
            <h3 className="text-3xl font-bold text-gray-800">500+</h3>
            <p className="text-gray-600">Happy Couples</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-gray-800">300+</h3>
            <p className="text-gray-600">Weddings Planned</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-gray-800">4.8/5</h3>
            <p className="text-gray-600">Average Rating</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-gray-800">1M+</h3>
            <p className="text-gray-600">Gallery Views</p>
          </div>
        </div>
      </div>

      {/* Featured Testimonial Section */}
      <div className="bg-blue-100 p-8 rounded-lg shadow-lg mb-12">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Featured Testimonial
        </h2>
        <div className="flex flex-col md:flex-row items-center">
          <img
            src="https://via.placeholder.com/100"
            alt="Featured Reviewer"
            className="w-24 h-24 rounded-full shadow-lg mb-4 md:mb-0 md:mr-6"
          />
          <div>
            <p className="text-gray-700 italic mb-4">
              "The team at [Your Wedding Platform Name] went above and beyond to
              make our wedding perfect. From the RSVP system to the photo
              gallery, every feature was beautifully designed and easy to use!"
            </p>
            <h4 className="text-xl font-bold text-gray-800">Ava & William</h4>
            <p className="text-gray-600 text-sm">Married on May 10, 2023</p>
          </div>
        </div>
      </div>

      {/* Video Testimonial Section */}
      <div className="bg-gray-50 p-8 rounded-lg shadow-lg mb-12">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Watch Our Happy Clients
        </h2>
        <div className="bg-gray-50 p-8 rounded-lg shadow-lg mb-12">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Watch Our Happy Clients
        </h2>
        <div className="flex justify-center">
         <video src="src\assets\Images\uu.mp4" controls autoPlay loop muted className="rounded-lg "></video>
        </div>
      </div>
      </div>
      {/* Reviews Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="bg-gray-50 p-6 rounded-lg shadow-lg"
          >
            <p className="text-gray-700 italic">{`"${review.text}"`}</p>
            <div className="mt-4">
              <h4 className="text-xl font-bold text-gray-800">{review.reviewer}</h4>
              <p className="text-gray-600 text-sm">{review.date}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Add Review Section */}
      <div className="text-center mt-12">
        {isAddingReview ? (
          <div className="mt-4">
            <input
              value={reviewerName}
              onChange={(e) => setReviewerName(e.target.value)}
              placeholder="Your Name"
              className="w-full max-w-md mb-4 p-4 border rounded-lg shadow-sm text-gray-700"
            />
            <textarea
              value={newReview}
              onChange={(e) => setNewReview(e.target.value)}
              placeholder="Write your review here..."
              className="w-full max-w-md p-4 border rounded-lg shadow-sm text-gray-700"
            ></textarea>
            <div className="mt-4 flex justify-center gap-4">
              <button
                onClick={handleAddReview}
                className="px-6 py-2 bg-green-600 text-white rounded-lg shadow-lg hover:bg-green-700"
              >
                Submit
              </button>
              <button
                onClick={() => setIsAddingReview(false)}
                className="px-6 py-2 bg-gray-400 text-white rounded-lg shadow-lg hover:bg-gray-500"
              >
                Cancel
              </button>
            </div>
          </div>
        ) : (
          <button
            onClick={() => setIsAddingReview(true)}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700"
          >
            Submit Your Review
          </button>
        )}
      </div>
    </div>
  );
}

export default Reviews;
