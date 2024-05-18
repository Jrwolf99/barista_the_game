import React, { useState } from 'react';

export default function SendOffCounter({
  handleSendOff,
  handleTriggerNotification,
}) {
  const [enteredName, setEnteredName] = useState('');

  return (
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
  );
}
