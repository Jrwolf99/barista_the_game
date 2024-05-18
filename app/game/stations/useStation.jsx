import GameProgressBar from '@/app/game/tools/GameProgressBar';
import AppContext from '@/context/state';
import { useContext, useState } from 'react';

export const useStation = () => {
  const [makingObject, setMakingObject] = useState(null);
  const { workingOrder, handleAddIngredient } = useContext(AppContext);

  const handleButtonClick = (ingr, duration) => {
    setMakingObject({ duration, ingredient: ingr });
  };

  const handleComplete = () => {
    handleAddIngredient(makingObject.ingredient);
    setMakingObject(null);
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
        setGoing={setMakingObject}
        duration={makingObject?.duration}
        onComplete={() => {
          handleComplete();
        }}
      />
    );
  };

  return {
    Button,
    ProgBar,
  };
};
