import { useState } from 'react';

export const useNotification = () => {
  const [notificationMessage, setNotificationMessage] = useState(null);

  const handleTriggerNotification = (message, timeOpen = 1500) => {
    setNotificationMessage(message);

    setTimeout(() => setNotificationMessage(null), timeOpen);
  };

  const clearNotification = () => {
    setNotificationMessage(null);
  };

  return {
    handleTriggerNotification,
    notificationMessage,
    clearNotification,
  };
};
