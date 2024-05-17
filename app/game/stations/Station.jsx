import React from 'react';

export default function Station({ stationTitle, children }) {
  return (
    <div className="border-2 border-white p-4 h-[36vh] rounded-sm bg-white/5">
      <div className="text-sm underline">{stationTitle}</div>
      <div>{children}</div>
    </div>
  );
}
