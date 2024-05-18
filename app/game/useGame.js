'use client';
import { useState } from 'react';
import book from './recipes.json';
import randomName from 'random-name';

const sizes = ['Tall', 'Grande', 'Venti'];

export const useGame = (setScoreMoney, handleTriggerNotification) => {
  const [currentOrder, setCurrentOrder] = useState(null);
  const [workingOrder, setWorkingOrder] = useState(null);

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

  const ingrName = (ingr) => {
    return Object.keys(ingr)[0];
  };

  const ingrAmount = (ingr) => {
    return Object.values(ingr)[0];
  };

  const handleAddIngredient = (ingr) => {
    console.log(ingr);

    setWorkingOrder((prev) => {
      const newOrder = { ...prev };
      const ingrNameKey = ingrName(ingr);
      const ingrAmountValue = ingrAmount(ingr);

      newOrder.needed_ingredients = {
        ...newOrder.needed_ingredients,
        [ingrNameKey]: newOrder.needed_ingredients[ingrNameKey]
          ? newOrder.needed_ingredients[ingrNameKey] + ingrAmountValue
          : ingrAmountValue,
      };

      return newOrder;
    });
  };

  const handleSendOff = (enteredName) => {
    const errorMessages = [];

    if (
      enteredName.toLowerCase() !== currentOrder.customer_name.toLowerCase()
    ) {
      errorMessages.push(
        `Customer name was wrong! They didn't appreciate that. Try again with the next customer!\n`
      );
      errorMessages.push(
        `The name was ${currentOrder.customer_name} and not ${enteredName}.`
      );
    }

    try {
      if (errorMessages.length > 0) {
        handleTriggerNotification(errorMessages.join('\n'), 3000);
        return;
      }

      handleTriggerNotification(
        currentOrder.drink_name +
          '\nsent off successfully to ' +
          currentOrder.customer_name
      );
      setScoreMoney((prev) => prev + 1);
    } finally {
      handleGenerateOrder();
    }
  };

  return {
    handleGenerateOrder,
    currentOrder,
    workingOrder,
    handleAddIngredient,
    handleSendOff,
  };
};
