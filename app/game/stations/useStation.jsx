import GameProgressBar from '@/app/game/tools/GameProgressBar';
import { useMemo, useState } from 'react';

export const useStation = () => {
  console.log('useStation');

  const [makingObjectState, setMakingObjectState] = useState(null);

  const makingObject = useMemo(() => {
    return makingObjectState;
  }, [makingObjectState]);

  const ingrName = (ingr) => {
    return Object.keys(ingr)[0];
  };

  const ingrAmount = (ingr) => {
    return Object.values(ingr)[0];
  };

  const handleButtonClick = (ingr, duration) => {
    console.log('Making ' + ingrAmount(ingr) + ' ' + ingrName(ingr) + '...');
    setMakingObjectState({ duration, ingredient: ingr });
  };

  const Button = ({ ingr, duration, children }) => (
    <button
      onClick={() => handleButtonClick(ingr, duration)}
      className="bg-white text-black px-1 py-2 min-h-[30px] rounded-lg"
    >
      {children}
    </button>
  );

  const ProgBar = () => {
    return (
      <GameProgressBar
        going={makingObject?.ingredient}
        setGoing={setMakingObjectState}
        duration={makingObject?.duration}
        onComplete={() => {
          alert(
            `Finished making ${ingrAmount(makingObject.ingredient)} ${ingrName(
              makingObject.ingredient
            )}`
          );
        }}
      />
    );
  };

  return {
    Button,
    ProgBar,
  };
};
