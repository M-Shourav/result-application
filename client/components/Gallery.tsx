"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Container from "./ui/Component";
import { gallery_1, gallery_2, gallery_3 } from "@/public";
import Image from "next/image";

const slider = [
  {
    image: gallery_1,
    text: "বিদ্যালয়ের ভিতরের ছবির একাংশ। এক্সওয়াইজেধ স্কুল এবং কলেজ",
  },
  { image: gallery_2, text: "বার্ষিক ক্রীড়া অনুষ্ঠানের ছবির একাংশ " },
  { image: gallery_3, text: "বিদ্যালয়ের সামনের ছবি" },
];

const Gallery = () => {
  const autoplay = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: false })
  );

  return (
    <section className="bg-[#ffffff]">
      <Container className={"py-10"}>
        <div className="relative flex items-end gap-x-2 mb-6">
          <div className=" shrink-0">
            <h2 className="text-lg md:text-3xl font-semibold md:font-bold tracking-tight">
              ছবি এবং ভিডিও গ্যালারী
            </h2>
          </div>
          <div className="w-[64%] h-px bg-gray-200" />
        </div>
        <Carousel
          plugins={[autoplay.current]}
          opts={{ align: "start", loop: true }}
          className="w-full"
        >
          <CarouselContent className="-ml-2">
            {slider?.map((items, index) => (
              <CarouselItem key={index} className="pl-1 md:basis-1/2">
                <div className="p-1">
                  <Card className="bg-transparent relative overflow-hidden">
                    <CardContent className="flex aspect-video items-center justify-center p-6">
                      <Image
                        src={items?.image}
                        alt={items?.text}
                        className="w-full h-full absolute inset-0 object-cover overflow-hidden hover:scale-110 duration-300 "
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent pointer-events-none " />
                      <h2 className="text-sm md:text-base text-center px-6 md:px-0 font-semibold z-10 text-white absolute bottom-10">
                        {items?.text}
                      </h2>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className=" absolute right-10 -top-9">
            <CarouselPrevious className="rounded-md bg-gray-100 text-black/80 hover:bg-gray-100 hover:text-black" />
            <CarouselNext className=" rounded-md bg-gray-100 text-black/80 hover:bg-gray-100 hover:text-black" />
          </div>
        </Carousel>
      </Container>
    </section>
  );
};

export default Gallery;
