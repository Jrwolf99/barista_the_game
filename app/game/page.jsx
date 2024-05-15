'use client';
import React, { useState } from 'react';
import TopBoard from './TopBoard';
import { useGameInfo } from './useGameInfo';
import { useSearchParams } from 'next/navigation';
import GameBoard from '@/app/game/GameBoard';
import { useControlGame } from '@/app/game/useControlGame';

export default function Game() {
  const searchParams = useSearchParams();
  const difficulty = searchParams.get('difficulty');
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState('');

  const handleTriggerNotification = (message, timeOpen = 1500) => {
    setNotificationMessage(message);
    setShowNotification(true);

    setTimeout(() => setShowNotification(false), timeOpen);
  };

  const { metaInfo, metaInfoSetters } = useGameInfo(difficulty);
  const { setScoreMoney } = metaInfoSetters;

  const { currentOrder, handleSendOff } = useControlGame(
    setScoreMoney,
    handleTriggerNotification
  );

  return (
    <div className="h-screen bg-gray-800 text-white text-4xl">
      <div className="w-full bg-white/5 flex flex-row justify-between items-center p-4">
        <TopBoard metaInfo={metaInfo} />
      </div>
      <div className="flex flex-col justify-center items-center">
        <GameBoard
          currentOrder={currentOrder}
          handleSendOff={handleSendOff}
          handleTriggerNotification={handleTriggerNotification}
        />
      </div>
      <NotificationBox
        message={notificationMessage}
        show={showNotification}
        setShow={setShowNotification}
      />
    </div>
  );
}

const NotificationBox = ({ message, show, setShow }) => {
  return (
    <>
      <div
        className={`fixed inset-0 flex items-center justify-center bg-white/10 bg-opacity-50 transition-opacity duration-500 ${
          show
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          className={`bg-white p-6 rounded-lg shadow-lg max-w-sm w-full transform transition-transform duration-500 ${
            show ? 'scale-100' : 'scale-[0.95]'
          }`}
        >
          <div
            className="text-[18px] text-black text-center"
            style={{ whiteSpace: 'pre-line' }}
          >
            {message}
          </div>
        </div>
      </div>
    </>
  );
};