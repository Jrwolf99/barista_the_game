'use client';
import { useState } from 'react';
import book from './recipes.json';

export const useOrderGenerator = () => {
  const [currentOrder, setCurrentOrder] = useState(null);

  const handleGenerateOrder = () => {
    const { recipes } = book;

    const randomIndex = Math.floor(Math.random() * recipes.length);
    const randomRecipe = recipes[randomIndex];

    console.log('here is the random recipe', randomRecipe);
    setCurrentOrder(randomRecipe);
  };

  console.log(currentOrder);
  return { handleGenerateOrder, currentOrder };
};
