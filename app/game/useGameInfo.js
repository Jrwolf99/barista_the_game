import React, { useEffect, useState } from 'react';

export const useGameInfo = () => {
  const [scoreMoney, setScoreMoney] = useState(0);

  return { scoreMoney, setScoreMoney };
};
