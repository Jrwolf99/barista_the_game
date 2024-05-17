import GameProgressBar from '@/app/game/tools/GameProgressBar';
import React, { useState } from 'react';

export default function EspressoStation() {

  const [makingEspressoOrMilk, setMakingEspressoOrMilk] = useState(false);

  const handleButtonClick = () => {
    setMakingEspressoOrMilk(true);
  };

  const Button = ({ children }) => (
    <button
      onClick={handleButtonClick}
      className="bg-white text-black px-1 py-2 min-h-[30px] rounded-lg"
    >
      {children}
    </button>
  );

  return (
    <div className="mt-2 grid grid-cols-2 gap-4 text-[12px] leading-[15px]">
      <div>
        <div className="text-center font-bold mb-1">Pull Espresso</div>
        <div className="flex flex-col gap-2">
          <Button>Single Espresso</Button>
          <Button>Double Espresso</Button>
          <Button>Single Ristretto</Button>
          <Button>Double Ristretto</Button>
        </div>
      </div>

      <div>
        <div className="text-center font-bold mb-1">Steam Milk</div>
        <div className="grid grid-cols-2 gap-2">
          <Button>Half & Half</Button>
          <Button>Whole Milk</Button>
          <Button>2% Milk</Button>
          <Button>Almond Milk</Button>
          <Button>Oat Milk</Button>
          <Button>Soy Milk</Button>
        </div>
      </div>
      <div className="col-span-2">
        <GameProgressBar
          going={makingEspressoOrMilk}
          setGoing={setMakingEspressoOrMilk}
          duration={5000}
          onComplete={() => {
            alert('Espresso is ready!');
          }}
        />
      </div>
    </div>
  );
}
