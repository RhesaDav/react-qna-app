import React, { useState } from "react";

export default function Alert({showAlert, isCorrect, closeAlert}) {
//   const [showAlert, setShowAlert] = useState(false);
//   const [isCorrect, setisCorrect] = useState(false);
  return (
    <div>
      {/* <div className="fixed top-0 w-full transition-transform">
        <div
          className="transition ease-in-out duration-200 bg-red-100 border-l-4 border-red-500 text-red-700 p-4"
          role="alert"
        >
          <p className="font-bold">Wrong Answer!</p>
          <p>Please try again.</p>
        </div>
        <div
          className="transition ease-in-out duration-200 bg-green-100 border-l-4 border-green-500 text-green-700 p-4"
          role="alert"
        >
          <p className="font-bold">Correct Answer!</p>
          <p>Well done!</p>
        </div>
      </div> */}
      {showAlert ? (
        <div className="flex justify-center items-center w-full fixed top-0 bg-gray-500/40 h-full">
          {isCorrect ? (
            <div
              x-data="{ show: true }"
              x-show="show"
              className="p-4 bg-green-500 text-white rounded-md shadow-md flex items-center justify-between transition-all duration-300"
            >
              <span>Correct Answer!</span>
              <button onClick={closeAlert} className="bg-green-400 text-white rounded-md px-2 py-1">
                Close
              </button>
            </div>
          ) : (
            <div
              x-data="{ show: true }"
              x-show="show"
              className="p-4 bg-red-500 text-white rounded-md shadow-md flex items-center justify-between transition-all duration-300"
            >
              <span>Wrong Answer!</span>
              <button onClick={closeAlert} className="bg-red-400 text-white rounded-md px-2 py-1">
                Close
              </button>
            </div>
          )}
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
