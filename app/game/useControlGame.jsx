'use client';
import { useContext, useEffect, useState } from 'react';
import AppContext from '@/context/state';

export const useControlGame = () => {
  const { handleGenerateOrder, currentOrder, workingOrder } =
    useContext(AppContext);

  console.log('currentOrder', currentOrder);
  console.log('workingOrder', workingOrder);

  useEffect(() => {
    handleGenerateOrder();
  }, []);

  return { currentOrder };
};
