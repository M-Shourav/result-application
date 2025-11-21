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
  const [isOpen, setIsOpen] = useState(false); // mobile menu toggle

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (currentScroll > 50) setShow(true);
      else setShow(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 bg-green-50 shadow-md transition-transform duration-500 ${
        show ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        <Image
          src={Logo}
          alt="logo"
          className="w-[120px] md:w-[200px] h-auto"
        />

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-6">
          <Link href="/" className="hover:text-green-600 font-semibold">
            মূলপাতা
          </Link>
          <Link href="/" className="hover:text-green-600 font-semibold">
            পরিচিতি
          </Link>
          <Link href="/" className="hover:text-green-600 font-semibold">
            জনবল
          </Link>
          <Link href="/" className="hover:text-green-600 font-semibold">
            শিক্ষার্থী
          </Link>
          <Link href="/result" className="hover:text-green-600 font-semibold">
            ফলাফল
          </Link>
          <Link href="/" className="hover:text-green-600 font-semibold">
            গ্যালারী
          </Link>
          <Link href="/" className="hover:text-green-600 font-semibold">
            যোগাযোগ
          </Link>
        </nav>

        {/* Mobile menu button */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <button className="md:hidden text-green-600">
              <Menu size={30} />
            </button>
          </SheetTrigger>
          <SheetContent className="w-full max-w-[300px] p-0">
            <SheetHeader className="bg-green-50 p-4">
              <SheetTitle>
                <Image src={Logo} alt="logo" className="w-[120px] h-auto" />
              </SheetTitle>
            </SheetHeader>

            <div className="flex flex-col gap-4 px-4 pb-6 overflow-y-auto max-h-[calc(100vh-120px)]">
              {/* পরিচিতি */}
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-sm font-semibold py-2">
                    পরিচিতি
                  </AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-2">
                    <Link
                      href="/"
                      className="text-sm text-gray-600 hover:text-green-500 font-semibold"
                    >
                      প্রতিষ্ঠানের পরিচিতি
                    </Link>
                    <Link
                      href="/"
                      className="text-sm text-gray-600 hover:text-green-500 font-semibold"
                    >
                      বিদ্যালয়ের তথ্যাদি
                    </Link>
                    <Link
                      href="/"
                      className="text-sm text-gray-600 hover:text-green-500 font-semibold"
                    >
                      স্কুলের পরিচালকের বাণী
                    </Link>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              {/* জনবল */}
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-sm font-semibold py-2">
                    জনবল
                  </AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-2">
                    <Link
                      href="/"
                      className="text-sm text-gray-600 hover:text-green-500 font-semibold"
                    >
                      শিক্ষক/শিক্ষিকা
                    </Link>
                    <Link
                      href="/"
                      className="text-sm text-gray-600 hover:text-green-500 font-semibold"
                    >
                      স্কুল কমিটি সদস্যবৃন্দ
                    </Link>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              {/* শিক্ষার্থী */}
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-sm font-semibold py-2">
                    শিক্ষার্থী
                  </AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-2">
                    <Link
                      href="/"
                      className="text-sm text-gray-600 hover:text-green-500 font-semibold"
                    >
                      অধ্যয়নর‍ত শিক্ষার্থীর সংখ্যা
                    </Link>
                    <Link
                      href="/"
                      className="text-sm text-gray-600 hover:text-green-500 font-semibold"
                    >
                      অধ্যয়নর‍ত শিক্ষার্থীর তালিকা
                    </Link>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              {/* ফলাফল */}
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-sm font-semibold py-2">
                    পরিক্ষার ফলাফল
                  </AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-2">
                    <Link
                      href="/"
                      className="text-sm text-gray-600 hover:text-green-500 font-semibold"
                    >
                      পাবলিক পরীক্ষা
                    </Link>
                    <Link
                      href="/result"
                      className="text-sm text-gray-600 hover:text-green-500 font-semibold"
                    >
                      বিদ্যালয়ের অভ্যন্তরীণ পরীক্ষা
                    </Link>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <Link href="/" className="text-sm font-semibold mt-2">
                ছবির গ্যালারী
              </Link>
              <Link href="/" className="text-sm font-semibold">
                যোগাযোগ
              </Link>
            </div>

            <SheetFooter className="flex flex-col gap-3 p-4">
              <div className="flex flex-wrap gap-4 justify-center text-sm">
                <div>EIIN No: 121314</div>
                <div>School code: 123456</div>
                <div>Reg No: 121314151617</div>
              </div>
              <Button className="bg-green-500 hover:bg-green-600 py-3 w-full text-lg">
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
