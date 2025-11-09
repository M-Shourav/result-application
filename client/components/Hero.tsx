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

const slider = [
  { image: slider_1, text: "স্বাগতম এক্সয়াইজেট স্কুল এন্ড কলেজের পক্ষ থেকে" },
  { image: slider_2, text: "test2" },
  { image: slider_3, text: "test3" },
];

const Hero = () => {
  const autoplay = useRef(Autoplay({ delay: 5000, stopOnInteraction: false }));

  return (
    <Container className="py-5">
      <Carousel plugins={[autoplay.current]} className="w-full">
        <CarouselContent>
          {slider.map((item, index) => (
            <CarouselItem key={index}>
              <div className="p-1 h-[450px]">
                <Card className="py-0 bg-transparent relative">
                  <Image
                    src={item.image}
                    alt={`slider_${index}`}
                    className="w-full h-full object-cover"
                  />
                  <h2 className=" absolute bottom-10 left-[20%] text-3xl font-semibold text-white text-center animate__animated animate__fadeInUp">
                    {item?.text}
                  </h2>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="absolute bottom-10 right-15">
          <CarouselPrevious />
          <CarouselNext />
        </div>
      </Carousel>
    </Container>
  );
};

export default Hero;
