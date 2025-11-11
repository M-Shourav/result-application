import React from "react";
import Container from "./ui/Component";
import Image from "next/image";
import { InfoImg, school_Img } from "@/public";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { MegaphoneOff } from "lucide-react";

const Notice = () => {
  return (
    <div className="w-full bg-white/80">
      <Container className={"py-15"}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="relative md:col-span-2">
            <div className="w-full">
              <Image
                src={school_Img}
                alt="school-image"
                className="w-full md:w-1/2 object-cover"
              />
            </div>
            <div className="md:absolute mt-10 md:mt-0 top-10 left-52 w-full">
              <Card className="w-full max-w-xl">
                <CardHeader>
                  <CardTitle>
                    <h2 className="text-2xl font-semibold">
                      প্রতিষ্ঠান সম্পর্কে
                    </h2>
                    <div className="w-full max-w-52 h-1.5 bg-green-500 mt-4" />
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-base font-normal text-black">
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
              <MegaphoneOff
                className="-rotate-25 transition-all mt-1 text-red-500"
                size={40}
              />
              <h2 className="text-2xl font-semibold">নোটিশ বোর্ড</h2>
            </div>

            <div className="flex flex-col gap-4">
              <div className="w-full flex items-center justify-center bg-white p-2 rounded-md">
                <Image src={InfoImg} alt="info-image" />
                <h4 className="text-sm font-semibold text-black p-2">
                  আগামীকাল মহান স্বাধীনতা দিবস উপলক্ষে স্কুল এবং কলেজ বন্ধ...
                </h4>
                <div>
                  <Button
                    className="mt-4 py-1 bg-green-100/50 text-green-500 text-xs font-semibold rounded-full hover:bg-green-700 hover:text-white duration-300"
                    size="sm"
                  >
                    বিস্তারিত
                  </Button>
                </div>
              </div>
              <div className="w-full flex items-center justify-center bg-white p-2 rounded-md">
                <Image src={InfoImg} alt="info-image" />
                <h4 className="text-sm font-semibold text-black p-2">
                  ২০২৬ ভর্তি সংক্রান্ত জরুরী বিজ্ঞপ্তী!
                </h4>
                <div>
                  <Button
                    className="mt-4 py-1 bg-green-100/50 text-green-500 text-xs font-semibold rounded-full hover:bg-green-700 hover:text-white duration-300"
                    size="sm"
                  >
                    বিস্তারিত
                  </Button>
                </div>
              </div>
              <div className="w-full flex items-center justify-center bg-white p-2 rounded-md">
                <Image src={InfoImg} alt="info-image" />
                <h4 className="text-sm font-semibold text-black p-3">
                  সকল শ্রেনির ১ম সেমিষ্টার পরীক্ষার রুটিন
                </h4>
                <div>
                  <Button
                    className="mt-4 py-1 bg-green-100/50 text-green-500 text-xs font-semibold rounded-full hover:bg-green-700 hover:text-white duration-300"
                    size="sm"
                  >
                    বিস্তারিত
                  </Button>
                </div>
              </div>
              <div className="w-full flex items-center justify-center bg-white p-2 rounded-md">
                <Image src={InfoImg} alt="info-image" />
                <h4 className="text-sm font-semibold text-black p-4">
                  বেতন সংক্রান্ত জরুরী বিজ্ঞপ্তী!
                </h4>
                <div>
                  <Button
                    className="mt-4 py-1 bg-green-100/50 text-green-500 text-xs font-semibold rounded-full hover:bg-green-700 hover:text-white duration-300"
                    size="sm"
                  >
                    বিস্তারিত
                  </Button>
                </div>
              </div>
              <div className="w-full flex items-center justify-center bg-white p-2 rounded-md">
                <Image src={InfoImg} alt="info-image" />
                <h4 className="text-sm font-semibold text-black p-2">
                  পহেলা বৈশাখ উপলক্ষে আগামীকাল স্কুল ও কলেজ বন্ধ..
                </h4>
                <div>
                  <Button
                    className="mt-4 py-1 bg-green-100/50 text-green-500 text-xs font-semibold rounded-full hover:bg-green-700 hover:text-white duration-300"
                    size="sm"
                  >
                    বিস্তারিত
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Notice;
