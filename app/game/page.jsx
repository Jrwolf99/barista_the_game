'use client';
import React, { useState } from 'react';
import AppContext from '@/context/state';
import Game from '@/app/game/Game';
import { useGame } from '@/app/game/useGame';
import { useNotification } from '@/app/game/useNotification';

export default function GamePage() {
  return (
    <AppProvider>
      <Game />
    </AppProvider>
  );
}

const AppProvider = ({ children }) => {
  const [scoreMoney, setScoreMoney] = useState(0);

  const { handleTriggerNotification, notificationMessage, clearNotification } =
    useNotification();

  const {
    handleGenerateOrder,
    currentOrder,
    workingOrder,
    handleAddIngredient,
    handleAddCup,
    handleTrashOrder,
    handleSendOff,
  } = useGame(setScoreMoney, handleTriggerNotification);

  return (
    <AppContext.Provider
      value={{
        scoreMoney,
        setScoreMoney,
        handleGenerateOrder,
        currentOrder,
        workingOrder,
        handleAddIngredient,
        handleAddCup,
        handleTrashOrder,
        handleSendOff,
        handleTriggerNotification,
        notificationMessage,
        clearNotification,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

