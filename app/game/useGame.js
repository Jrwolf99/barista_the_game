'use client';
import { useState } from 'react';
import book from './recipes.json';
import randomName from 'random-name';
import { humanize } from '@/app/stringHelpers';
import next from 'next';

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
      needed_ingredients: getIngredients(
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
    setWorkingOrder((prev) => {
      const newOrder = { ...prev };
      const ingrNameKey = ingrName(ingr);
      const ingrAmountValue = ingrAmount(ingr);

      newOrder.needed_ingredients = {
        ...newOrder.needed_ingredients,
        [ingrNameKey]:
          newOrder.needed_ingredients &&
          newOrder.needed_ingredients[ingrNameKey]
            ? newOrder.needed_ingredients[ingrNameKey] + ingrAmountValue
            : ingrAmountValue,
      };

      return newOrder;
    });
  };

  const handleAddCup = (cup) => {
    setWorkingOrder((prev) => {
      const newOrder = { ...prev };
      newOrder.hot_or_iced = cup.hot_or_iced;
      newOrder.size = cup.size;
      return newOrder;
    });
  };

  const handleTrashOrder = () => {
    setWorkingOrder(null);
  };

  const handleSendOff = (enteredName) => {
    const errorMessages = [];

    const addErrorMessage = (message) => {
      errorMessages.push(message);
    };

    const checkOrderDetails = () => {
      if (!workingOrder?.size || !workingOrder?.hot_or_iced) {
        addErrorMessage('You forgot to add a cup! The drink went everywhere!');
        return false;
      }

      if (!workingOrder?.needed_ingredients) {
        addErrorMessage('You forgot to add any ingredients!');
        return false;
      }

      if (
        enteredName.toLowerCase() !== currentOrder.customer_name.toLowerCase()
      ) {
        addErrorMessage(
          `Ah! The customer's name was ${currentOrder.customer_name}. You called out ${enteredName}.`
        );
      }

      if (currentOrder.hot_or_iced !== workingOrder?.hot_or_iced) {
        addErrorMessage(
          `The drink was supposed to be ${currentOrder.hot_or_iced}, but you made it ${workingOrder?.hot_or_iced}.`
        );
      }

      if (currentOrder.size !== workingOrder?.size) {
        addErrorMessage(
          `The size was supposed to be ${currentOrder.size}, but you made it ${
            workingOrder?.size ?? 'tall'
          }.`
        );
      }
      return errorMessages.length === 0;
    };

    const checkIngredients = () => {
      for (let ingr in currentOrder.needed_ingredients) {
        const expected = currentOrder.needed_ingredients[ingr];
        const actual = workingOrder?.needed_ingredients?.[ingr] ?? 0;

        if (expected === true) {
          if (!actual) {
            addErrorMessage(`• Missing ${humanize(ingr)}`);
          }
          continue;
        }

        if (expected !== actual) {
          addErrorMessage(
            `• Incorrect amount of ${humanize(
              ingr
            )}. Expected: ${expected}, Entered: ${actual}`
          );
        }
      }
    };

    const notifyErrors = () => {
      if (errorMessages.length > 0) {
        errorMessages.unshift('Sorry! The order was not correct.');
        handleTriggerNotification(
          errorMessages.join('\n'),
          3000 * errorMessages.length
        );

        return true;
      }
      return false;
    };

    const completeOrder = () => {
      handleTriggerNotification(
        `${currentOrder.drink_name}\nsent off successfully to ${currentOrder.customer_name}`
      );
      setScoreMoney((prev) => prev + 1);
      handleGenerateOrder();
    };

    if (checkOrderDetails()) {
      checkIngredients();
    }

    if (!notifyErrors()) {
      completeOrder();
    } else {
      handleTrashOrder();
    }
  };

  return {
    handleGenerateOrder,
    currentOrder,
    workingOrder,
    handleAddIngredient,
    handleAddCup,
    handleTrashOrder,
    handleSendOff,
  };
};
