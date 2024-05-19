import AppContext from '@/context/state';
import React, { useContext } from 'react';

export default function DrinkSelector() {
  const { handleAddCup } = useContext(AppContext);
  return (
    <div className="grid grid-cols-2 gap-1">
      <CupButton
        type="hot"
        size="Tall Hot"
        scale={0.75}
        onClick={() => handleAddCup({ hot_or_iced: 'hot', size: 'Tall' })}
      />

      <CupButton
        type="cold"
        size="Tall Ice"
        scale={0.75}
        onClick={() => handleAddCup({ hot_or_iced: 'iced', size: 'Tall' })}
      />
      <CupButton
        type="hot"
        size="Grande Hot"
        scale={1}
        onClick={() => handleAddCup({ hot_or_iced: 'hot', size: 'Grande' })}
      />
      <CupButton
        type="cold"
        size="Grande Ice"
        scale={1}
        onClick={() => handleAddCup({ hot_or_iced: 'iced', size: 'Grande' })}
      />

      <CupButton
        type="hot"
        size="Venti Hot"
        scale={1.25}
        onClick={() => handleAddCup({ hot_or_iced: 'hot', size: 'Venti' })}
      />

      <CupButton
        type="cold"
        size="Venti Ice"
        scale={1.25}
        onClick={() => handleAddCup({ hot_or_iced: 'iced', size: 'Venti' })}
      />
    </div>
  );
}

const CupButton = ({ type, size, scale, onClick }) => (
  <button
    className="bg-transparent border-2 rounded-lg w-[85px] py-2"
    onClick={onClick}
  >
    <span className="block text-xs text-center mt-2">{size}</span>

    <img
      src={type === 'hot' ? '/hot_cup.png' : '/ice_cup.png'}
      alt={`${size} ${type} cup`}
      className="w-full h-auto"
      style={{ transform: `scale(${scale})` }}
    />
  </button>
);
