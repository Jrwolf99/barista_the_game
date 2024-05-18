import { useStation } from '@/app/game/stations/useStation';
import React from 'react';

export default function EspressoStation() {
  const { Button, ProgBar } = useStation();
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
          <div className="text-center font-bold mb-1">Steam Milk</div>
          <div className="grid grid-cols-2 gap-2">
            <Button duration={5000} ingr={{ half_and_half: 1 }}>
              Half & Half
            </Button>
            <Button duration={5000} ingr={{ whole_milk: 1 }}>
              Whole Milk
            </Button>
            <Button duration={5000} ingr={{ two_percent_milk: 1 }}>
              2% Milk
            </Button>
            <Button duration={5000} ingr={{ almond_milk: 1 }}>
              Almond Milk
            </Button>
            <Button duration={5000} ingr={{ oat_milk: 1 }}>
              Oat Milk
            </Button>
            <Button duration={5000} ingr={{ soy_milk: 1 }}>
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
