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
            width: `${Math.max(1, Math.sqrt(progress) * 100)}%`,
            backgroundColor: '#4CAF50',
            borderRadius: '9999px',
          }}
        >
          {timeLeft.toFixed(1)}s
        </div>
      </div>
    </div>
  );
}
