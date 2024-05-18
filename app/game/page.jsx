'use client';
import React, { useState } from 'react';
import TopBoard from './TopBoard';
import { useGameInfo } from './useGameInfo';
import { useSearchParams } from 'next/navigation';
import GameBoard from '@/app/game/GameBoard';
import { useControlGame } from '@/app/game/useControlGame';
import AppContext from '@/context/state';
import Game from '@/app/game/Game';

export default function GamePage() {
  return (
    <AppProvider>
      <Game />
    </AppProvider>
  );
}

const AppProvider = ({ children }) => {
  const { scoreMoney, setScoreMoney } = useGameInfo();

  return (
    <AppContext.Provider value={{ scoreMoney, setScoreMoney }}>
      {children}
    </AppContext.Provider>
  );
};

