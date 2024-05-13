'use client';
import React from 'react';
import TopBoard from './TopBoard';
import { useGameInfo } from './useGameInfo';
import { useSearchParams } from 'next/navigation';
import GameBoard from '@/app/game/GameBoard';

export default function Game() {
  const searchParams = useSearchParams();
  const difficulty = searchParams.get('difficulty');

  const { metaInfo, metaInfoSetters } = useGameInfo(difficulty);
  const { setScoreMoney } = metaInfoSetters;

  return (
    <div className="h-screen bg-gray-800 text-white text-4xl">
      <div className="w-full bg-white/5 flex flex-row justify-between items-center p-4">
        <TopBoard metaInfo={metaInfo} />
      </div>
      <div className="flex flex-col justify-center items-center">
        <GameBoard setScoreMoney={setScoreMoney} />
      </div>
    </div>
  );
}
