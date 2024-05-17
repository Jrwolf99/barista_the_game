import ProgressBar from '@/app/game/tools/ProgressBar';
import React, { useState } from 'react';

export default function GameProgressBar({
  going,
  setGoing,
  duration,
  onComplete,
}) {
  if (!going) return null;

  return (
    <ProgressBar
      duration={5000}
      onComplete={() => {
        alert('Espresso is ready!');
        setGoing(false);
      }}
    />
  );
}
