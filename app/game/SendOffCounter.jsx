import { humanize } from '@/app/stringHelpers';
import AppContext from '@/context/state';
import React, { useContext, useState } from 'react';

export default function SendOffCounter() {
  const [enteredName, setEnteredName] = useState('');

  const {
    handleSendOff,
    handleTrashOrder,
    handleTriggerNotification,
    workingOrder,
  } = useContext(AppContext);

  return (
    <div className="max-w-[200px] bg-white/5 p-4 border-2 border-white rounded-lg">
      <p className="text-lg text-white text-center">Send Off Counter</p>
      <div className="flex flex-col justify-center items-center gap-5">
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
            className="w-full mt-5 border-2 border-white rounded-lg text-[16px] text-black text-center"
          />
          <button className="w-full bg-blue-500/50 hover:bg-blue-500/80 text-white rounded-lg text-[13px] mx-auto">
            Send Off
          </button>

          {workingOrder && (
            <div className="w-full flex flex-col justify-center items-center gap-5">
              {workingOrder?.size && workingOrder?.hot_or_iced && (
                <div className="bg-transparent border-2 rounded-lg w-[120px]">
                  <span className="block text-xs text-center mt-2">
                    {workingOrder.size} {workingOrder.hot_or_iced} cup
                  </span>

                  <img
                    src={
                      workingOrder.hot_or_iced === 'hot'
                        ? '/hot_cup.png'
                        : '/ice_cup.png'
                    }
                    alt={`${workingOrder.size} ${workingOrder.hot_or_iced} cup`}
                    className="w-full h-auto"
                  />
                </div>
              )}
              {workingOrder.needed_ingredients && (
                <div className="w-full grid grid-cols-6 justify-start items-start text-white text-[14px]">
                  {Object.entries(workingOrder.needed_ingredients).map(
                    ([key, value]) => (
                      <div
                        key={key}
                        className="col-span-6 flex border-b border-gray-600 leading-tight space-x-2 py-2"
                      >
                        <span className="flex-1">
                          {typeof value === 'number'
                            ? `${humanize(key)}: `
                            : humanize(key)}
                        </span>
                        <span className="text-right">{value}</span>
                      </div>
                    )
                  )}
                </div>
              )}
              {/* trash order */}
              <button
                className="w-full bg-red-500/50 hover:bg-red-500/80 text-white rounded-lg text-[13px] mx-auto"
                onClick={() => handleTrashOrder()}
              >
                Trash Order
              </button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
