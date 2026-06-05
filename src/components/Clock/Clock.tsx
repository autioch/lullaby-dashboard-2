import './Clock.css';
import { useEffect, useState } from 'react';

function formatPart(num: number) {
  return num.toString().padStart(2, '0');
}

function getCurrentTime() {
  const date = new Date();
  return `${formatPart(date.getHours())}:${formatPart(date.getMinutes())}`;
}

export function Clock() {
  const [time, setTime] = useState<string>(getCurrentTime());

  useEffect(() => {
    const intervalId = setInterval(() => setTime(getCurrentTime()), 10000);

    return () => clearInterval(intervalId);
  }, []);

  return <div className="c-clock">{time}</div>;
}
