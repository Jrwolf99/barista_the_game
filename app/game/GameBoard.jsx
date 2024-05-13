'use client';
import React from 'react';

import { useOrderGenerator } from '@/app/game/useOrderGenerator';

export default function GameBoard({ setScoreMoney }) {
  const { handleGenerateOrder, currentOrder } = useOrderGenerator();
  return (
    <div>
      <button onClick={() => setScoreMoney((prev) => prev + 1)}>
        Add Money
      </button>
      <button onClick={() => handleGenerateOrder()}>Generate Order</button>
      <div>
        {currentOrder ? (
          <div>
            <h2>Order</h2>
            <p>{JSON.stringify(currentOrder)}</p>
          </div>
        ) : (
          <p>No order</p>
        )}
      </div>
    </div>
  );
}
