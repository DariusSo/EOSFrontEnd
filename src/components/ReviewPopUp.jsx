import React, { useRef, useState } from "react";
import { FaStar } from "react-icons/fa";
import getCookie from "../modules/Cookies";

export default function ReviewPopUp({ setReviewModal, eventId }) {
  const [isOpen, setIsOpen] = useState(true);
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(null);
  const [review, setReview] = useState("");
  const ratingRef = useRef();
  const reviewTextRef = useRef();
  const toggleModal = () => {
    setIsOpen(!isOpen);
  }
  const toggleReviewModal = () => {
    setReviewModal(false);
  }
  

  return (
    <div>
      (
        <div className="fixed inset-0 flex items-center 
                        justify-center z-50">
          <div
            className="absolute inset-0 bg-black opacity-50"
            onClick={toggleModal}>
          </div>
          <div className="relative bg-white rounded-lg 
                          shadow-lg p-6 w-96 z-10">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Leave a Review
            </h3>
            <div className="flex mb-4">
              {[...Array(5)].map((star, i) => {
                const ratingValue = i + 1;
                return (
                  <label key={i}>
                    <input
                      type="radio"
                      name="rating"
                      value={ratingValue}
                      onClick={() => setRating(ratingValue)}
                      className="hidden"
                      ref={ratingRef}
                    />
                    <FaStar
                      className={`cursor-pointer transition-colors duration-200 ${
                        ratingValue <= (hover || rating)
                          ? "text-yellow-500"
                          : "text-gray-300"
                      }`}
                      size={30}
                      onMouseEnter={() => setHover(ratingValue)}
                      onMouseLeave={() => setHover(null)}
                    />
                  </label>
                );
              })}
            </div>

            <textarea
              className="w-full h-24 p-2 border rounded-lg 
                        focus:outline-none focus:ring-2 
                        focus:ring-blue-500"
              placeholder="Write your review here..."
              value={review}
              onChange={(e) => setReview(e.target.value)}
              ref={reviewTextRef}
            ></textarea>

            <div className="mt-6 flex justify-end space-x-4">
              <button
                className="px-4 py-2 bg-gray-300 text-gray-700 
                          rounded-lg shadow-md hover:bg-gray-400 
                          transition duration-300"
                onClick={toggleReviewModal}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded-lg 
                          shadow-md hover:bg-blue-700 transition duration-300"
                onClick={() => {addReview({eventId, rating, reviewTextRef}) , setReviewModal(false)}}
                
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )
    </div>
  );
}

async function addReview({eventId, rating, reviewTextRef}){
        console.log(eventId);
        const rawResponse = await fetch('http://localhost:8080/add/review', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': getCookie("loggedIn")
          },
          body: JSON.stringify({
            event_id : eventId,
            review: reviewTextRef.current.value,
            rating : rating,
            })
            
        });
        
        var response = await rawResponse.text();
        if(rawResponse.status == 200){
            alert(response);
        }
}
