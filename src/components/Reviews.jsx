import React, { useEffect, useState } from 'react';

const Reviews = ({ eventId }) => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/get/reviewsById?eventId=' + eventId)
            .then((response) => response.json())
            .then((data) => setReviews(data))
            .catch((err) => console.log(err));
    }, [eventId]);

    return (
        <div className="py-12 px-6 bg-gradient-to-r from-lime-100 via-lime-50 to-lime-100 rounded-lg shadow-2xl max-w-4xl mx-auto">
            <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-12">Customer Reviews</h2>
            {reviews.map((review, index) => (
                <div
                    key={index}
                    className="bg-white p-8 rounded-lg shadow-lg mb-8 transform transition duration-300 hover:scale-105 hover:shadow-2xl"
                >
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-2xl font-bold text-gray-900">{review.username}</h3>
                        <div className="flex text-3xl text-yellow-400">
                            {'★'.repeat(review.rating)}
                            {'☆'.repeat(5 - review.rating)}
                        </div>
                    </div>
                    <p className="text-gray-700 italic text-lg">"{review.review}"</p>
                </div>
            ))}
        </div>
    );
};

export default Reviews;