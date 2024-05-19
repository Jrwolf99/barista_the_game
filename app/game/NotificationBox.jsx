import AppContext from '@/context/state';
import React, { useContext } from 'react';

const NotificationBox = () => {
  const { notificationMessage } = useContext(AppContext);
  return (
    <>
      <div
        className={`fixed inset-0 flex items-center justify-center bg-white/10 bg-opacity-50 transition-opacity duration-500 ${
          !!notificationMessage
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          className={`bg-white min-w-[800px] px-6 py-16 rounded-lg shadow-lg max-w-sm w-full transform transition-transform duration-500 ${
            !!notificationMessage ? 'scale-100' : 'scale-[0.95]'
          }`}
        >
          <div className="text-[18px] text-black text-left whitespace-pre-line ml-[60px]">
            {notificationMessage}
          </div>
        </div>
      </div>
    </>
  );
};

export default NotificationBox;
