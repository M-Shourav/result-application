import { cn } from "@/lib/utils";
import React from "react";

interface Props {
  className?: String;
  children: React.ReactNode;
}

const Container = ({ className, children }: Props) => {
  return (
    <div
      className={cn("max-w-screen-[1280px] mx-auto px-4 md:px-8", className)}
    >
      {children}
    </div>
  );
};

export default Container;
