import { useState, useEffect } from 'react';

export default function ProgressBar({ duration, onComplete }) {
  const [timeLeft, setTimeLeft] = useState(duration / 1000);

  useEffect(() => {
    if (timeLeft <= 0) {
      onComplete();
      return;
    }

    const intervalId = setInterval(() => {
      setTimeLeft((prevTimeLeft) => Math.max(0, prevTimeLeft - 0.01));
    }, 10);

    return () => clearInterval(intervalId);
  }, [timeLeft, onComplete]);

  const progress = (duration - timeLeft * 1000) / duration;

  if (progress >= 1) {
    return null; // Don't render anything if the progress is complete
  }

  return (
    <div className="mt-2 relative w-full">
      <div className="w-full h-5 bg-gray-200 rounded-full shadow">
        <div
          className="flex items-center justify-start text-white text-sm font-medium px-2 h-full"
          style={{
            width: `${Math.max(1, progress * 100)}%`, // Ensures there's always a minimum width to display text
            backgroundColor: '#4CAF50', // Green
            borderRadius: '9999px', // Fully rounded ends
          }}
        >
          {Math.ceil(timeLeft)}s
        </div>
      </div>
    </div>
  );
}
