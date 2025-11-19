"use client";
import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

interface Props {
  end: number;
  duration?: number;
  className?: String;
  countClassName?: String;
}

const Counter: React.FC<Props> = ({
  end,
  duration = 200,
  className,
  countClassName,
}) => {
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
    <div className={cn("flex items-center justify-center", className)}>
      <h2
        className={cn(
          "text-2xl md:text-3xl font-bold duration-300",
          countClassName
        )}
      >
        {count}
      </h2>
    </div>
  );
};

export default Counter;
