'use client';
import Station from '@/app/game/Station';
import React, { useState } from 'react';

export default function GameBoard({
  currentOrder,
  handleSendOff,
  handleTriggerNotification,
}) {
  const [enteredName, setEnteredName] = useState('');
  return (
    <div className=" flex flex-row justify-center items-start gap-5 my-5">
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
          <Station stationTitle="Espresso Machine" />
          <Station stationTitle="Syrup Pumps" />
          <Station stationTitle="Refresher Station" />
          <Station stationTitle="Frap Station" />
        </div>
      </div>
      <div className="bg-white/5 p-4 border-2 border-white rounded-lg h-[50vh] w-[270px]">
        <p className="text-2xl  text-white text-center">Send Off Counter</p>
        <div className="flex flex-col justify-center items-center h-[50%] gap-5">
          <form
            className="flex flex-col justify-center items-center gap-5"
            onSubmit={(e) => {
              e.preventDefault();

              if (enteredName === '') {
                handleTriggerNotification(
                  'Please enter a name for the next order.'
                );
              } else {
                handleSendOff(enteredName);
                setEnteredName('');
              }
            }}
          >
            <input
              type="text"
              value={enteredName}
              onChange={(e) => setEnteredName(e.target.value)}
              className="w-full my-5 border-2 border-white rounded-lg text-[16px] text-black text-center"
            />
            <button className="w-[200px] bg-blue-500 text-white rounded-lg p-2 text-[20px] mx-auto">
              Send Off
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
