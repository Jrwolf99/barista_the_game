import React from 'react';

export default function Station({ stationTitle }) {
  return (
    <div className="border-2 border-white p-4 min-h-[300px] text-md rounded-sm bg-white/5">
      {stationTitle}
    </div>
  );
}
