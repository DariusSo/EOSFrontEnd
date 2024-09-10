import React, { useState } from "react";
import getCookie from "../modules/Cookies";
export default function ConfirmDeleteModal({text, titleText, setIsOpen, isOpen, toggleModalOk, price, eventId}) {
  

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <button
        className="px-4 py-2 bg-blue-500 text-white 
                    rounded-lg shadow-md hover:bg-blue-700 
                    transition duration-300"
        onClick={toggleModal}>
        Open Alert Modal
      </button>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div
            className="absolute inset-0 bg-black opacity-50"
            onClick={toggleModal}>
          </div>

          <div className="relative bg-white rounded-lg shadow-lg
                          p-6 w-96 z-10">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              {titleText}
            </h3>
            <p className="text-gray-600">
              Are you sure you want to {text} this?
              You will be refunded ${price}.
            </p>
            <div className="mt-6 flex justify-end space-x-4">
              <button className="px-4 py-2 bg-gray-300 text-gray-700 
                                rounded-lg shadow-md hover:bg-gray-400 
                                transition duration-300"
                onClick={toggleModal}>
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-red-500 text-white 
                          rounded-lg shadow-md hover:bg-red-700 
                          transition duration-300"
                onClick={async () => {
                        toggleModal(), 
                        await cancelReservation(eventId), 
                        toggleModalOk()}}>
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
const cancelReservation = async (eventId) => {
  
  const response = await fetch('http://localhost:8080/createRefund?eventId=' + eventId, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': getCookie("loggedIn")
    },
    
    });
    if(response.status == 400){
      console.log(response.status);
    }
}
