'use client';
import React from 'react';

import { useOrderGenerator } from '@/app/game/useOrderGenerator';
import Station from '@/app/game/Station';
import { useControlGame } from '@/app/game/useControlGame';
import Image from 'next/image';

export default function GameBoard({ setScoreMoney }) {
  const { currentOrder } = useControlGame(setScoreMoney);

  return (
    <div className=" flex flex-row justify-center items-start gap-5 my-5">
      <div>
        <p className="text-2xl text-white text-center">
          {' '}
          A {currentOrder?.hot_or_iced} {currentOrder?.size}
          <br /> drink for {currentOrder?.customer_name}
        </p>
        <div className="relative bg-[#fafafa] border-2 border-white rounded-lg mx-auto w-[150px] h-[600px]">
          <img
            src="/cup_order.png"
            alt="coffee cup"
            className="object-cover h-[600px] opacity-10"
          />
          <div className="text-black font-bold">
            <p className="absolute top-[235px] left-[55px] text-2xl">
              {currentOrder?.syrup_symbol}
            </p>
            <p className="absolute top-[530px] left-[50px] text-2xl">
              {currentOrder?.symbol}
            </p>
          </div>
        </div>
      </div>

      <div className="border-2 border-white p-4 rounded-lg w-[50vw] text-white text-2xl text-center">
        <div className="grid grid-cols-2 gap-4">
          <Station stationTitle="Espresso Machine" />
          <Station stationTitle="Syrup Pumps" />
          <Station stationTitle="Refresher Station" />
          <Station stationTitle="Frap Station" />
        </div>
      </div>
      <div className="bg-white/5 p-4 border-2 border-white rounded-lg h-[50vh]">
        <p className="text-2xl text-white text-center">Send Off Counter</p>
      </div>
    </div>
  );
}

