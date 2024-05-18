import { useEffect, useState } from 'react';

export const useControlTime = () => {
  const [time, setTime] = useState(new Date('2021-01-01T08:00:00'));

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((currentTime) => new Date(currentTime.getTime() + 60000 * 10));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const formattedTime = time.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
  });

  return { formattedTime };
};
