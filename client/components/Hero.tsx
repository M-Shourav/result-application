"use client";
import React, { useRef } from "react";
import Container from "./ui/Component";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { Card } from "./ui/card";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { slider_1, slider_2, slider_3 } from "@/public";
import Link from "next/link";

const slider = [
  { image: slider_1, text: "স্বাগতম এক্সয়াইজেট স্কুল এবং কলেজ এর পক্ষ থেকে" },
  { image: slider_2, text: "স্বাগতম এক্সয়াইজেট স্কুল এবং কলেজ এর পক্ষ থেকে" },
  { image: slider_3, text: "স্বাগতম এক্সয়াইজেট স্কুল এবং কলেজ এর পক্ষ থেকে" },
];

const Hero = () => {
  const autoplay = useRef(Autoplay({ delay: 5000, stopOnInteraction: false }));

  return (
    <Container className="py-5">
      <Carousel plugins={[autoplay.current]} className="w-full">
        <CarouselContent>
          {slider.map((item, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card className="py-0 bg-transparent relative h-80 md:h-[500px] rounded-md overflow-hidden">
                  <Image
                    src={item.image}
                    alt={`slider_${index}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent" />
                  <h2 className="w-full max-w-2xl p-2 md:px-8 lg:px-0 mx-auto absolute bottom-18 md:bottom-10 md:left-[15%] lg:left-[25%] z-10 text-xl md:text-4xl font-extrabold text-white text-center animate__animated animate__fadeInUp md:leading-11">
                    {item?.text}
                  </h2>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="absolute bottom-10 right-15 z-10">
          <CarouselPrevious className="rounded-md" />
          <CarouselNext className=" rounded-md" />
        </div>
      </Carousel>
    </Container>
  );
};

export default Hero;
