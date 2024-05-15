'use client';
import React, { useEffect, useState } from 'react';

export default function TopBoard({ metaInfo }) {
  const [prevScoreMoney, setPrevScoreMoney] = useState(metaInfo.scoreMoney);
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
    if (metaInfo.scoreMoney !== prevScoreMoney) {
      const diff = metaInfo.scoreMoney - prevScoreMoney;
      handleAddMoney(diff);
    }
  }, [metaInfo.scoreMoney]); // Remove prevScoreMoney from dependencies

  return (
    <div className="relative w-full">
      <div className="flex items-center justify-between w-full">
        <div className="text-2xl">Time: {metaInfo.formattedTime}</div>
        <div className="text-2xl">Money: {metaInfo.scoreMoney}</div>
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
