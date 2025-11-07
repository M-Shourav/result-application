"use client";
import Link from "next/link";
import Container from "./ui/Component";
import { useEffect, useState } from "react";

const TopHeader = () => {
  const message = [
    {
      text: "আগামীকাল মহান স্বাধীনতা দিবস উপলক্ষে স্কুল বন্ধ থাকিবে",
      link: "#",
    },
    {
      text: "আগামীকাল মহান স্বাধীনতা উদযাপন উপলক্ষে অনুষ্ঠান অনুষ্ঠিত হবে",
      link: "#",
    },
    {
      text: "স্কুলের নতুন সেশন শুরু হবে আগামী সপ্তাহ থেকে",
      link: "#",
    },
  ];

  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // slide out শুরু
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % message.length);
        setFade(true); // slide in শুরু
      }, 1000); // 👈 transition সময় ১ সেকেন্ডের সাথে sync
    }, 10000); // প্রতি ১০ সেকেন্ডে change হবে

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-16 bg-gray-100">
      <Container className={"h-full flex items-center gap-8"}>
        <div className="w-24 h-10 p-4 dark-green flex items-center justify-center rounded-md text-white">
          <p className="text-base font-semibold">আপডেট</p>
        </div>
        <div className="overflow-hidden">
          <Link
            href={message[index].link}
            className={`inline-flex transform transition-all duration-1000 ease-in-out ${
              fade ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            {message[index].text}
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default TopHeader;
