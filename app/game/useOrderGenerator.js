'use client';
import { useState } from 'react';
import book from './recipes.json';
import randomName from 'random-name';

const sizes = ['Tall', 'Grande', 'Venti'];

export const useOrderGenerator = () => {
  const [currentOrder, setCurrentOrder] = useState(null);

  const getIngredients = (map, sizeIndex) => {
    let ingredients = {};

    for (let ing in map) {
      if (Array.isArray(map[ing])) {
        ingredients[ing] = map[ing][sizeIndex];
      } else {
        ingredients[ing] = map[ing];
      }
    }

    return ingredients;
  };

  const handleGenerateOrder = () => {
    const { recipes } = book;

    const randomRecipeIndex = Math.floor(Math.random() * recipes.length);
    const randomRecipe = recipes[randomRecipeIndex];

    const randomSizeIndex = Math.floor(Math.random() * sizes.length);
    const randomSize = sizes[randomSizeIndex];

    setCurrentOrder({
      customer_name: randomName.first(),
      drink_name: randomRecipe.name,
      size: randomSize,
      hot_or_iced: randomRecipe.hot_or_iced,
      symbol: randomRecipe.symbol,
      syrup_symbol: randomRecipe.syrup_symbol,
      needed_ingrediants: getIngredients(
        randomRecipe.ingredient_map,
        randomSizeIndex
      ),
    });
  };

  return { handleGenerateOrder, currentOrder };
};
  
