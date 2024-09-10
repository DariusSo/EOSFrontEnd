import React, { useState } from "react";

export default function AlertModal({toggleModalOk, isOpenOk, text}) {
  
  
  
  return (
    <div>
      {isOpenOk && (
        <div className="fixed inset-0 flex 
                        items-center justify-center 
                        z-50">
          
          <div
            className="absolute inset-0 bg-black opacity-50"
            onClick={toggleModalOk}
          ></div>

          
          <div className="relative bg-white rounded-lg 
                          shadow-lg p-6 w-96 z-10">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Succsess!
            </h3>
            <p className="text-gray-600">
              Event has been successfully {text}
            </p>
            <div className="mt-6 flex justify-end space-x-4">
              <button
                className="px-4 py-2 bg-red-500 text-white 
                          rounded-lg shadow-md hover:bg-red-700 
                          transition duration-300"
                onClick={() => window.location.reload()}
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
