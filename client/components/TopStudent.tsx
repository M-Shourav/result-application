"use client";
import React, { useEffect, useState } from "react";
import Container from "./ui/Component";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";
import axios from "axios";
import { serverUrl } from "@/utils/config";
import toast from "react-hot-toast";
import { StudentType } from "@/type";

const TopStudent = () => {
  const [loading, setLoading] = useState(false);
  const [studentList, setStudentList] = useState<StudentType[]>([]);
  console.log(studentList);

  const autoplay = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: false })
  );

  useEffect(() => {
    const studentList = async () => {
      try {
        setLoading(true);
        const res = await axios.get(`${serverUrl}/api/get-all-student`, {
          withCredentials: true,
        });
        const data = res?.data;
        if (data?.success) {
          setStudentList(data?.studentList);
        } else {
          toast.error(data?.message);
        }
      } catch (error) {
        console.log("Internal server error", error);
      } finally {
        setLoading(false);
      }
    };
    studentList();
  }, []);

  return (
    <section className="bg-[#ffffff]">
      <Container className={"py-10"}>
        <div className="relative flex items-end gap-x-2 mb-6">
          <div className=" shrink-0">
            <h2 className="text-lg md:text-2xl font-semibold md:font-bold tracking-tight">
              সেরা ছাত্র/ছাত্রী
            </h2>
          </div>
          <div className="w-[75%] h-px bg-gray-200" />
        </div>
        <Carousel
          plugins={[autoplay.current]}
          opts={{ align: "start", loop: true }}
          className="w-full"
        >
          <CarouselContent className="-ml-2">
            {studentList?.map((items, index) => (
              <CarouselItem key={index} className="pl-1 md:basis-1/3">
                <div className="p-1">
                  <Card className="bg-transparent relative overflow-hidden">
                    <CardContent className="flex flex-col gap-y-4 aspect-video items-center justify-center p-6">
                      <Image
                        src={items?.avatar.url || "image"}
                        alt={items?.name}
                        width={500}
                        height={500}
                        className="w-40 h-40"
                      />
                      <div className="flex flex-col gap-y-2">
                        <h3 className="text-base md:text-lg text-center font-semibold">
                          {items?.name}
                        </h3>
                        <p className="text-sm text-center text-muted-foreground font-semibold tracking-wider">
                          ({items?.className})
                        </p>
                        <div className="flex items-center justify-between gap-x-3">
                          <p className="text-base text-muted-foreground">
                            রোলঃ
                            <strong className="text-black text-lg font-bold ml-1">
                              {items?.roll}
                            </strong>
                          </p>
                          <p className="text-base text-muted-foreground">
                            সময়ঃ{" "}
                            <strong className="text-black text-lg font-bold ml-1">
                              {items?.year}
                            </strong>
                          </p>
                        </div>
                      </div>
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

export default TopStudent;
