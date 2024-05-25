import { useStation } from '@/app/game/stations/useStation';
import AppContext from '@/context/state';
import React, { useContext } from 'react';

export default function EspressoStation() {
  const { Button, ProgBar } = useStation();

  const { workingOrder } = useContext(AppContext);

  const milkDuration = workingOrder?.hot_or_iced === 'iced' ? 1000 : 5000;

  return (
    <div className="mt-2 grid grid-cols-2 gap-4 text-[12px] leading-[15px]">
      <>
        <div>
          <div className="text-center font-bold mb-1">Pull Espresso</div>
          <div className="flex flex-col gap-2">
            <Button duration={2000} ingr={{ espresso: 1 }}>
              Single Espresso
            </Button>
            <Button duration={3500} ingr={{ espresso: 2 }}>
              Double Espresso
            </Button>
            <Button duration={3000} ingr={{ ristretto: 1 }}>
              Single Ristretto
            </Button>
            <Button duration={4500} ingr={{ ristretto: 2 }}>
              Double Ristretto
            </Button>
          </div>
        </div>

        <div>
          {workingOrder?.hot_or_iced === 'iced' ? (
            <div className="text-center font-bold mb-1">Pour Milk</div>
          ) : (
            <div className="text-center font-bold mb-1">Steam Milk</div>
          )}
          <div className="grid grid-cols-2 gap-2">
            <Button duration={milkDuration} ingr={{ half_and_half: true }}>
              Half & Half
            </Button>
            <Button duration={milkDuration} ingr={{ whole_milk: true }}>
              Whole Milk
            </Button>
            <Button duration={milkDuration} ingr={{ two_percent_milk: true }}>
              2% Milk
            </Button>
            <Button duration={milkDuration} ingr={{ almond_milk: true }}>
              Almond Milk
            </Button>
            <Button duration={milkDuration} ingr={{ oat_milk: true }}>
              Oat Milk
            </Button>
            <Button duration={milkDuration} ingr={{ soy_milk: true }}>
              Soy Milk
            </Button>
          </div>
        </div>
      </>
      <div className="col-span-2">
        <ProgBar />
      </div>
    </div>
  );
}
