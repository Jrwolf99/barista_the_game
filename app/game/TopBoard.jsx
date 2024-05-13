'use client';
import React from 'react';

export default function TopBoard({ metaInfo }) {
  return (
    <div>
      <div className="text-2xl">Time: {metaInfo.formattedTime}</div>
      <div className="text-2xl">Money: {metaInfo.scoreMoney}</div>
    </div>
  );
}
