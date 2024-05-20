import { useStation } from '@/app/game/stations/useStation';
import React from 'react';

export default function SyrupStation() {
  const { Button, ProgBar } = useStation();
  return (
    <div className="mt-2 grid grid-cols-2 gap-4 text-[12px] leading-[15px]">
      <>
        <div>
          <div className="text-center font-bold mb-1">Syrups</div>
          <div className="grid grid-cols-2 gap-2">
            <Button duration={300} ingr={{ vanilla: 1 }}>
              Vanilla
            </Button>
            <Button duration={300} ingr={{ caramel: 1 }}>
              Caramel
            </Button>
            <Button duration={300} ingr={{ sugar_free_vanilla: 1 }}>
              Sugar Free Vanilla
            </Button>
            <Button duration={300} ingr={{ toffee_nut: 1 }}>
              Toffee Nut
            </Button>
            <Button duration={300} ingr={{ hazelnut: 1 }}>
              Hazelnut
            </Button>
            <Button duration={300} ingr={{ peppermint: 1 }}>
              Peppermint
            </Button>
            <Button duration={300} ingr={{ raspberry: 1 }}>
              Raspberry
            </Button>
            <Button duration={300} ingr={{ cinnamon_dolce: 1 }}>
              Cinnamon Dolce
            </Button>
            <Button duration={300} ingr={{ brown_sugar: 1 }}>
              Brown Sugar
            </Button>
            <Button duration={300} ingr={{ classic: 1 }}>
              Classic
            </Button>
          </div>
        </div>

        <div>
          <div className="text-center font-bold mb-1">
            Additional Syrups and Sauces
          </div>
          <div className="grid grid-cols-2 gap-2">
            <Button duration={300} ingr={{ mocha_sauce: 1 }}>
              Mocha Sauce
            </Button>
            <Button duration={300} ingr={{ white_chocolate_mocha_sauce: 1 }}>
              White Chocolate Mocha Sauce
            </Button>
            <Button duration={300} ingr={{ pistachio_sauce: 1 }}>
              Pistachio Sauce
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
