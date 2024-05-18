'use client';
import React, { useContext, useEffect, useState } from 'react';
import AppContext from '@/context/state';
import { useControlTime } from '@/app/game/useControlTime';

export default function TopBoard() {
  const { scoreMoney } = useContext(AppContext);
  const { formattedTime } = useControlTime();

  const [prevScoreMoney, setPrevScoreMoney] = useState(scoreMoney);
  const [difference, setDifference] = useState(null);
  const [showMoneyDifference, setShowMoneyDifference] = useState(false);

  const handleAddMoney = (amount) => {
    setDifference(amount);
    setPrevScoreMoney((prev) => prev + amount);

    setShowMoneyDifference(true);
    setTimeout(() => {
      setShowMoneyDifference(false);
    }, 2000);
  };

  useEffect(() => {
    if (scoreMoney !== prevScoreMoney) {
      const diff = scoreMoney - prevScoreMoney;
      handleAddMoney(diff);
    }
  }, [scoreMoney]);

  return (
    <div className="relative w-full">
      <div className="flex items-center justify-between w-full">
        <div className="text-2xl">Time: {formattedTime}</div>
        <div className="text-2xl">Money: {scoreMoney}</div>
        <div
          className={`w-[100px] text-center text-2xl absolute top-[70px] right-[10px] bg-green-800 p-2 rounded-lg border-2 border-white transform transition-all duration-500 ${
            showMoneyDifference
              ? 'opacity-100 translate-y-2'
              : 'opacity-0 translate-y-0'
          } text-green-500`}
        >
          +{difference}
        </div>
      </div>
    </div>
  );
}
