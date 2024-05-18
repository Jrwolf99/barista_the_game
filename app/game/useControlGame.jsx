'use client';
import { useContext, useEffect, useState } from 'react';
import { useOrderGenerator } from '@/app/game/useOrderGenerator';
import AppContext from '@/context/state';

export const useControlGame = (handleTriggerNotification) => {
  const { setScoreMoney } = useContext(AppContext);
  const [workingOrder, setWorkingOrder] = useState(null);
  const { handleGenerateOrder, currentOrder } = useOrderGenerator();

  const handleSendOff = (enteredName) => {
    const errorMessages = [];

    if (
      enteredName.toLowerCase() !== currentOrder.customer_name.toLowerCase()
    ) {
      errorMessages.push(
        `Customer name was wrong! They didn't appreciate that. Try again with the next customer!\n`
      );
      errorMessages.push(
        `The name was ${currentOrder.customer_name} and not ${enteredName}.`
      );
    }

    try {
      if (errorMessages.length > 0) {
        handleTriggerNotification(errorMessages.join('\n'), 3000);
        return;
      }

      handleTriggerNotification(
        currentOrder.drink_name +
          '\nsent off successfully to ' +
          currentOrder.customer_name
      );
      setScoreMoney((prev) => prev + 1);
    } finally {
      handleGenerateOrder();
    }
  };

  useEffect(() => {
    handleGenerateOrder();
  }, []);

  return { currentOrder, handleSendOff, workingOrder, setWorkingOrder };
};
