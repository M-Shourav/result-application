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
import Container from "./ui/Component";

const Navbar: React.FC = () => {
  const [show, setShow] = useState(false); // initially hidden
  const [lastScroll, setLastScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (currentScroll > 100) {
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
    <div
      className={`py-5 fixed top-0 left-0 w-full z-50 bg-white transition-transform duration-500 shadow-md overflow-hidden ${
        show ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <Container className={"py-10"}>Navbar</Container>
    </div>
  );
};

export default Navbar;
