'use client';
import SendOffCounter from '@/app/game/SendOffCounter';
import EspressoStation from '@/app/game/stations/EspressoStation';
import Station from '@/app/game/stations/Station';
import SyrupStation from '@/app/game/stations/SyrupStation';
import AppContext from '@/context/state';
import React, { useContext, useState } from 'react';

export default function GameBoard() {
  const { currentOrder } = useContext(AppContext);
  return (
    <div className="flex flex-row justify-center items-start gap-5 my-5">
      <div className="w-[200px]">
        <p className="text-xl text-white text-center max-w-[200px] h-[75px] mb-5">
          {currentOrder?.size} {currentOrder?.drink_name}
          <br />
          for {currentOrder?.customer_name}
        </p>
        <div className="relative bg-[#fafafa] border-2 border-white rounded-lg mx-auto w-[100px] h-[400px]">
          <img
            src="/cup_order.png"
            alt="coffee cup"
            className="object-cover h-[100%] opacity-20"
          />
          <div className="text-black font-bold">
            <p className="absolute top-[150px] left-[40%] text-xl">
              {currentOrder?.syrup_symbol}
            </p>
            <p className="absolute top-[345px] left-[35%] text-xl">
              {currentOrder?.symbol}
            </p>
          </div>
        </div>
      </div>

      <div className="border-2 border-white p-4 rounded-lg w-[50vw] text-white text-2xl text-center">
        <div className="grid grid-cols-2 gap-4">
          <Station stationTitle="Espresso Machine">
            <EspressoStation />
          </Station>
          <Station stationTitle="Syrup Pumps">
            <SyrupStation />
          </Station>
          <Station stationTitle="Refresher Station" />
          <Station stationTitle="Frap Station" />
        </div>
      </div>
      <SendOffCounter />
    </div>
  );
}
