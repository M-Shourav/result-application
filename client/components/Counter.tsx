"use client";
import React, { useEffect, useState } from "react";

interface Props {
  end: number;
  duration?: number;
}

const Counter: React.FC<Props> = ({ end, duration = 200 }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const stepTime = Math.abs(Math.floor(duration / end));

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= end) clearInterval(timer);
    }, stepTime);
    return () => clearInterval(timer);
  }, [end, duration]);
  return (
    <div className="flex items-center justify-center">
      <h2 className="text-6xl font-bold text-[#5592d0]">{count}</h2>
    </div>
  );
};

export default Counter;
