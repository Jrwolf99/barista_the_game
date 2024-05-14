import React, { useEffect } from 'react';

export default function ProgressBar({
  progress,
  setProgress,
  duration,
  onComplete,
}) {
  useEffect(() => {
    const interval = setInterval(() => {
      if (progress < 100) {
        setProgress((prev) => prev + 1);
      } else {
        clearInterval(interval);
        onComplete();
      }
    }, (duration / 100) * 1000);
    return () => clearInterval(interval);
  }, [progress, setProgress, duration, onComplete]);

  return (
    <div className="w-full h-4 bg-gray-300 rounded-lg">
      <div
        className="h-full bg-blue-500 rounded-lg"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
}
