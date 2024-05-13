import React, { useEffect, useState } from 'react';

export const useGameInfo = (initialTime) => {
  const [time, setTime] = useState(new Date('2021-01-01T08:00:00'));
  const [scoreMoney, setScoreMoney] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((currentTime) => new Date(currentTime.getTime() + 60000 * 10)); // Add 60000 ms (1 minute) to the current time
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const formattedTime = time.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
  });

  const metaInfo = { formattedTime, scoreMoney };
  const metaInfoSetters = { setScoreMoney };
  return { metaInfo, metaInfoSetters };
};
