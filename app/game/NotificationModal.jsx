import AppContext from '@/context/state';
import React, { useContext } from 'react';

const NotificationModal = () => {
  const { notificationMessage, clearNotification } = useContext(AppContext);

  const handleOutsideClick = (e) => {
    if (e.target.id === 'notification-container') {
      clearNotification();
    }
  };

  return (
    <>
      <div
        id="notification-container"
        className={`fixed inset-0 flex items-center justify-center bg-white/10 bg-opacity-50 transition-opacity duration-500 ${
          !!notificationMessage
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
        onClick={handleOutsideClick}
      >
        <div
          className={`bg-white min-w-[800px] px-6 py-16 rounded-lg shadow-lg max-w-sm w-full transform transition-transform duration-500 ${
            !!notificationMessage ? 'scale-100' : 'scale-[0.95]'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            className="absolute top-2 right-2 text-black text-xl"
            onClick={clearNotification}
          >
            ×
          </button>
          <div className="text-[18px] text-black text-left whitespace-pre-line ml-[60px]">
            {notificationMessage}
          </div>
        </div>
      </div>
    </>
  );
};

export default NotificationModal;
