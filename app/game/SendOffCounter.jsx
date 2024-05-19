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
    <div className="bg-white/5 p-4 border-2 border-white rounded-lg">
      <p className="text-lg text-white text-center">Send Off Counter</p>
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
            className="w-full mt-5 border-2 border-white rounded-lg text-[16px] text-black text-center"
          />
          <button className="w-[150px] bg-blue-500 text-white rounded-lg p-2 text-[20px] mx-auto">
            Send Off
          </button>

          {workingOrder && (
            <div className="flex flex-col justify-center items-center gap-5">
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
              {workingOrder.needed_ingredients && (
                <div className="flex flex-col justify-center items-center gap-5">
                  {Object.entries(workingOrder.needed_ingredients).map(
                    ([key, value]) => (
                      <div
                        key={key}
                        className="flex flex-row justify-center items-center gap-5"
                      >
                        <span className="text-white text-lg">
                          {humanize(key)}:
                        </span>
                        <span className="text-white text-lg">{value}</span>
                      </div>
                    )
                  )}
                </div>
              )}
              {/* trash order */}
              <button
                className="w-[150px] bg-red-500 text-white rounded-lg p-2 text-[20px] mx-auto"
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
