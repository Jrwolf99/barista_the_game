import React from 'react';

export default function Station({ stationTitle }) {
  return (
    <div className="border-2 border-white p-4 h-[36vh] text-md rounded-sm bg-white/5">
      {stationTitle}
    </div>
  );
}
