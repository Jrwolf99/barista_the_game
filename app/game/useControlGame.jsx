'use client';
import { useEffect, useState } from 'react';
import book from './recipes.json';
import { useOrderGenerator } from '@/app/game/useOrderGenerator';

export const useControlGame = (setScoreMoney) => {
  const { handleGenerateOrder, currentOrder } = useOrderGenerator();

  useEffect(() => {
    handleGenerateOrder();
  }, []);

  return { currentOrder };
};
