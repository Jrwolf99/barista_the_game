import GameBoard from '@/app/game/GameBoard';
import TopBoard from '@/app/game/TopBoard';
import React from 'react';
import { useControlGame } from '@/app/game/useControlGame';
import NotificationModal from '@/app/game/NotificationModal';

export default function Game() {
  useControlGame();

  return (
    <div className="h-screen bg-gray-800 text-white text-4xl min-w-[1200px]">
      <div className="w-full bg-white/5 flex flex-row justify-between items-center p-4">
        <TopBoard />
      </div>
      <div className="flex flex-col justify-center items-center scale-[90%] transform -translate-y-8">
        <GameBoard />
      </div>
      <NotificationModal />
    </div>
  );
}

