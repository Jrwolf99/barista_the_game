import GameProgressBar from '@/app/game/tools/GameProgressBar';
import React, { useState } from 'react';

export default function EspressoStation() {
  const [progress, setProgress] = useState(0);

  const handleButtonClick = () => {
    setProgress(55);
  };

  const buttonClass = 'bg-white text-black px-1 py-2 min-h-[30px] rounded-lg';
  return (
    <div className="mt-2 grid grid-cols-2 gap-4 text-[12px] leading-[15px]">
      <div>
        <div className="text-center font-bold mb-1">Pull Espresso</div>
        <div className="flex flex-col gap-2">
          <button onClick={handleButtonClick} className={buttonClass}>
            Single Espresso
          </button>
          <button className={buttonClass}>Double Espresso</button>
          <button className={buttonClass}>Single Ristretto</button>
          <button className={buttonClass}>Double Ristretto</button>
        </div>
      </div>

      <div>
        <div className="text-center font-bold mb-1">Steam Milk</div>
        <div className="grid grid-cols-2 gap-2">
          <button className={buttonClass}>Half & Half</button>
          <button className={buttonClass}>Whole Milk</button>
          <button className={buttonClass}>2% Milk</button>
          <button className={buttonClass}>Almond Milk</button>
          <button className={buttonClass}>Oat Milk</button>
          <button className={buttonClass}>Soy Milk</button>
        </div>
      </div>
      <div className="col-span-2">
        <GameProgressBar
          duration={5000}
          onComplete={() => {
            alert('Espresso is ready!');
          }}
        />
      </div>
    </div>
  );
}
