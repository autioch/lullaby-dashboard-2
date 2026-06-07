import './Clock.css';
import { useEffect, useRef, useState } from 'react';

function formatPart(num: number) {
  return num.toString().padStart(2, '0');
}

function getCurrentTime() {
  const date = new Date();
  return `${formatPart(date.getHours())}:${formatPart(date.getMinutes())}`;
}

export function Clock() {
  const [time, setTime] = useState<string>(getCurrentTime());
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const intervalId = setInterval(() => setTime(getCurrentTime()), 10000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const element = ref.current;

    if (!element) {
      return;
    }

    const observer = new ResizeObserver((entries) => {
      element.style.fontSize = `${entries[0].contentRect.width * 0.38}px`;
    });

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="c-clock" ref={ref}>
      {time}
    </div>
  );
}
