"use client";
import React, { useRef } from "react";
import Container from "./ui/Component";
import Image from "next/image";
import {
  InfoImg,
  quote,
  school_Img,
  slider_1,
  slider_2,
  teacher_1,
  teacher_2,
} from "@/public";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { CircleAlert, Link, MegaphoneOff, TowerControl } from "lucide-react";
import { FaArrowRightLong } from "react-icons/fa6";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const slider = [
  {
    image: teacher_1,
    name: "মোঃ মোস্তফা কামাল ভূঁইয়া",
    lastName: "অধ্যক্ষের বাণী",
    text: "প্রিয় শিক্ষার্থীবৃন্দ, আজ আমি আপনাদের সামনে দাঁড়িয়েছি একজন শিক্ষক হিসেবে, একজন অভিভাবক হিসেবে, এবং একজন বন্ধু হিসেবে। আমি আপনাদেরকে বলতে চাই যে, আপনারা সকলেই সক্ষম। আপনারা সকলেই আপনার সম্পূর্ণ সম্ভাবনায় পৌঁছাতে পারেন। আপনাদেরকে শুধুমাত্র কঠোর পরিশ্রম করতে হবে, সৎ হতে হবে, এবং অন্যদের প্রতি শ্রদ্ধাশীল হতে হবে। আপনাদেরকে নিজের উপর বিশ্বাস রাখতে হবে এবং কখনই থেমে থাকতে হবে না। আমি আপনাদের জন্য শুভকামনা জানাই। আমি আশা করি আপনারা সকলেই একজন ভালো মানুষ হিসেবে গড়ে উঠবেন এবং আপনারা আপনার লক্ষ্য অর্জনে সফল হবেন। ধন্যবাদ।",
  },
  {
    image: teacher_2,
    lastName: "উপাধ্যক্ষের বাণী",
    name: "মিসেস শিউলি আক্তার",
    text: ` আমাদের স্কুলের লক্ষ্য হল শিক্ষার্থীদের একটি সুন্দর ও সুস্থ পরিবেশে মানসম্মত শিক্ষা প্রদান করা। আমরা শিক্ষার্থীদেরকে একজন ভালো মানুষ হিসেবে গড়ে তোলার লক্ষ্যে কাজ করছি। আমাদের স্কুলের উদ্দেশ্য হল শিক্ষার্থীদেরকে তাদের সম্পূর্ণ সম্ভাবনায় পৌঁছাতে সাহায্য করা। আমরা শিক্ষার্থীদেরকে তাদের মেধা ও প্রতিভা বিকাশের সুযোগ করে দিচ্ছি। আমরা শিক্ষার্থীদের কাছ থেকে আশা করি তারা কঠোর পরিশ্রম করবে, সৎ হবে, এবং অন্যদের প্রতি শ্রদ্ধাশীল হবে। আমরা চাই শিক্ষার্থীরা স্ক্রু থেকে বেরিয়ে এসে একজন ভালো মানুষ হিসেবে পরিণত হবে।`,
  },
];

const Notice = () => {
  const autoplay = useRef(Autoplay({ delay: 5000, stopOnInteraction: false }));
  return (
    <div className="w-full bg-white/80">
      <Container className={"py-15"}>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="relative lg:col-span-1 w-full">
            <div className="w-full">
              <Image
                src={school_Img}
                alt="school-image"
                className="w-[450px] md:w-[550px] h-[350px] md:h-full object-cover"
              />
            </div>
            <div className="md:absolute mt-10 md:mt-0 top-10 left-52 w-full">
              <Card className="w-full max-w-xl py-2 pb-6">
                <CardHeader className="pb-0 p-4">
                  <CardTitle>
                    <h2 className="text-2xl font-semibold">
                      প্রতিষ্ঠান সম্পর্কে
                    </h2>
                    <div className="w-full max-w-52 h-1.5 bg-green-500 mt-4" />
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm font-semibold text-black leading-relaxed">
                    এক্সওয়াইজেধ স্কুল এবং কলেজ এর অতীত গৌরবোজ্জ্বল বর্তমান
                    প্রশংসনীয়। ২০২৩ ইংরেজীর ২০ শে জানুয়ারী এক্সওয়াইজেধ স্কুল এবং
                    কলেজ এর স্থানীয় ম্যাজিষ্ট্রেট অফিসের তৎকালীন প্রধান কারণিক
                    মি: এক্সওয়াইজেধ কর্তৃক প্রতিষ্ঠিত। তখন এটা এক্সওয়াইজেধ
                    গভর্ণমেন্ট স্কুল নামে পরিচিত ছিল। ৯ জন বাংলাদেশী, ১ জন
                    হিন্দু ও ৮ জন মুসলমান বিদ্যোৎসাহী ব্যক্তির একটি কমিটির উপর
                    এর পরিচালনার দায়িত্ব ন্যাস্ত ছিল। এদেশের অধিবাসীদের বাংলায়
                    শিক্ষায় শিক্ষিত করার জন্য এ বিদ্যালয় চালু করা হয়। ২০২৩
                    ইংরেজির ১ ই মে মি: এক্সওয়াইজেধ বিদ্যালয়ের প্রধান শিক্ষক
                    নিযুক্ত হন।
                  </p>
                  <Button className="mt-4 bg-green-100/50 text-green-500 text-sm font-semibold rounded-full hover:bg-green-700 hover:text-white duration-300">
                    বিস্তারিত পড়ুন
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
          <div className="bg-gray-100 rounded-md px-3 py-2">
            <div className="flex items-center justify-center gap-4 p-6">
              <MegaphoneOff className="-rotate-25 transition-all mt-1 text-red-500 w-10 h-10" />
              <h2 className="text-xl md:text-2xl font-semibold">নোটিশ বোর্ড</h2>
            </div>
            <div className="flex flex-col gap-4 pb-4">
              <div className="w-full flex items-center justify-between bg-white p-2 py-4 rounded-md">
                <div className="flex items-center flex-1">
                  <CircleAlert className="text-[#f45050] shrink-0 w-[30px] h-[30px]" />
                  <p className="text-xs md:text-sm font-semibold leading-snug wrap-break-words px-2">
                    আগামীকাল মহান স্বাধীনতা দিবস উপলক্ষে স্কুল এবং কলেজ বন্ধ...
                  </p>
                </div>
                <Button
                  className="py-1 bg-green-100/50 text-green-600 text-xs font-semibold rounded-full hover:bg-green-700 hover:text-white duration-300"
                  size="sm"
                >
                  বিস্তারিত
                </Button>
              </div>
              <div className="w-full flex items-center justify-between bg-white p-2 py-4 rounded-md">
                <div className="flex items-center flex-1">
                  <CircleAlert className="text-[#f45050] shrink-0 w-[30px] h-[30px]" />
                  <p className="text-xs md:text-sm leading-wider font-semibold leading-snug wrap-break-words px-2">
                    ২০২৪ ভর্তি সংক্রান্ত জরুরী বিজ্ঞপ্তী!
                  </p>
                </div>

                <Button
                  className="py-1 bg-green-100/50 text-green-600 text-xs font-semibold rounded-full hover:bg-green-700 hover:text-white duration-300"
                  size="sm"
                >
                  বিস্তারিত
                </Button>
              </div>
              <div className="w-full flex items-center justify-between bg-white p-2 py-4 rounded-md">
                <div className="flex items-center flex-1">
                  <CircleAlert className="text-[#f45050] shrink-0 w-[30px] h-[30px]" />
                  <p className="text-xs md:text-sm leading-wider font-semibold leading-snug wrap-break-words px-2">
                    সকল শ্রেনির ১ম সেমিষ্টার পরীক্ষার রুটিন
                  </p>
                </div>
                <Button
                  className="py-1 bg-green-100/50 text-green-600 text-xs font-semibold rounded-full hover:bg-green-700 hover:text-white duration-300"
                  size="sm"
                >
                  বিস্তারিত
                </Button>
              </div>
              <div className="w-full flex items-center justify-between bg-white p-2 py-4 rounded-md">
                <div className="flex items-center flex-1">
                  <CircleAlert className="text-[#f45050] shrink-0 w-[30px] h-[30px]" />
                  <p className="text-xs md:text-sm leading-wider font-semibold leading-snug wrap-break-words px-2">
                    বেতন সংক্রান্ত জরুরী বিজ্ঞপ্তী!
                  </p>
                </div>

                <Button
                  className="py-1 bg-green-100/50 text-green-600 text-xs font-semibold rounded-full hover:bg-green-700 hover:text-white duration-300"
                  size="sm"
                >
                  বিস্তারিত
                </Button>
              </div>
              <div className="w-full flex items-center justify-between bg-white p-2 py-4 rounded-md">
                <div className="flex items-center flex-1">
                  <CircleAlert className="text-[#f45050] shrink-0 w-[30px] h-[30px]" />
                  <p className="text-xs md:text-sm leading-wider font-semibold leading-snug wrap-break-words px-2">
                    পহেলা বৈশাখ উপলক্ষে আগামীকাল স্কুল ও কলেজ বন্ধ
                  </p>
                </div>

                <Button
                  className="py-1 bg-green-100/50 text-green-600 text-xs font-semibold rounded-full hover:bg-green-700 hover:text-white duration-300"
                  size="sm"
                >
                  বিস্তারিত
                </Button>
              </div>
              <div className="flex items-center justify-center mt-2">
                <Button className="bg-[#019267] text-base font-extrabold py-4 hover:bg-[#daf9f0] hover:text-[#019267] duration-300">
                  সকল নোটিশ <FaArrowRightLong />
                </Button>
              </div>
            </div>
          </div>
        </div>
        {/* school management lecture */}
        <div className=" grid grid-cols-1 lg:grid-cols-3 gap-8 mt-20">
          <div className="lg:col-span-2 w-full">
            <div className="relative flex items-end gap-x-2">
              <h2 className="text-lg md:text-3xl font-semibold md:font-bold tracking-tight">
                স্কুল পরিচালকদের বাণী
              </h2>
              <div className="w-[300px] hidden md:inline-block h-0.5 bg-gray-200" />
            </div>
            <Carousel
              plugins={[autoplay.current]}
              className="w-full mt-4 bg-[#f8f8f8]"
            >
              <CarouselContent>
                {slider.map((item, index) => (
                  <CarouselItem key={index}>
                    <div className="p-1">
                      <Card className="w-full md:p-4 bg-transparent relative h-auto rounded-md overflow-hidden">
                        <CardHeader>
                          <CardTitle className="flex flex-col md:flex-row items-center gap-4">
                            <div>
                              <Image src={item?.image} alt={item?.name} />
                            </div>
                            <div className="flex flex-col items-center md:items-start gap-4">
                              <Image src={quote} alt="quote-image" />
                              <h3 className="text-xl md:text-2xl font-bold leading-tight">
                                {item?.lastName}
                              </h3>
                              <div className="w-[120px] h-1 bg-green-500" />
                              <h3 className="text-base font-semibold">
                                {item?.name}
                              </h3>
                            </div>
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p>{item?.text}</p>
                        </CardContent>
                        <CardFooter>
                          <Button className="bg-[#daf9f0] text-[#019267] text-sm font-bold py-4 hover:bg-[#019267] hover:text-white duration-300">
                            আরো পড়ুন <FaArrowRightLong />
                          </Button>
                        </CardFooter>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="absolute -top-7 right-12 z-10">
                <CarouselPrevious className="rounded-md bg-gray-100 text-black/80 hover:bg-gray-100 hover:text-black" />
                <CarouselNext className=" rounded-md bg-gray-100 text-black/80 hover:bg-gray-100 hover:text-black" />
              </div>
            </Carousel>
          </div>
          <div className="w-full bg-gray-100 rounded-md px-3 py-2 -mt-10">
            <div className="flex items-center justify-center gap-4 p-6">
              <TowerControl className="text-[#f45050]" size={40} />
              <h2 className="text-xl md:text-2xl font-semibold">
                গুরুত্বপূর্ণ লিঙ্ক সমূহ
              </h2>
            </div>
            <div className="w-full flex flex-col gap-4">
              <div className="w-full flex items-center justify-between bg-white p-2 rounded-md">
                <div className="flex items-center flex-1">
                  <Link className="text-[#f45050] shrink-0 w-[30px] h-[30px]" />
                  <p className="text-sm font-semibold leading-snug wrap-break-words px-2">
                    শিক্ষা মন্ত্রনালয়
                  </p>
                </div>
                <Button
                  className="py-1 bg-green-100/50 text-green-600 text-xs font-semibold rounded-full hover:bg-green-700 hover:text-white duration-300"
                  size="sm"
                >
                  ভিজিট করুন
                </Button>
              </div>
              <div className="w-full flex items-center justify-between bg-white p-2 rounded-md">
                <div className="flex items-center flex-1">
                  <Link className="text-[#f45050] shrink-0 w-[30px] h-[30px]" />
                  <p className="text-sm font-semibold leading-snug wrap-break-words px-2">
                    মাধ্যমিক ও উচ্চ মাধ্যমিক শিক্ষা..
                  </p>
                </div>

                <Button
                  className="py-1 bg-green-100/50 text-green-600 text-xs font-semibold rounded-full hover:bg-green-700 hover:text-white duration-300"
                  size="sm"
                >
                  ভিজিট করুন
                </Button>
              </div>
              <div className="w-full flex items-center justify-between bg-white p-2 rounded-md">
                <div className="flex items-center flex-1">
                  <Link className="text-[#f45050] shrink-0 w-[30px] h-[30px]" />
                  <p className="text-sm font-semibold leading-snug wrap-break-words px-2">
                    পরীক্ষার রেজাল্ট
                  </p>
                </div>
                <Button
                  className="py-1 bg-green-100/50 text-green-600 text-xs font-semibold rounded-full hover:bg-green-700 hover:text-white duration-300"
                  size="sm"
                >
                  ভিজিট করুন
                </Button>
              </div>
              <div className="w-full flex items-center justify-between bg-white p-2 rounded-md">
                <div className="flex items-center flex-1">
                  <Link className="text-[#f45050] shrink-0 w-[30px] h-[30px]" />
                  <p className="text-sm font-semibold leading-snug wrap-break-words px-2">
                    ব্যানবেইস
                  </p>
                </div>

                <Button
                  className="py-1 bg-green-100/50 text-green-600 text-xs font-semibold rounded-full hover:bg-green-700 hover:text-white duration-300"
                  size="sm"
                >
                  ভিজিট করুন
                </Button>
              </div>
              <div className="w-full flex items-center justify-between bg-white p-2 rounded-md">
                <div className="flex items-center flex-1">
                  <Link className="text-[#f45050] shrink-0 w-[30px] h-[30px]" />
                  <p className="text-sm font-semibold leading-snug wrap-break-words px-2">
                    নায়েম
                  </p>
                </div>

                <Button
                  className="py-1 bg-green-100/50 text-green-600 text-xs font-semibold rounded-full hover:bg-green-700 hover:text-white duration-300"
                  size="sm"
                >
                  ভিজিট করুন
                </Button>
              </div>
              <div className="w-full flex items-center justify-between bg-white p-2 rounded-md">
                <div className="flex items-center flex-1">
                  <Link className="text-[#f45050] shrink-0 w-[30px] h-[30px]" />
                  <p className="text-sm font-semibold leading-snug wrap-break-words px-2">
                    এনসিটিবি
                  </p>
                </div>

                <Button
                  className="py-1 bg-green-100/50 text-green-600 text-xs font-semibold rounded-full hover:bg-green-700 hover:text-white duration-300"
                  size="sm"
                >
                  ভিজিট করুন
                </Button>
              </div>
              <div className="w-full flex items-center justify-between bg-white p-2 rounded-md">
                <div className="flex items-center flex-1">
                  <Link className="text-[#f45050] shrink-0 w-[30px] h-[30px]" />
                  <p className="text-sm font-semibold leading-snug wrap-break-words px-2">
                    শিক্ষক বাতায়ন
                  </p>
                </div>

                <Button
                  className="py-1 bg-green-100/50 text-green-600 text-xs font-semibold rounded-full hover:bg-green-700 hover:text-white duration-300"
                  size="sm"
                >
                  ভিজিট করুন
                </Button>
              </div>
              <div className="w-full flex items-center justify-between bg-white p-2 rounded-md">
                <div className="flex items-center flex-1">
                  <Link className="text-[#f45050]" />
                  <p className="text-sm font-semibold leading-snug wrap-break-words px-2">
                    কিশোর বাতায়ন
                  </p>
                </div>

                <Button
                  className="py-1 bg-green-100/50 text-green-600 text-xs font-semibold rounded-full hover:bg-green-700 hover:text-white duration-300"
                  size="sm"
                >
                  ভিজিট করুন
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Notice;
