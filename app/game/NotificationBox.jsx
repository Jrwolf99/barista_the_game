import React, { useState } from 'react';

const NotificationBox = ({ message, show, setShow }) => {
  return (
    <>
      {show && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
            <div className="flex justify-between items-center">
              <span>{message}</span>
              <button
                className="ml-4 text-gray-700 hover:text-gray-900"
                onClick={() => setShow(false)}
              >
                &times;
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NotificationBox;
