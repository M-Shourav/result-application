"use client";
import Container from "@/components/ui/Component";
import { school_Img } from "@/public";
import { ChevronRight, House } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import CountUp from "react-countup";

const AboutPage = () => {
  return (
    <div>
      {/* Header title */}
      <div className="w-full min-h-48 mx-auto flex items-center justify-center">
        <div className="flex flex-col gap-y-5">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
            প্রতিষ্ঠান পরিচিতি
          </h1>
          <div className="flex items-center justify-center">
            <Link
              href={"/"}
              className="flex items-center gap-x-1 text-base text-muted-foreground font-medium"
            >
              {" "}
              <House className="w-5 h-5" /> মূলপাতা
            </Link>
            <ChevronRight />
            <Link href={`/about`} className="text-green-700 font-bold">
              প্রতিষ্ঠান পরিচিতি
            </Link>
          </div>
        </div>
      </div>
      {/* data */}
      <div className="w-full bg-white/80 py-10">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="w-full lg:pr-10">
              <Image
                src={school_Img}
                alt="school-image"
                className="w-full object-cover"
              />
            </div>
            <div className="flex flex-col gap-y-5">
              <div>
                <h2 className="text-2xl font-semibold">প্রতিষ্ঠান সম্পর্কে</h2>
                <div className="w-full max-w-52 h-1.5 bg-green-500 mt-4" />
              </div>
              <p className="text-base font-medium leading-7">
                এক্সওয়াইজেধ স্কুল এবং কলেজ এর অতীত গৌরবোজ্জ্বল বর্তমান
                প্রশংসনীয়। ২০২৩ ইংরেজীর ২০ শে জানুয়ারী এক্সওয়াইজেধ স্কুল এবং
                কলেজ এর স্থানীয় ম্যাজিষ্ট্রেট অফিসের তৎকালীন প্রধান কারণিক মি:
                এক্সওয়াইজেধ কর্তৃক প্রতিষ্ঠিত। তখন এটা এক্সওয়াইজেধ গভর্ণমেন্ট
                স্কুল নামে পরিচিত ছিল। ৯ জন বাংলাদেশী, ১ জন হিন্দু ও ৮ জন
                মুসলমান বিদ্যোৎসাহী ব্যক্তির একটি কমিটির উপর এর পরিচালনার
                দায়িত্ব ন্যাস্ত ছিল। এদেশের অধিবাসীদের বাংলায় শিক্ষায় শিক্ষিত
                করার জন্য এ বিদ্যালয় চালু করা হয়। ২০২৩ ইংরেজির ১ ই মে মি:
                এক্সওয়াইজেধ বিদ্যালয়ের প্রধান শিক্ষক নিযুক্ত হন।
              </p>
              <p className="text-base font-medium leading-7">
                এক্সওয়াইজেধ স্কুল এবং কলেজ তার উচ্চমানের শিক্ষা, দক্ষ শিক্ষক
                এবং আধুনিক সুযোগ-সুবিধার জন্য পরিচিত। স্কুলটিতে একটি শক্তিশালী
                পাঠ্যক্রম রয়েছে যা শিক্ষার্থীদেরকে তাদের সম্পূর্ণ সম্ভাবনায়
                পৌঁছাতে সাহায্য করে। কলেজটিতে একটি বিস্তৃত কোর্স অফার রয়েছে যা
                শিক্ষার্থীদেরকে তাদের ভবিষ্যতের ক্যারিয়ারের জন্য প্রস্তুত করে।
                এক্সওয়াইজেধ স্কুল এবং কলেজ বাংলাদেশের একটি অন্যতম সেরা শিক্ষা
                প্রতিষ্ঠান। এটি শিক্ষার্থীদেরকে একটি উচ্চমানের শিক্ষা প্রদান করে
                যা তাদেরকে তাদের সম্পূর্ণ সম্ভাবনায় পৌঁছাতে সাহায্য করে।
              </p>
            </div>
          </div>

          {/* প্রতিষ্ঠানের পরিসংখান */}
          <div>
            {/* title */}
            <div className=" flex items-end gap-x-2 mt-16">
              <div className=" shrink-0">
                <h2 className="text-lg md:text-2xl font-semibold md:font-bold tracking-tight">
                  প্রতিষ্ঠানের পরিসংখান
                </h2>
              </div>
              <div className="w-full h-px bg-gray-200" />
            </div>

            <div className="py-15 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-8">
              <div className="w-36 h-36 md:w-48 md:h-48 flex items-center justify-center rounded-full border border-gray-300 hover:border-green-800 duration-300">
                <div className="flex flex-col items-center justify-center gap-y-1">
                  <p className="text-xl md:text-4xl text-green-700 font-semibold">
                    ৫২০
                  </p>
                  <h3 className="text-base md:text-lg font-semibold">
                    সর্বোমোট শিক্ষার্থী
                  </h3>
                </div>
              </div>
              <div className="w-36 h-36 md:w-48 md:h-48 flex items-center justify-center rounded-full border border-gray-300 hover:border-green-800 duration-300">
                <div className="flex flex-col items-center justify-center gap-y-1">
                  <p className="text-xl md:text-4xl text-green-700 font-semibold">
                    ২০
                  </p>
                  <h3 className="text-base md:text-lg font-semibold">
                    শিক্ষক/শিক্ষিকা
                  </h3>
                </div>
              </div>
              <div className="w-36 h-36 md:w-48 md:h-48 flex items-center justify-center rounded-full border border-gray-300 hover:border-green-800 duration-300">
                <div className="flex flex-col items-center justify-center gap-y-1">
                  <p className="text-xl md:text-4xl text-green-700 font-semibold">
                    ৮
                  </p>
                  <h3 className="text-base md:text-lg font-semibold">
                    অফিশ কর্মচারী
                  </h3>
                </div>
              </div>
              <div className="w-36 h-36 md:w-48 md:h-48 flex items-center justify-center rounded-full border border-gray-300 hover:border-green-800 duration-300">
                <div className="flex flex-col items-center justify-center gap-y-1">
                  <p className="text-xl md:text-4xl text-green-700 font-semibold">
                    ৪০+
                  </p>
                  <h3 className="text-base md:text-lg font-semibold">
                    সর্বোমোট কক্ষ
                  </h3>
                </div>
              </div>
              <div className="w-36 h-36 md:w-48 md:h-48 flex items-center justify-center rounded-full border border-gray-300 hover:border-green-800 duration-300">
                <div className="flex flex-col items-center justify-center gap-y-1">
                  <p className="text-xl md:text-4xl text-green-700 font-semibold">
                    ৩
                  </p>
                  <h3 className="text-base md:text-lg font-semibold">
                    বিদ্যালয় ভবন
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default AboutPage;
