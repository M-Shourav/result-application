"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Logo } from "@/public";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const Navbar: React.FC = () => {
  const [show, setShow] = useState(false); // initially hidden
  const [lastScroll, setLastScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (currentScroll > 50) {
        setShow(true); // scroll 50px por navbar show
      } else {
        setShow(false); // top e scroll korle hide
      }
      setLastScroll(currentScroll);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 bg-white transition-transform duration-500 shadow-md ${
        show ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-7xl mx-auto p-4 flex items-center justify-between">
        <Image
          src={Logo}
          alt="logo"
          className="w-[120px] md:w-[200px] h-auto"
        />

        <Sheet>
          <SheetTrigger asChild>
            <Menu className="text-green-600 cursor-pointer" size={30} />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>
                <Image
                  src={Logo}
                  alt="logo"
                  className="w-[120px] md:w-[200px] h-auto"
                />
              </SheetTitle>
            </SheetHeader>

            {/* Mobile Accordion Menu */}
            <div className="flex flex-col gap-4 px-4">
              {/* পরিচিতি */}
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-sm font-semibold py-0 pb-3">
                    পরিচিতি
                  </AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-4">
                    <Link
                      href="/"
                      className="text-sm font-semibold text-gray-600 p-2 pb-4 border-b border-b-gray-200 hover:text-green-500 duration-500"
                    >
                      প্রতিষ্ঠানের পরিচিতি
                    </Link>
                    <Link
                      href="/"
                      className="text-sm font-semibold text-gray-600 p-2 -mt-3 pb-3 border-b border-b-gray-200 hover:text-green-500 duration-500"
                    >
                      বিদ্যালয়ের তথ্যাদি
                    </Link>
                    <Link
                      href="/"
                      className="text-sm font-semibold text-gray-600 px-2 hover:text-green-500 duration-500"
                    >
                      স্কুলের পরিচালকের বাণী
                    </Link>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              {/* জনবল */}
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-sm font-semibold py-0 pb-4">
                    জনবল
                  </AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-4">
                    <Link
                      href="/"
                      className="text-sm font-semibold text-gray-600 p-2 pb-3 border-b border-b-gray-200 hover:text-green-500 duration-500"
                    >
                      শিক্ষক/শিক্ষিকা
                    </Link>
                    <Link
                      href="/"
                      className="text-sm font-semibold text-gray-600 px-2 hover:text-green-500 duration-500"
                    >
                      স্কুল কমিটি সদস্যবৃন্দ
                    </Link>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              {/* শিক্ষার্থী */}
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-sm font-semibold py-0 pb-3">
                    শিক্ষার্থী
                  </AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-4">
                    <Link
                      href="/"
                      className="text-sm font-semibold text-gray-600 p-2 pb-3 border-b border-b-gray-200 hover:text-green-500 duration-500"
                    >
                      অধ্যয়নর‍ত শিক্ষার্থীর সংখ্যা
                    </Link>
                    <Link
                      href="/"
                      className="text-sm font-semibold text-gray-600 px-2 hover:text-green-500 duration-500"
                    >
                      অধ্যয়নর‍ত শিক্ষার্থীর তালিকা
                    </Link>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              {/* ফলাফল */}
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-sm font-semibold py-0 pb-4">
                    পরিক্ষার ফলাফল
                  </AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-4">
                    <Link
                      href="/"
                      className="text-sm font-semibold text-gray-600 p-2 pb-3 border-b border-b-gray-200 hover:text-green-500 duration-500"
                    >
                      পাবলিক পরীক্ষা
                    </Link>
                    <Link
                      href="/result"
                      className="text-sm font-semibold text-gray-600 px-2 hover:text-green-500 duration-500"
                    >
                      বিদ্যালয়ের অভ্যন্তরীণ পরীক্ষা
                    </Link>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <div className="p-2 border-b -mt-3 border-b-gray-200">
                <Link href="/" className="text-sm font-semibold">
                  ছবির গ্যালারী
                </Link>
              </div>
              <div className="p-2 -mt-3 border-b border-b-gray-200">
                <Link href="/" className="text-sm font-semibold">
                  যোগাযোগ
                </Link>
              </div>
            </div>

            <SheetFooter>
              <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 mb-10">
                <div className="flex items-center gap-1">
                  <p className="text-muted-foreground">EIIN No:</p>
                  <p className="text-black">121314</p>
                </div>
                <div className="flex items-center gap-1">
                  <p className="text-muted-foreground">School code:</p>
                  <p className="text-black">123456</p>
                </div>
                <div className="flex items-center gap-1">
                  <p className="text-muted-foreground">Reg No:</p>
                  <p className="text-black">121314151617</p>
                </div>
              </div>
              <Button className="bg-green-500 py-6 text-xl hover:bg-green-600 duration-500">
                Login
              </Button>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Navbar;
