import ProgressBar from '@/app/game/tools/ProgressBar';
import React, { useState } from 'react';

export default function GameProgressBar({ duration, onComplete }) {
  const [hideBar, setHideBar] = useState(false);

  if (hideBar) return null;

  return (
    <ProgressBar
      duration={5000}
      onComplete={() => {
        alert('Espresso is ready!');
        setHideBar(true);
      }}
    />
  );
}
